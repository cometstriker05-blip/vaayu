"use client";
import { useInView } from "@/hooks/useInView";
import CountUp from "./CountUp";

const stats = [
  { value: "4M+",   label: "Fishermen in India",   sub: "in coastal districts",         color: "#2AABC3" },
  { value: "7,517", label: "km of Coastline",       sub: "across 9 coastal states",      color: "#C4622D" },
  { value: "3,000", label: "Fishing Villages",      sub: "facing connectivity gaps",     color: "#2D6A4F" },
  { value: "₹0",   label: "Core Safety Tools",     sub: "always free, always on",       color: "#E8A838" },
];

export default function ImpactSection() {
  const { ref, inView } = useInView();

  return (
    <section
      id="impact"
      className="bg-sand py-24 px-6"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`fade-up ${inView ? "visible" : ""} mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4`}>
          <p
            className="text-teal text-xs tracking-[0.5em] uppercase font-semibold"
            style={{ fontFamily: "var(--font-label)" }}
          >
            The Scale of the Opportunity
          </p>
          <p
            className="text-navy/40 text-sm italic max-w-xs sm:text-right"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Numbers that make the mission impossible to ignore.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`fade-up delay-${i + 1} ${inView ? "visible" : ""}
                card-top-border bg-mist rounded-2xl p-8 border border-sand-dark
                hover:border-transparent hover:shadow-lg hover:shadow-navy/6
                transition-all duration-300 group text-center`}
              style={{ "--accent": s.color } as React.CSSProperties}
            >
              <p
                className="font-bold mb-2 transition-transform duration-300 group-hover:scale-110 inline-block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 5vw, 60px)",
                  lineHeight: 1,
                  color: s.color,
                }}
              >
                <CountUp value={s.value} start={inView} />
              </p>
              <p
                className="text-navy text-sm font-semibold tracking-wide mt-3 mb-1"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {s.label}
              </p>
              <p className="text-navy/40 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
