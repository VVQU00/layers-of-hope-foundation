import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const subjectLabels: Record<string, string> = {
  general: "General Question",
  community: "Community Support",
  story: "Share My Story",
  volunteer: "Volunteer",
  partnership: "Partnership",
  donation: "Donation Question",
  other: "Other",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const firstName =
      typeof body.firstName === "string" ? body.firstName.trim() : "";
    const lastName =
      typeof body.lastName === "string" ? body.lastName.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const subject =
      typeof body.subject === "string" ? body.subject.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete every required field.",
        },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const subjectLabel = subjectLabels[subject] ?? "Website Contact";

    const { data, error } = await resend.emails.send({
      from: "Layers of Hope Foundation <contact@layersofhopefoundation.org>",
      to: ["lohfoundation@outlook.com"],
      replyTo: email,
      subject: `${subjectLabel} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h1 style="color: #0f766e;">New Layers of Hope Contact Message</h1>

          <p>
            A new message was submitted through
            <strong>layersofhopefoundation.org</strong>.
          </p>

          <hr style="border:0;border-top:1px solid #cbd5e1;margin:24px 0;" />

          <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>

          <p><strong>Message:</strong></p>

          <div style="white-space:pre-wrap;border-left:4px solid #0f766e;padding:12px 16px;background:#f0fdfa;">
            ${escapeHtml(message)}
          </div>
        </div>
      `,
      text: `
New Layers of Hope Contact Message

Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subjectLabel}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend contact error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Your message could not be sent.",
          error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message was sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}