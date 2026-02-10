import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  contact: string;
  message: string;
  honeypot?: string;
}

interface ContactResponse {
  success: boolean;
  error?: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Phone validation regex (supports various formats)
const phoneRegex = /^[\+]?[\s\-\(\)]?[\d\s\-\(\)]{10,}$/;

function validateContactInfo(contact: string): boolean {
  return emailRegex.test(contact) || phoneRegex.test(contact);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  // Check for required environment variables
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set");
    return res.status(500).json({ success: false, error: "Server configuration error" });
  }

  if (!process.env.CONTACT_EMAIL_TO) {
    console.error("CONTACT_EMAIL_TO environment variable is not set");
    return res.status(500).json({ success: false, error: "Server configuration error" });
  }

  const { name, contact, message, honeypot } = req.body as ContactFormData;

  // Honeypot spam protection - if this field is filled, it's a bot
  if (honeypot) {
    // Return success to not alert the bot, but don't actually send
    return res.status(200).json({ success: true });
  }

  // Validate required fields
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ success: false, error: "Name is required" });
  }

  if (!contact || typeof contact !== "string" || contact.trim().length === 0) {
    return res.status(400).json({ success: false, error: "Email or phone number is required" });
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return res.status(400).json({ success: false, error: "Message is required" });
  }

  // Validate contact format (email or phone)
  if (!validateContactInfo(contact.trim())) {
    return res.status(400).json({ success: false, error: "Please provide a valid email address or phone number" });
  }

  // Sanitize inputs
  const sanitizedName = sanitizeInput(name);
  const sanitizedContact = sanitizeInput(contact);
  const sanitizedMessage = sanitizeInput(message);

  // Determine contact type for display
  const isEmail = emailRegex.test(sanitizedContact);
  const contactLabel = isEmail ? "Email" : "Phone";

  try {
    await resend.emails.send({
      from: "Contact Form <contact@maalikahmad.tech>",
      to: process.env.CONTACT_EMAIL_TO,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #ff0000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 0 0 10px;"><strong>${contactLabel}:</strong> ${sanitizedContact}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="background: #f9f9f9; padding: 15px; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the contact form on MaalikAhmad.tech
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${sanitizedName}
${contactLabel}: ${sanitizedContact}

Message:
${sanitizedMessage}

---
This message was sent from the contact form on MaalikAhmad.tech
      `.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
  }
}
