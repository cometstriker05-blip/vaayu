export default function Footer() {
  return (
    <footer className="bg-navy text-white/40 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pb-12 border-b border-white/8">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Vaayu"
              className="h-10 w-auto object-contain mb-3"
              style={{ filter: "brightness(0) invert(1) opacity(0.85)" }}
            />
            <p
              className="text-white/35 text-sm italic mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &ldquo;Beyond alerts, towards empowerment.&rdquo;
            </p>
            <p className="text-white/20 text-xs mt-3">
              Guardian of the Sea — India's coastal fishing communities.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["Problem",  "#problem" ],
              ["Features", "#features"],
              ["Mission",  "#mission" ],
              ["Impact",   "#impact"  ],
              ["Contact",  "#contact" ],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-xs tracking-widest uppercase text-white/35 hover:text-white/80 transition-colors"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-10">
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} Vaayu. Built for India's coastal communities.
          </p>
          <div className="flex gap-6">
            <a href="mailto:hello@vaayu.in" className="text-xs hover:text-white/70 transition-colors">
              hello@vaayu.in
            </a>
            <span className="text-white/15">·</span>
            <a href="#" className="text-xs hover:text-white/70 transition-colors">Privacy</a>
            <span className="text-white/15">·</span>
            <a href="#" className="text-xs hover:text-white/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
