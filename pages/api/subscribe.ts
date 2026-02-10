import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SubscribeRequest {
  email: string;
}

interface SubscribeResponse {
  success: boolean;
  error?: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubscribeResponse>
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

  const { email } = req.body as SubscribeRequest;

  // Validate email
  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return res.status(400).json({ success: false, error: "Email is required" });
  }

  const trimmedEmail = email.trim().toLowerCase();

  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ success: false, error: "Please provide a valid email address" });
  }

  try {
    // Add contact to Resend
    const { error: contactError } = await resend.contacts.create({
      email: trimmedEmail,
      unsubscribed: false,
    });

    // Handle duplicate subscription gracefully
    if (contactError) {
      // Check if it's a duplicate error
      if (contactError.message?.includes("already exists")) {
        return res.status(200).json({ success: true }); // Treat as success
      }
      console.error("Failed to add contact:", contactError);
      return res.status(500).json({ success: false, error: "Failed to subscribe. Please try again." });
    }

    // Send welcome email
    const { error: emailError } = await resend.emails.send({
      from: "Maalik Ahmad <hello@maalikahmad.tech>",
      to: trimmedEmail,
      subject: "Welcome to My Blog Updates!",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #ff0000; padding-bottom: 10px;">
            Thanks for Subscribing!
          </h1>

          <p style="font-size: 16px; line-height: 1.6; color: #444;">
            Hey there! Thanks for subscribing to my blog updates. I'm excited to have you along for the journey.
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #444;">
            I write about development, design, and building products. You'll be the first to know when I publish something new.
          </p>

          <div style="margin: 30px 0;">
            <a href="https://maalikahmad.tech/blog"
               style="background: #ff0000; color: white; padding: 12px 24px; text-decoration: none; font-weight: 600;">
              Check Out the Blog
            </a>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #444;">
            Looking forward to sharing more with you!
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #444;">
            — Maalik
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="color: #666; font-size: 12px;">
            You received this email because you subscribed to blog updates on MaalikAhmad.tech
          </p>
        </div>
      `,
      text: `
Thanks for Subscribing!

Hey there! Thanks for subscribing to my blog updates. I'm excited to have you along for the journey.

I write about development, design, and building products. You'll be the first to know when I publish something new.

Check out the blog: https://maalikahmad.tech/blog

Looking forward to sharing more with you!

— Maalik

---
You received this email because you subscribed to blog updates on MaalikAhmad.tech
      `.trim(),
    });

    if (emailError) {
      console.error("Failed to send welcome email:", emailError);
      // Don't fail the subscription if just the welcome email fails
    }

    // Also notify site owner of new subscriber
    const contactEmail = process.env.CONTACT_EMAIL_TO;
    if (contactEmail) {
      await resend.emails.send({
        from: "Blog Subscription <hello@maalikahmad.tech>",
        to: contactEmail,
        subject: "New Blog Subscriber",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <h2>New Blog Subscriber</h2>
            <p><strong>Email:</strong> ${trimmedEmail}</p>
            <p style="color: #666; font-size: 12px;">Subscribed via MaalikAhmad.tech/blog</p>
          </div>
        `,
        text: `New Blog Subscriber\n\nEmail: ${trimmedEmail}\n\nSubscribed via MaalikAhmad.tech/blog`,
      }).catch(err => {
        console.error("Failed to send subscriber notification:", err);
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Subscription failed:", error);
    return res.status(500).json({ success: false, error: "Failed to subscribe. Please try again." });
  }
}
