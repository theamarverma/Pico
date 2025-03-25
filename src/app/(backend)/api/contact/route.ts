import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, specialRequest } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_EMAIL,
      pass: process.env.NEXT_EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_EMAIL,
    to: process.env.NEXT_RECEIVER_EMAIL,
    subject: "New Reservation Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Special Request: ${specialRequest}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
