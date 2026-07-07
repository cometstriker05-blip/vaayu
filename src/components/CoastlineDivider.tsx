/* Stylized Indian coastline — bridges the mist section above into the sand section below.
   Pure SVG: lighthouse, fishing boats, palms, gulls, drifting water. */

export default function CoastlineDivider() {
  return (
    <div className="bg-mist overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 170"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        style={{ minHeight: 90 }}
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Sun */}
        <circle cx="1150" cy="52" r="38" fill="#E8A838" opacity="0.14" />
        <circle cx="1150" cy="52" r="24" fill="#E8A838" opacity="0.75" />

        {/* Gulls */}
        <g stroke="#0D2137" strokeOpacity="0.55" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <path d="M310 58q6-7 12 0q6-7 12 0" />
          <path d="M380 34q5-6 10 0q5-6 10 0" />
          <path d="M272 30q4-5 8 0q4-5 8 0" />
        </g>

        {/* Distant headland (left) */}
        <path
          d="M0 96q120-30 260-8q100 16 180 22L440 170L0 170Z"
          fill="#2AABC3"
          opacity="0.12"
        />

        {/* Lighthouse */}
        <g>
          <path d="M141 92l3.5-54h11l3.5 54Z" fill="#0D2137" />
          <path d="M145.6 56.5h8.8l.7 9h-10.2Z" fill="#C4622D" />
          <path d="M144.2 74.5h11.6l.7 9h-13Z" fill="#C4622D" />
          <rect x="143" y="28" width="14" height="10" rx="2" fill="#0D2137" />
          <circle cx="150" cy="33" r="3" fill="#E8A838" />
          <path d="M128 96q22-8 44 0l-4 8q-18-6-36 0Z" fill="#0D2137" opacity="0.85" />
        </g>

        {/* Palm cluster (right) */}
        <g>
          <path d="M1285 152q7-42-5-76" stroke="#0D2137" strokeWidth="5" fill="none" strokeLinecap="round" />
          <g stroke="#2D6A4F" strokeWidth="4" fill="none" strokeLinecap="round">
            <path d="M1280 76q-26-12-42 0" />
            <path d="M1280 76q-20-22-38-18" />
            <path d="M1280 76q6-26 24-30" />
            <path d="M1280 76q24-14 40-4" />
            <path d="M1280 76q20 4 30 18" />
          </g>
          <path d="M1338 154q5-32-4-58" stroke="#0D2137" strokeWidth="4" fill="none" strokeLinecap="round" />
          <g stroke="#2D6A4F" strokeWidth="3.2" fill="none" strokeLinecap="round">
            <path d="M1335 96q-20-10-32-1" />
            <path d="M1335 96q4-20 18-23" />
            <path d="M1335 96q19-9 30 0" />
          </g>
        </g>

        {/* Fishing boats */}
        <g fill="#0D2137">
          <g>
            <path d="M520 106h44l-8 13h-28Z" />
            <path d="M540 106V86" stroke="#0D2137" strokeWidth="2.5" />
            <path d="M540 86l17 20h-17Z" opacity="0.85" />
          </g>
          <g opacity="0.8">
            <path d="M770 120h32l-6 10h-20Z" />
            <path d="M784 120v-15" stroke="#0D2137" strokeWidth="2" />
            <path d="M784 105l12 15h-12Z" opacity="0.85" />
          </g>
          <g>
            <path d="M960 102h40l-7 12h-26Z" />
            <path d="M978 102V84" stroke="#0D2137" strokeWidth="2.5" />
            <path d="M978 84l15 18h-15Z" opacity="0.85" />
          </g>
        </g>

        {/* Water bands — drift with the existing wave animation */}
        <path
          className="wave-anim"
          d="M-80 122q60-12 120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0L1520 170L-80 170Z"
          fill="#2AABC3"
          opacity="0.20"
        />
        <path
          className="wave-anim-2"
          d="M-80 136q60-10 120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0t120 0L1520 170L-80 170Z"
          fill="#1A8A9E"
          opacity="0.28"
        />

        {/* Sandy shore — merges into the sand-coloured section below */}
        <path
          d="M0 152q240-14 480-6q300 10 520 4q240-8 440 4L1440 170L0 170Z"
          fill="#F4EDE3"
        />
      </svg>
    </div>
  );
}
