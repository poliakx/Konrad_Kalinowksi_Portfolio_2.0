import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Implement email sending
    // This is where you would integrate with your email service:
    // - Resend (https://resend.com)
    // - SendGrid (https://sendgrid.com)
    // - Gmail/SMTP via nodemailer
    // - AWS SES
    // etc.

    // For now, just return success
    // In production, you'd send the email here
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json(
      { message: "Message received! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Failed to process your message. Please try again." },
      { status: 500 }
    );
  }
}
