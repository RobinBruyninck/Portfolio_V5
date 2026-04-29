import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

export const runtime = "nodejs"

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(4000),
})

type ContactPayload = z.infer<typeof contactSchema>

function buildPlainTextEmail(payload: ContactPayload) {
  const fullName = `${payload.firstName} ${payload.lastName}`.trim()

  return [
    `Name: ${fullName}`,
    `Email: ${payload.email}`,
    "",
    "Message:",
    payload.message,
  ].join("\n")
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { ok: false, error: "Server is missing RESEND_API_KEY / CONTACT_TO_EMAIL" },
      { status: 500 },
    )
  }

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data" },
      { status: 400 },
    )
  }

  const payload = parsed.data
  const fullName = `${payload.firstName} ${payload.lastName}`.trim()

  const resend = new Resend(apiKey)

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Portfolio contact: ${fullName}`,
      text: buildPlainTextEmail(payload),
      replyTo: payload.email,
    })

    if (error) {
      return NextResponse.json(
        { ok: false, error: "Failed to send email" },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null })
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 502 },
    )
  }
}
