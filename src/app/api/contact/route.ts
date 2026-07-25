import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();

    const { name, email, company, message } = body;

    // Server-side validation
    if (!name || !email || !name.trim() || !email.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid corporate email address." },
        { status: 400 }
      );
    }

    // SMTP Configuration for GoDaddy / Office 365
    const host = process.env.SMTP_HOST || "smtp.office365.com";
    const portNum = Number(process.env.SMTP_PORT) || 587;
    const isSecure = process.env.SMTP_SECURE === "true";
    const user = process.env.SMTP_USER || "info@arabiansamad.com";
    const pass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "info@arabiansamad.com";

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host,
      port: portNum,
      secure: isSecure, // false for 587 (STARTTLS)
      auth: {
        user,
        pass,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
    });

    // 1. Send Internal Notification Email to Designated Inbox (info@arabiansamad.com)
    const adminMailOptions = {
      from: `"Arabian Samad Website" <${user}>`,
      to: recipientEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `New Inquiry: ${name} ${company ? `(${company})` : ""}`,
      text: `
New Inquiry Submission

Name: ${name}
Email: ${email}
Company: ${company || "N/A"}

Message:
${message || "No additional message provided."}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background-color: #0e3054; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: bold; }
            .content { padding: 24px; }
            .field-group { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
            .label { font-size: 12px; font-weight: bold; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; }
            .value { font-size: 15px; color: #0f172a; margin-top: 4px; }
            .footer { background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry Received</h1>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Contact Name</div>
                <div class="value">${escapeHtml(name)}</div>
              </div>
              <div class="field-group">
                <div class="label">Corporate Email</div>
                <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Company</div>
                <div class="value">${escapeHtml(company || "N/A")}</div>
              </div>
              <div class="field-group" style="border-bottom: none;">
                <div class="label">Inquiry Message</div>
                <div class="value" style="white-space: pre-wrap;">${escapeHtml(message || "No additional message provided.")}</div>
              </div>
            </div>
            <div class="footer">
              Submitted via Arabian Samad Contact Desk
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Send Auto-Reply Confirmation Email to Visitor
    const visitorMailOptions = {
      from: `"Arabian Samad" <${user}>`,
      to: email,
      subject: `Thank you for contacting Arabian Samad`,
      text: `
Dear ${name},

Thank you for reaching out to Arabian Samad. We have successfully received your inquiry/RFQ submission.

Our trading desk is reviewing your parameters, and a procurement specialist will follow up with you shortly with a corporate soft offer.

Best regards,
Arabian Samad Trading Desk
Dubai, UAE
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background-color: #0e3054; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: bold; }
            .content { padding: 24px; line-height: 1.6; color: #334155; }
            .footer { background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Arabian Samad</h1>
            </div>
            <div class="content">
              <p>Dear <strong>${escapeHtml(name)}</strong>,</p>
              <p>Thank you for reaching out to Arabian Samad. We have successfully received your inquiry/RFQ submission.</p>
              <p>Our trading desk is reviewing your requested parameters, and a procurement specialist will follow up with you within 24 business hours with a formal soft offer.</p>
              <br/>
              <p>Best regards,<br/><strong>Arabian Samad Trading Desk</strong><br/>Dubai, UAE</p>
            </div>
            <div class="footer">
              Arabian Samad &bull; Fertilizer & Commodity Trading Desk
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Execute sending emails
    await transporter.sendMail(adminMailOptions);

    // Attempt auto-reply email (log warning if auto-reply fails, but don't break main flow)
    try {
      await transporter.sendMail(visitorMailOptions);
    } catch (autoReplyErr) {
      console.warn("Auto-reply email to visitor could not be delivered:", autoReplyErr);
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted and delivered successfully.",
    });
  } catch (error: unknown) {
    console.error("Error sending email via Nodemailer:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email inquiry.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
