import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || process.env.EMAIL_RECIPIENT;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;

    if (smtpHost && smtpUser && smtpPassword) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort || "587"),
        secure: smtpPort === "465",
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      });

      const mailOptions = {
        from: `"${name}" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Contact Form Submission - ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          Company: ${company || "Not provided"}
          Service: ${service}
          Message: ${message || "No message provided"}
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Company:", company || "Not provided");
      console.log("Service:", service);
      console.log("Message:", message || "No message provided");
      console.log("===============================");
      console.log("\n⚠️  Email not configured. Please set up SMTP environment variables.");
      console.log("Set the following in your .env.local file:");
      console.log("CONTACT_EMAIL=your-email@example.com");
      console.log("SMTP_HOST=smtp.gmail.com (or your SMTP provider)");
      console.log("SMTP_PORT=587");
      console.log("SMTP_USER=your-email@gmail.com");
      console.log("SMTP_PASSWORD=your-app-password");
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

