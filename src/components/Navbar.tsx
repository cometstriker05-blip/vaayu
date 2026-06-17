"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Problem",  href: "#problem"  },
  { label: "Features", href: "#features" },
  { label: "Mission",  href: "#mission"  },
  { label: "Impact",   href: "#impact"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-glass
        ${scrolled
          ? "bg-white/95 shadow-sm shadow-black/8 py-3 border-b border-sand-dark"
          : "bg-transparent py-5"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="Vaayu"
            className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`underline-slide text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-navy/60 hover:text-navy"
                    : "text-white/75 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-label)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:block text-sm font-semibold px-5 py-2.5 transition-all duration-300 rounded-full ${
            scrolled
              ? "bg-teal text-white hover:bg-teal-deep"
              : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
          }`}
          style={{ fontFamily: "var(--font-label)" }}
        >
          Get Involved
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 mb-1.5 transition-all ${scrolled ? "bg-navy" : "bg-white"} ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 mb-1.5 transition-all ${scrolled ? "bg-navy" : "bg-white"} ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-navy" : "bg-white"} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 border-t border-sand-dark px-6 pb-6 pt-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-navy/65 hover:text-navy text-sm font-medium border-b border-sand transition-colors"
              style={{ fontFamily: "var(--font-label)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-5 bg-teal text-white text-center text-sm font-semibold py-3 rounded-full"
          >
            Get Involved
          </a>
        </div>
      )}
    </header>
  );
}
