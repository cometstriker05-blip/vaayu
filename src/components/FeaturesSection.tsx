"use client";
import {
  Cloud, AlertTriangle, Navigation2, ShieldCheck,
  Fish, TrendingUp, Users, Mic, WifiOff,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: Cloud,
    category: "Weather",
    title: "Hyper-Local Ocean & Weather Data",
    body: "Wind, currents, tides, and wave height updated on request. District-level Potential Fishing Zones from satellite data — precise enough to change your route, not just your plan.",
    accent: "#2AABC3",
  },
  {
    icon: AlertTriangle,
    category: "Safety",
    title: "Cyclone & Severe Weather Alerts",
    body: "Push notifications in local languages. Map overlays for cyclones, gales, and heavy rain. AI-driven cyclone escape routing that adjusts in real time as the storm moves.",
    accent: "#C4622D",
  },
  {
    icon: Navigation2,
    category: "Navigation",
    title: "Smart Navigation & Route Planning",
    body: "GPS compass with nautical charts. Fuel planner with eco-efficient routes calculated using live satellite current and wind maps — reducing fuel costs and emissions together.",
    accent: "#2D6A4F",
  },
  {
    icon: ShieldCheck,
    category: "Emergency",
    title: "Safety & Emergency Response",
    body: "One-tap SOS to Coast Guard, authorities, and emergency contacts. Group safety alerts broadcast to nearby boats. Crisis messaging that works even at the edge of coverage.",
    accent: "#C4622D",
  },
  {
    icon: Fish,
    category: "Intelligence",
    title: "AI-Based Catch Forecasting",
    body: "Combines live satellite PFZ data with AI models to predict catch volume, species mix, and trip profitability — with full economic risk analysis before you leave harbour.",
    accent: "#E8A838",
  },
  {
    icon: TrendingUp,
    category: "Market",
    title: "AI-Powered Market Price Forecast",
    body: "Live market prices from high-demand landing centres. Seasonal, demand, and festival-driven price trend predictions — so you know not just where to fish, but when to sell.",
    accent: "#2D6A4F",
  },
  {
    icon: Users,
    category: "Community",
    title: "Community SOS & Group Safety",
    body: "Alert every nearby boat in an emergency. Harbour-based group tracking so families know when fleets return. Offline SOS that queues and auto-sends when signal is found.",
    accent: "#2AABC3",
  },
  {
    icon: Mic,
    category: "Accessibility",
    title: "Multilingual Voice Assistant",
    body: "Ask about weather, log your catch, or report an issue — all by voice. Designed for low-literacy users. Voice-to-text in Tamil, Hindi, Malayalam, Telugu, and Odia.",
    accent: "#2AABC3",
  },
  {
    icon: WifiOff,
    category: "Offline",
    title: "Offline Mode with Smart Sync",
    body: "Maps, alerts, PFZ charts, and safety tutorials stored locally. Everything syncs automatically the moment connectivity is restored — no data lost, no missed update.",
    accent: "#152E4A",
  },
];

export default function FeaturesSection() {
  const { ref, inView } = useInView(0.05);

  return (
    <section id="features" className="bg-sand py-28 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`mb-20 fade-up ${inView ? "visible" : ""} flex flex-col md:flex-row md:items-end md:justify-between gap-6`}>
          <div>
            <p
              className="text-teal text-xs tracking-[0.5em] uppercase mb-5 font-semibold"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Core Capabilities
            </p>
            <h2
              className="text-navy"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              Nine tools.<br />One mission.
            </h2>
          </div>
          <p
            className="text-navy/50 max-w-xs text-sm leading-relaxed md:text-right"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Every feature addresses a specific, documented risk that Indian fishermen face — from the moment they leave harbour to the moment they sell their catch.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            const delay = Math.min(i + 1, 8);
            return (
              <div
                key={f.title}
                className={`fade-up delay-${delay} ${inView ? "visible" : ""}
                  card-border-slide bg-mist hover:bg-white rounded-2xl p-7 transition-all duration-300 group
                  border border-sand-dark hover:border-transparent hover:shadow-lg hover:shadow-navy/6`}
              >
                {/* Icon + category */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                    style={{ backgroundColor: f.accent + "18" }}
                  >
                    <Icon size={18} style={{ color: f.accent }} />
                  </div>
                  <span
                    className="text-xs tracking-[0.25em] uppercase font-semibold"
                    style={{ fontFamily: "var(--font-label)", color: f.accent }}
                  >
                    {f.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-navy text-lg font-semibold mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>

                {/* Body */}
                <p className="text-navy/50 text-sm leading-relaxed">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
