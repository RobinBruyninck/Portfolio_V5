"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  )
  const [errorMessage, setErrorMessage] = useState<string>("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const firstName = String(data.get("firstName") || "")
    const lastName = String(data.get("lastName") || "")
    const email = String(data.get("email") || "")
    const message = String(data.get("message") || "")

    setStatus("loading")
    setErrorMessage("")

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const maybeJson = (await res.json().catch(() => null)) as
            | { error?: string }
            | null
          throw new Error(maybeJson?.error || "Something went wrong")
        }
        return res.json()
      })
      .then(() => {
        setStatus("success")
        form.reset()
      })
      .catch((err: unknown) => {
        setStatus("error")
        setErrorMessage(err instanceof Error ? err.message : "Something went wrong")
      })
  }

  return (
    <main
      className="relative min-h-[100dvh] overflow-x-hidden bg-[#0d0d0d] px-5 pb-24 pt-8 text-[#f2f2ee] md:px-10 md:pb-28 md:pt-10"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <section className="mx-auto w-full max-w-[1400px]">
        <h1 className="text-[clamp(3.4rem,12vw,11rem)] font-black leading-[0.88] tracking-[-0.045em] text-[#f2f2ee]">
          Contact me
        </h1>

        <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-12">
          <div className="space-y-4 text-[13px] uppercase leading-[1.45] tracking-[0.05em] text-[#f2f2ee]/80 md:col-span-4">
            <p>
              robin.bruyninckx@hotmail.com
            </p>

            <p>
              Based in Antwerp
              <br />
              Visual Design Student
            </p>

            <p className="max-w-[280px] text-[11px] leading-[1.4] text-[#f2f2ee]/65">
              Interested in working together, asking a question or just want to get in touch? Fill in the form
              and I will respond as soon as possible.
            </p>
          </div>

          <div className="md:col-span-8">
            <form onSubmit={handleSubmit} className="w-full max-w-[760px]">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.05em] text-[#f2f2ee]">
                Name (required)
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <label>
                  <span className="mb-1 block text-[11px] uppercase tracking-[0.05em] text-[#f2f2ee]/70">First Name</span>
                  <input
                    name="firstName"
                    required
                    className="h-11 w-full border-b border-[#f2f2ee]/50 bg-transparent text-[14px] text-[#f2f2ee] outline-none focus:border-[#f2f2ee]"
                  />
                </label>

                <label>
                  <span className="mb-1 block text-[11px] uppercase tracking-[0.05em] text-[#f2f2ee]/70">Last Name</span>
                  <input
                    name="lastName"
                    required
                    className="h-11 w-full border-b border-[#f2f2ee]/50 bg-transparent text-[14px] text-[#f2f2ee] outline-none focus:border-[#f2f2ee]"
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="mb-1 block text-[13px] font-semibold uppercase tracking-[0.05em] text-[#f2f2ee]">
                  Email (required)
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="h-11 w-full border-b border-[#f2f2ee]/50 bg-transparent text-[14px] text-[#f2f2ee] outline-none focus:border-[#f2f2ee]"
                />
              </label>

              <label className="mt-6 block">
                <span className="mb-1 block text-[13px] font-semibold uppercase tracking-[0.05em] text-[#f2f2ee]">
                  Message (required)
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border-b border-[#f2f2ee]/50 bg-transparent py-2 text-[14px] text-[#f2f2ee] outline-none focus:border-[#f2f2ee]"
                />
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-8 h-11 border border-[#f2f2ee] px-8 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0d0d0d] bg-[#f2f2ee] transition hover:bg-transparent hover:text-[#f2f2ee]"
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </button>

              <p className="mt-3 text-[11px] uppercase tracking-[0.05em] text-[#f2f2ee]/70" aria-live="polite">
                {status === "success" ? "Message sent. Thank you!" : null}
                {status === "error" ? `Error: ${errorMessage}` : null}
              </p>
            </form>
          </div>
        </div>
      </section>

      <nav className="relative z-30 mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-bold uppercase leading-[1] md:absolute md:bottom-3 md:left-3 md:mt-0 md:flex-col md:gap-y-1 md:text-[12px] md:bottom-4 md:left-4">
        <Link href="/" className="hover:text-[#f2f2ee]">
          Home
        </Link>
        <Link href="/projects" className="hover:text-[#f2f2ee]">
          Projects
        </Link>
        <Link href="/about" className="hover:text-[#f2f2ee]">
          About
        </Link>
        <a
          href="https://www.linkedin.com/in/robin-bruyninckx-ba01b6294/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f2f2ee]"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/robinbruyninck/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f2f2ee]"
        >
          Instagram
        </a>
      </nav>
    </main>
  )
}
