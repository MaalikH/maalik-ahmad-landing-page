import type { NextApiRequest, NextApiResponse } from "next";

interface AuthResponse {
  success: boolean;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { password } = req.body;

  if (!password || typeof password !== "string") {
    return res.status(400).json({ success: false, error: "Password is required" });
  }

  const correctPassword = process.env.BLOG_PASSWORD;

  if (!correctPassword) {
    console.error("BLOG_PASSWORD environment variable is not set");
    return res.status(500).json({ success: false, error: "Server configuration error" });
  }

  if (password === correctPassword) {
    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ success: false, error: "Incorrect password" });
}
