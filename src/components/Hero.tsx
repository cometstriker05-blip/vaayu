export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-beach.png')" }}
      />

      {/* Layered gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,33,55,0.55) 0%, rgba(13,33,55,0.10) 40%, rgba(13,33,55,0.45) 100%)",
        }}
      />

      {/* Subtle warm tint on lower half for sunset feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 85%, rgba(232,168,56,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Eyebrow */}
        <p
          className="hero-badge text-white/70 text-xs tracking-[0.55em] uppercase mb-10"
          style={{ fontFamily: "var(--font-label)" }}
        >
          Safety · Resilience · Empowerment
        </p>

        {/* Headline */}
        <h1
          className="hero-title text-white mb-6 leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(72px, 15vw, 160px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Vaayu
        </h1>

        {/* Tagline */}
        <p
          className="hero-sub text-white/70 mb-14 max-w-lg mx-auto"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(17px, 2.2vw, 24px)",
            lineHeight: 1.5,
            fontWeight: 300,
          }}
        >
          Beyond alerts, towards empowerment — for India's four million fishermen.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="btn-arrow-group btn-pulse bg-teal hover:bg-teal-deep text-white px-9 py-4 text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-teal/30 flex items-center gap-2"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Explore Features
            <span className="btn-arrow">→</span>
          </a>
          <a
            href="#mission"
            className="border border-white/40 hover:border-teal hover:shadow-[0_0_18px_rgba(42,171,195,0.35)] text-white px-9 py-4 text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-sm"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Our Mission
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-50">
          <span
            className="text-white text-[10px] tracking-[0.45em] uppercase"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Scroll
          </span>
          <span className="block w-px h-8 bg-white/60 animate-pulse" />
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
          style={{ display: "block" }}
        >
          <path
            className="wave-anim"
            d="M0,45 C180,80 360,10 540,45 C720,80 900,10 1080,45 C1260,80 1380,28 1440,45 L1440,90 L0,90 Z"
            fill="#FAF9F7"
            fillOpacity="0.12"
          />
          <path
            className="wave-anim-2"
            d="M0,55 C200,18 400,72 600,50 C800,28 1000,72 1200,50 C1300,40 1380,55 1440,60 L1440,90 L0,90 Z"
            fill="#FAF9F7"
            fillOpacity="0.22"
          />
          <path
            d="M0,65 C300,45 600,82 900,65 C1100,52 1300,70 1440,68 L1440,90 L0,90 Z"
            fill="#FAF9F7"
          />
        </svg>
      </div>
    </section>
  );
}
