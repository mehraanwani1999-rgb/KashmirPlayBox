"use client"

import { useEffect, useState } from "react"
import { Mail, PhoneCall, Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function ContactDetails() {
  const phone = "8899449965"
  const email = "contact@playboxkashmir.com"
  const instagramHandle = "playboxkashmir"

  const telLink = `tel:+91${phone}`
  const whatsappLink = `https://wa.me/91${phone}`
  const mailLink = `mailto:${email}`
  const instagramLink = `https://www.instagram.com/${instagramHandle}/`

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timer = window.setTimeout(() => {
      setCopied(false)
    }, 1500)

    return () => window.clearTimeout(timer)
  }, [copied])

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone)
      setCopied(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="px-4 py-8 sm:px-6 lg:py-10">
      <div className="shell">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-emerald-950/20 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="mb-8">
            {/* <p className="eyebrow text-white/45">CONTACT DETAILS</p> */}
            <h2 className="headline-lg mt-3 text-white">
              Contact Details
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {/* PHONE CARD */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <a
                    href={telLink}
                    aria-label="Call phone number"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20 transition hover:bg-emerald-500/25"
                  >
                    <PhoneCall className="h-5 w-5" />
                  </a>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                      Phone
                    </p>

                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="mt-1 text-lg font-semibold tracking-[-0.04em] text-white transition hover:text-white/85"
                    >
                      {phone}
                    </button>
                  </div>
                </div>

                {copied && (
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/75">
                    Copied
                  </span>
                )}
              </div>

              <div className="mt-5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#25D366]/15 px-4 py-2 text-[#25D366] ring-1 ring-[#25D366]/20 transition hover:bg-[#25D366]/20"
                >
                  <FaWhatsapp className="h-5 w-5" />

                  <span className="text-sm font-medium">
                    WhatsApp Chat
                  </span>
                </a>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/65">
                Tap the number to copy it, call directly using the phone icon,
                or start a WhatsApp chat.
              </p>
            </div>

            {/* EMAIL CARD */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Email
                  </p>

                  <a
                    href={mailLink}
                    className="mt-1 block break-all text-lg font-semibold tracking-[-0.04em] text-white transition hover:text-white/85"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/65">
                Opens a new email draft in your mail application.
              </p>
            </div>

            {/* INSTAGRAM CARD */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500/15 text-pink-300 ring-1 ring-pink-400/20">
                  <Instagram className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Instagram
                  </p>

                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-lg font-semibold tracking-[-0.04em] text-white transition hover:text-white/85"
                  >
                    @{instagramHandle}
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/65">
                Opens our Instagram profile in a new tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}