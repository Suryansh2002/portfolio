import nodemailer from "nodemailer";

export type ContactEnquiry = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// escape before injecting into HTML
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildContactEmailHtml(input: ContactEnquiry): string {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const subject = escapeHtml(input.subject);
  const message = escapeHtml(input.message);

  const detailRow = (label: string, value: string) => `
    <tr>
      <td class="detail-label" width="32%" style="width:32%;padding:14px 16px;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;vertical-align:top;">${label}</td>
      <td class="detail-value" width="68%" style="width:68%;padding:14px 16px;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:15px;font-weight:600;vertical-align:top;overflow-wrap:anywhere;word-break:break-word;">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style>
      @media only screen and (max-width: 600px) {
        .wrapper { padding: 16px 8px !important; }
        .card { border-radius: 12px !important; }
        .header { padding: 24px 24px 28px !important; }
        .monogram { width: 42px !important; height: 42px !important; line-height: 42px !important; font-size: 19px !important; border-radius: 11px !important; }
        .wordmark { font-size: 17px !important; }
        .eyebrow { margin-top: 20px !important; font-size: 10px !important; }
        .headline { font-size: 19px !important; }
        .body { padding: 24px 24px 28px !important; }
        .intro { font-size: 14px !important; }
        .details { margin-top: 22px !important; }
        .detail-label { width: 34% !important; padding: 12px 12px !important; font-size: 10px !important; }
        .detail-value { width: 66% !important; padding: 12px 12px !important; font-size: 14px !important; }
        .message-block { padding: 16px 18px !important; }
        .msg-label { font-size: 10px !important; }
        .msg-text { font-size: 14px !important; }
        .cta-wrap { margin-top: 24px !important; }
        .cta-btn { display: block !important; padding: 14px 20px !important; }
        .footer { padding: 20px 24px !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background:#020617;">
    <div class="wrapper" style="margin:0;padding:32px 16px;background:#020617;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
      <div class="card" style="max-width:620px;margin:0 auto;background:#0f172a;border:1px solid #1e293b;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(2,6,23,0.7);">

        <!-- Top accent bar -->
        <div style="height:4px;background-image:linear-gradient(90deg,#22d3ee,#e879f9);"></div>

        <!-- Header -->
        <div class="header" style="background:#0f172a;background-image:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding:28px 32px;">
          <table role="presentation" style="width:100%;">
            <tr>
              <td style="vertical-align:middle;width:56px;">
                <div class="monogram" style="width:46px;height:46px;border-radius:12px;background:linear-gradient(135deg,#22d3ee,#e879f9);color:#020617;font-size:21px;font-weight:700;line-height:46px;text-align:center;">S</div>
              </td>
              <td style="vertical-align:middle;padding-left:14px;">
                <div class="wordmark" style="font-size:18px;font-weight:700;color:#ffffff;letter-spacing:0.02em;">Suryansh Sharma</div>
              </td>
            </tr>
          </table>
          <div class="eyebrow" style="margin-top:20px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#22d3ee;">New Portfolio Enquiry</div>
          <div class="headline" style="margin-top:6px;font-size:20px;font-weight:700;color:#ffffff;">You have a new message</div>
        </div>

        <!-- Body -->
        <div class="body" style="padding:32px 36px 36px;">
          <p class="intro" style="margin:0;font-size:15px;line-height:1.6;color:#94a3b8;">
            A visitor just submitted the contact form on your portfolio. Here are the details of the enquiry.
          </p>

          <!-- Details -->
          <div class="details" style="margin-top:24px;border:1px solid #1e293b;border-radius:12px;overflow:hidden;">
            <table role="presentation" style="width:100%;border-collapse:collapse;table-layout:fixed;">
              ${detailRow("Name", name)}
              ${detailRow("Email", email)}
              ${detailRow("Subject", subject)}
            </table>
          </div>

          <!-- Message -->
          <div class="message-block" style="margin-top:20px;background:#020617;border:1px solid #1e293b;border-left:4px solid #22d3ee;border-radius:10px;padding:20px 24px;">
            <div class="msg-label" style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#e879f9;font-weight:600;">Message</div>
            <div class="msg-text" style="margin-top:10px;font-size:15px;line-height:1.7;color:#f1f5f9;white-space:pre-wrap;">${message}</div>
          </div>

          <!-- CTA -->
          <div class="cta-wrap" style="margin-top:28px;text-align:center;">
            <a class="cta-btn" href="mailto:${email}" style="display:inline-block;background:linear-gradient(90deg,#22d3ee,#e879f9);color:#020617;padding:14px 34px;border-radius:999px;text-decoration:none;font-weight:600;font-size:14px;letter-spacing:0.02em;">Reply to ${name}</a>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer" style="background:#0b1320;border-top:1px solid #1e293b;padding:20px 32px;text-align:center;">
          <div style="font-size:12px;color:#94a3b8;">Suryansh Sharma — Portfolio</div>
          <div style="font-size:11px;color:#64748b;margin-top:4px;">suryansh.online</div>
        </div>
      </div>
    </div>
  </body>
</html>`;
}

export async function sendContactEmail(input: ContactEnquiry): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!adminEmail || !emailPassword) {
    throw new Error("Mail credentials (ADMIN_EMAIL / EMAIL_PASSWORD) are not configured");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: adminEmail, pass: emailPassword },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${adminEmail}>`,
    to: adminEmail,
    replyTo: { name: input.name, address: input.email },
    subject: `New Enquiry (${input.subject}) — ${input.name}`,
    html: buildContactEmailHtml(input),
  });
}
