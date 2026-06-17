"use client";
import { useInView } from "@/hooks/useInView";

const challenges = [
  {
    number: "01",
    title: "Unpredictable, Severe Weather",
    body:
      "Cyclones, gales, and sudden squalls are intensifying. Without hyperlocal alerts beyond network coverage, fishermen make life-or-death decisions with yesterday's data.",
    accent: "#2AABC3",
  },
  {
    number: "02",
    title: "Shrinking & Shifting Fish Stocks",
    body:
      "Warming seas drive fish away from traditional grounds. Trips are longer, fuel burns higher, and catches arrive smaller — eroding livelihoods trip by trip.",
    accent: "#C4622D",
  },
  {
    number: "03",
    title: "Opaque Markets & Lost Income",
    body:
      "With no visibility into landing prices ahead of return, fishermen sell at whatever rate the middleman offers. Price manipulation costs communities millions each year.",
    accent: "#2D6A4F",
  },
  {
    number: "04",
    title: "Limited Offshore Connectivity",
    body:
      "Mobile networks vanish beyond 10 km from shore. Emergencies go unreported, help arrives too late, and fishermen are cut off from the information they need most.",
    accent: "#E8A838",
  },
];

export default function ProblemSection() {
  const { ref, inView } = useInView();

  return (
    <section id="problem" className="bg-mist py-28 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`mb-24 fade-up ${inView ? "visible" : ""} max-w-2xl`}>
          <p
            className="text-teal text-xs tracking-[0.5em] uppercase mb-5 font-semibold"
            style={{ fontFamily: "var(--font-label)" }}
          >
            The Challenge
          </p>
          <h2
            className="text-navy leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 5vw, 58px)",
              fontWeight: 700,
            }}
          >
            Four forces working against India's fishermen.
          </h2>
        </div>

        {/* Challenges — editorial stacked list */}
        <div className="divide-y divide-sand-dark border-t border-sand-dark">
          {challenges.map((c, i) => (
            <div
              key={c.number}
              className={`fade-up delay-${i + 1} ${inView ? "visible" : ""}
                group grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 py-10 md:py-12
                hover:bg-sand transition-colors duration-300 px-2`}
            >
              {/* Number */}
              <div className="flex items-start">
                <span
                  className="text-6xl font-bold leading-none transition-colors duration-500 group-hover:text-teal/40"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-sand-dark)",
                  }}
                >
                  {c.number}
                </span>
              </div>

              {/* Title */}
              <div className="flex items-start">
                <h3
                  className="text-navy text-xl font-semibold leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-3 mb-0.5 align-middle transition-transform duration-300 group-hover:scale-150"
                    style={{ backgroundColor: c.accent }}
                  />
                  {c.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex items-start md:justify-end">
                <p
                  className="text-navy/55 text-sm leading-relaxed max-w-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className={`mt-16 fade-up delay-5 ${inView ? "visible" : ""}`}>
          <p
            className="text-navy/40 text-sm leading-relaxed italic max-w-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vaayu was built to meet each of these challenges — not with workarounds,
            but with tools designed specifically for the people who live them.
          </p>
        </div>
      </div>
    </section>
  );
}
