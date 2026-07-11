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
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>New Consultation Request</h2>

          <table cellpadding="8">
            <tr>
              <td><strong>Name</strong></td>
              <td>${fullName}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${companyName}</td>
            </tr>

            <tr>
              <td><strong>Requirement</strong></td>
              <td>${approvalRequirement}</td>
            </tr>

            <tr>
              <td><strong>Message</strong></td>
              <td>${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          error,
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
