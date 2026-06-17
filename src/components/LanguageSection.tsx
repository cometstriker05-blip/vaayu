"use client";
import { useInView } from "@/hooks/useInView";
import { Mic } from "lucide-react";

const languages = [
  { name: "Tamil",     native: "தமிழ்",   region: "Tamil Nadu",      color: "#2AABC3" },
  { name: "Hindi",     native: "हिंदी",    region: "Pan-India",       color: "#C4622D" },
  { name: "Malayalam", native: "മലയാളം",  region: "Kerala",          color: "#2D6A4F" },
  { name: "Telugu",    native: "తెలుగు",   region: "Andhra Pradesh",  color: "#E8A838" },
  { name: "Odia",      native: "ଓଡ଼ିଆ",    region: "Odisha",          color: "#152E4A" },
];

export default function LanguageSection() {
  const { ref, inView } = useInView();

  return (
    <section
      className="bg-navy py-28 px-6 overflow-hidden relative"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(42,171,195,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(196,98,45,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — copy */}
          <div>
            <div className={`fade-up ${inView ? "visible" : ""}`}>
              <div className="inline-flex items-center gap-2 bg-teal/15 border border-teal/25 rounded-full px-4 py-2 mb-8">
                <Mic size={14} className="text-teal" />
                <span
                  className="text-teal text-xs tracking-[0.35em] uppercase font-semibold"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Voice-First Design
                </span>
              </div>

              <h2
                className={`fade-up delay-1 ${inView ? "visible" : ""} text-white leading-tight mb-6`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  fontWeight: 700,
                }}
              >
                Spoken in every language along India's shore.
              </h2>

              <p
                className={`fade-up delay-2 ${inView ? "visible" : ""} text-white/50 text-sm leading-relaxed mb-8 max-w-md`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Vaayu's voice assistant understands and responds in five coastal
                languages — so fishermen can interact naturally, without needing
                to read or type. Ask about weather, log a catch, or send an SOS,
                all in the language they grew up speaking.
              </p>

              <div
                className={`fade-up delay-3 ${inView ? "visible" : ""} flex flex-wrap gap-3`}
              >
                {["Low-literacy friendly", "Works offline", "Instant translation"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/60 border border-white/15 rounded-full px-4 py-1.5"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — language cards */}
          <div className={`fade-up delay-2 ${inView ? "visible" : ""} grid grid-cols-1 gap-3`}>
            {languages.map((lang, i) => (
              <div
                key={lang.name}
                className={`fade-up delay-${i + 2} ${inView ? "visible" : ""}
                  flex items-center justify-between rounded-2xl px-6 py-5
                  border border-white/8 hover:border-white/18 transition-all duration-300
                  bg-white/4 hover:bg-white/7 group hover:translate-x-2`}
              >
                <div className="flex items-center gap-5">
                  {/* Dot */}
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150"
                    style={{ backgroundColor: lang.color }}
                  />
                  {/* Native script */}
                  <span
                    className="text-white text-2xl font-semibold leading-none transition-transform duration-300 group-hover:scale-110 inline-block"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {lang.native}
                  </span>
                </div>

                <div className="text-right">
                  <p
                    className="text-white/80 text-sm font-medium"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {lang.name}
                  </p>
                  <p
                    className="text-white/35 text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {lang.region}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
