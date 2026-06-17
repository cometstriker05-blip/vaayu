"use client";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const roles = [
  "Fisherman / Fisher Community",
  "NGO / Social Organisation",
  "Government / Policy Body",
  "Investor / Funder",
  "Researcher / Academic",
  "Press / Media",
  "Technology Partner",
  "Other",
];

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="bg-mist py-28 px-6"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* Left — copy */}
        <div>
          <p
            className={`fade-up ${inView ? "visible" : ""} text-teal text-xs tracking-[0.5em] uppercase mb-6 font-semibold`}
            style={{ fontFamily: "var(--font-label)" }}
          >
            Get Involved
          </p>
          <h2
            className={`fade-up delay-1 ${inView ? "visible" : ""} text-navy mb-6`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 4.5vw, 52px)",
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            The sea doesn't wait. Neither should you.
          </h2>
          <p
            className={`fade-up delay-2 ${inView ? "visible" : ""} text-navy/55 text-sm leading-relaxed max-w-md mb-10`}
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Whether you represent a fishing community, an NGO, a government body, or a funding organisation — we want to hear from you. Vaayu is built through partnership.
          </p>

          {/* Contact info */}
          <div className={`fade-up delay-3 ${inView ? "visible" : ""} space-y-5`}>
            {[
              { label: "Email",            value: "hello@vaayu.in",     href: "mailto:hello@vaayu.in" },
              { label: "Partnerships",     value: "partners@vaayu.in",  href: "mailto:partners@vaayu.in" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="w-7 h-px bg-teal mt-2.5 flex-shrink-0" />
                <div>
                  <p
                    className="text-navy/40 text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="text-navy/70 text-sm hover:text-teal transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4">
              <span className="w-7 h-px bg-teal mt-2.5 flex-shrink-0" />
              <div>
                <p
                  className="text-navy/40 text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Coastal Presence
                </p>
                <p className="text-navy/70 text-sm">
                  Tamil Nadu · Kerala · Andhra Pradesh · Odisha
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className={`fade-up delay-2 ${inView ? "visible" : ""}`}>
          {sent ? (
            <div className="bg-sand rounded-2xl border border-teal/20 p-12 text-center">
              <p
                className="text-teal text-2xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Thank you.
              </p>
              <p className="text-navy/50 text-sm leading-relaxed">
                We'll be in touch within 48 hours. The sea is vast — but so is what we can build together.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Your Name",      key: "name",    type: "text",  placeholder: "Full name" },
                { label: "Email Address",  key: "email",   type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    className="block text-navy/55 text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {field.label}
                  </label>
                  <input
                    required
                    type={field.type}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-sand border border-sand-dark focus:border-teal focus:border-l-4 outline-none rounded-xl px-4 py-3 text-sm text-navy placeholder-navy/25 transition-all duration-200"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-navy/55 text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  I am a…
                </label>
                <select
                  required
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full bg-sand border border-sand-dark focus:border-teal focus:border-l-4 outline-none rounded-xl px-4 py-3 text-sm text-navy transition-all duration-200 appearance-none"
                >
                  <option value="" disabled>Select your role</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-navy/55 text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-sand border border-sand-dark focus:border-teal focus:border-l-4 outline-none rounded-xl px-4 py-3 text-sm text-navy placeholder-navy/25 transition-all duration-200 resize-none"
                  placeholder="Tell us how you'd like to collaborate…"
                />
              </div>

              <button
                type="submit"
                className="btn-pulse w-full bg-teal hover:bg-teal-deep text-white text-sm font-semibold py-4 rounded-xl transition-colors duration-300 shadow-md shadow-teal/20"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
