import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic"; // Ensures API runs on the server

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      first_name,
      last_name,
      phone_no,
      email,
      message,
    } = body;

    // Manual validation
    const errors = [];
    if (!first_name) errors.push({ message: "First name is required" });
    if (!last_name) errors.push({ message: "Last name is required" });
    if (!phone_no) errors.push({ message: "Phone number is required" });
    if (!email) errors.push({ message: "Email is required" });
    if (!message) errors.push({ message: "Message is required" });

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Fix for some Gmail SSL issues
      },
    });

    // Define the email options with the image as an attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "nitink4800@gmail.com",
      subject: "New Message from Client",
      html: `
        <div>
          <h1> Client Details </h1>
          <p><span style="color: red;">First Name:</span> ${first_name}</p>
          <p><span style="color: red;">Last Name:</span> ${last_name}</p>
          <p><span style="color: red;">Phone:</span> ${phone_no}</p>
          <p><span style="color: red;">Email:</span> ${email}</p>
          <p><span style="color: red;">Message:</span> ${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "GET method not allowed" }, { status: 405 });
}