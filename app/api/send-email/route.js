import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 465,
      secure: true, // Use SSL for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeName = name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeEmail = email.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeSubject = subject.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeMessage = message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

    // Email to the website owner
    const mailToOwner = {
      from: `"${safeName}" <${process.env.SMTP_USER}>`, // Send from authenticated user to avoid spam filters
      replyTo: email,
      to: process.env.SMTP_USER, // Owner's email
      subject: `New portfolio message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    };

    // Auto-reply email to the user who submitted the form
    const mailToUser = {
      from: `"Nilu Paudel" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thanks for contacting Nilu Paudel',
      text: `Hi ${name},\n\nThanks for reaching out. I received your message and will get back to you soon.\n\nYour message:\n${message}`,
      html: `
        <p>Hi ${safeName},</p>
        <p>Thanks for reaching out. I received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong></p>
        <p>${safeMessage}</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToUser);

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send emails', details: error.message }, { status: 500 });
  }
}
