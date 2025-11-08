import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, company, message, service } = await request.json();

    console.log('Starting email send process...');
    console.log('Form data received:', { name, email, company, service });

    // Create transporter object using Gmail SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true,
      logger: true
    });

    // Verify SMTP connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      throw verifyError;
    }

    // Email content
    const mailData = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to the same Gmail address
      subject: `New Contact Form Submission - ${service}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Service: ${service}
Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log('Attempting to send email...');
    
    // Send email
    const info = await transporter.sendMail(mailData);
    console.log('Email sent successfully:', info);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error:', error);
    // Log more details if available
    if (error.response) {
      console.error('SMTP Response:', error.response);
    }
    return NextResponse.json(
      { error: 'Error sending message', details: error.message },
      { status: 500 }
    );
  }
}