import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      companyName,
      approvalRequirement,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "Udyora Ventures <noreply@udyora.com>",
      to: ["puniaaman369@gmail.com"],
      subject: `New Consultation Request - ${fullName}`,
      html: `
        <div style="background-color: #122130; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px 20px; color: #d6d1ce; min-height: 100%;">
          <!-- Card Container: Background #162534 matching site cards, with golden top border -->
          <div style="max-width: 600px; margin: 0 auto; background-color: #162534; border-top: 4px solid #e5c158; padding: 40px; box-sizing: border-box;">
            
            <!-- Header -->
            <h2 style="color: #ffffff; font-size: 24px; font-weight: 600; margin-top: 0; margin-bottom: 24px; letter-spacing: normal; text-transform: none;">
              New Consultation Request
            </h2>
            
            <p style="font-size: 15px; color: #d4d4d4b3; margin-bottom: 32px; line-height: 1.5;">
              You have received a new consultation submission from the website. Here are the details:
            </p>

            <!-- Details Table -->
            <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; font-size: 14px;">
              <tbody>
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                  <td style="padding: 14px 0; width: 30%; color: #ffffff; font-weight: 600; vertical-align: top;">Name</td>
                  <td style="padding: 14px 0; color: #d6d1ce; vertical-align: top;">${fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                  <td style="padding: 14px 0; color: #ffffff; font-weight: 600; vertical-align: top;">Email</td>
                  <td style="padding: 14px 0; color: #d6d1ce; vertical-align: top;">
                    <!-- Golden/Yellowish Link color -->
                    <a href="mailto:${email}" style="color: #e5c158; text-decoration: none; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                  <td style="padding: 14px 0; color: #ffffff; font-weight: 600; vertical-align: top;">Phone</td>
                  <td style="padding: 14px 0; color: #d6d1ce; vertical-align: top;">${phone}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                  <td style="padding: 14px 0; color: #ffffff; font-weight: 600; vertical-align: top;">Company</td>
                  <td style="padding: 14px 0; color: #d6d1ce; vertical-align: top;">${companyName || "N/A"}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                  <td style="padding: 14px 0; color: #ffffff; font-weight: 600; vertical-align: top;">Requirement</td>
                  <td style="padding: 14px 0; color: #d6d1ce; vertical-align: top;">${approvalRequirement}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; color: #ffffff; font-weight: 600; vertical-align: top;">Message</td>
                  <td style="padding: 14px 0; color: #d6d1ce; line-height: 1.6; vertical-align: top; white-space: pre-line;">${message || "No message provided."}</td>
                </tr>
              </tbody>
            </table>

            <!-- Footer Section -->
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 12px; color: #d4d4d4b3;">
              Sent via Udyora Ventures Automated System
            </div>
            
          </div>
        </div>
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
