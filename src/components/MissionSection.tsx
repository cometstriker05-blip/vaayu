"use client";
import { useInView } from "@/hooks/useInView";

const reasons = [
  {
    verb: "Navigate",
    rest: "safely.",
    body: "Real-time cyclone routing, hyperlocal weather, and offline SOS — so every decision on open water has the best data behind it.",
    num: "01",
  },
  {
    verb: "Adapt",
    rest: " to the ocean.",
    body: "Satellite-powered fishing zone predictions and live current maps that move with the sea, not against it.",
    num: "02",
  },
  {
    verb: "Operate",
    rest: " smarter.",
    body: "AI market forecasting, fuel-efficient routing, and catch analytics that turn every trip into a more profitable one.",
    num: "03",
  },
];

export default function MissionSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="mission"
      className="relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* ── Mission statement ── */}
      <div className="bg-mist py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p
            className={`fade-up ${inView ? "visible" : ""} text-teal text-xs tracking-[0.5em] uppercase mb-8 font-semibold`}
            style={{ fontFamily: "var(--font-label)" }}
          >
            Our Mission
          </p>
          <blockquote
            className={`fade-up delay-1 ${inView ? "visible" : ""} text-navy max-w-4xl`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 3.5vw, 44px)",
              lineHeight: 1.3,
              fontWeight: 400,
            }}
          >
            To strengthen the{" "}
            <em>safety, resilience, and economic stability</em> of India's
            coastal fishing communities — by delivering tools that{" "}
            <span className="text-teal font-semibold">prevent accidents</span>,{" "}
            <span className="text-terracotta font-semibold">reduce wasted effort</span>, and{" "}
            <span className="text-earth font-semibold">save lives at sea</span>.
          </blockquote>
        </div>
      </div>

      {/* ── Why Vaayu ── */}
      <div className="bg-navy px-6 py-28 relative overflow-hidden">
        {/* Decorative ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 15% 50%, rgba(42,171,195,0.10) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(42,171,195,0.06) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Opening statement */}
          <div className={`fade-up ${inView ? "visible" : ""} mb-20`}>
            <p
              className="text-teal text-xs tracking-[0.5em] uppercase mb-8 font-semibold"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Why Vaayu
            </p>

            <h2
              className="text-white leading-tight mb-6 max-w-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 6vw, 76px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Every decision
              <br />
              <em className="text-teal" style={{ fontWeight: 300 }}>
                at sea matters.
              </em>
            </h2>

            <p
              className="text-white/45 max-w-xl text-base leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              At 3 AM, 40 km from shore, with weather closing in — there's no
              time for guesswork. Vaayu brings ocean intelligence, predictive
              analytics, and real-time insights into one platform built for the
              people who need it most.
            </p>
          </div>

          {/* Three reasons — horizontal manifesto rows */}
          <div className="space-y-0 border-t border-white/8">
            {reasons.map((r, i) => (
              <div
                key={r.num}
                className={`fade-up delay-${i + 2} ${inView ? "visible" : ""}
                  group grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-12
                  py-10 border-b border-white/8
                  hover:bg-white/3 transition-colors duration-300 px-2`}
              >
                {/* Number */}
                <span
                  className="font-bold leading-none self-start mt-1 transition-colors duration-500 group-hover:text-teal/50"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3vw, 42px)",
                    color: "rgba(255,255,255,0.12)",
                  }}
                >
                  {r.num}
                </span>

                {/* Verb headline */}
                <h3
                  className="self-start leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 3vw, 36px)",
                    fontWeight: 700,
                  }}
                >
                  <span className="text-teal underline-slide">{r.verb}</span>
                  <span className="text-white">{r.rest}</span>
                </h3>

                {/* Body */}
                <p
                  className="text-white/45 text-sm leading-relaxed self-center"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {r.body}
                </p>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <div className={`fade-up delay-5 ${inView ? "visible" : ""} mt-16 flex items-center gap-6`}>
            <span className="w-10 h-px bg-teal opacity-60 flex-shrink-0" />
            <p
              className="text-white/50 text-sm italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From shore to sea — every voyage, smarter, safer, and more sustainable.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
