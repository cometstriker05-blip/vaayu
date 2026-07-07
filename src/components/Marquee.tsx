const items = [
  "Navigate Safely",
  "தமிழ்",
  "Predict the Catch",
  "हिंदी",
  "Sail Smarter",
  "മലയാളം",
  "Read the Ocean",
  "తెలుగు",
  "Empower the Coast",
  "ଓଡ଼ିଆ",
  "Beyond Alerts",
];

export default function Marquee() {
  return (
    <div className="marquee bg-teal py-4 overflow-hidden" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {items.map((item) => (
              <span
                key={`${half}-${item}`}
                className="flex items-center text-navy text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
                style={{ fontFamily: "var(--font-label)" }}
              >
                {item}
                <span className="mx-8 text-navy/40 text-xs">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
