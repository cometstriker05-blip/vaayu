/* Portrait illustration for the "Why Vaayu" section —
   a lone fisherman casting his net at sunset. Pure SVG, gently animated. */

export default function FishermanScene() {
  return (
    <svg
      viewBox="0 0 480 560"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full block"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="A fisherman casting his net from a small boat at sunset"
    >
      <defs>
        <linearGradient id="fs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16324F" />
          <stop offset="0.5" stopColor="#B05A33" />
          <stop offset="1" stopColor="#E8A838" />
        </linearGradient>
        <linearGradient id="fs-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1A3A52" />
          <stop offset="1" stopColor="#0D2137" />
        </linearGradient>
        <radialGradient id="fs-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#E8A838" stopOpacity="0.55" />
          <stop offset="1" stopColor="#E8A838" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="480" height="340" fill="url(#fs-sky)" />

      {/* Stars in the upper sky */}
      <g fill="#FAF9F7">
        <circle cx="60" cy="46" r="1.6" opacity="0.7" />
        <circle cx="132" cy="26" r="1.2" opacity="0.5" />
        <circle cx="405" cy="38" r="1.5" opacity="0.6" />
        <circle cx="350" cy="70" r="1.1" opacity="0.4" />
        <circle cx="440" cy="90" r="1.3" opacity="0.5" />
        <circle cx="90" cy="100" r="1.1" opacity="0.35" />
      </g>

      {/* Sun setting on the horizon */}
      <circle cx="250" cy="322" r="130" fill="url(#fs-glow)" />
      <circle cx="250" cy="322" r="46" fill="#F4C46A" />

      {/* Gulls */}
      <g stroke="#0D2137" strokeOpacity="0.6" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M110 118q6-7 12 0q6-7 12 0" />
        <path d="M170 88q5-6 10 0q5-6 10 0" />
        <path d="M84 76q4-5 8 0q4-5 8 0" />
      </g>

      {/* Sea */}
      <rect x="0" y="340" width="480" height="220" fill="url(#fs-sea)" />
      <path d="M0 340h480" stroke="#E8A838" strokeOpacity="0.4" strokeWidth="1.5" />

      {/* Sun reflection on the water */}
      <g fill="#E8A838">
        <ellipse cx="250" cy="352" rx="36" ry="3" opacity="0.5" />
        <ellipse cx="244" cy="368" rx="46" ry="3" opacity="0.35" />
        <ellipse cx="256" cy="386" rx="28" ry="2.6" opacity="0.25" />
        <ellipse cx="246" cy="406" rx="40" ry="2.6" opacity="0.15" />
      </g>

      {/* Wave glints */}
      <g stroke="#FAF9F7" strokeOpacity="0.12" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M40 470q30-8 60 0t60 0" />
        <path d="M300 510q30-8 60 0t60 0" />
        <path d="M60 532q30-8 60 0t60 0" />
        <path d="M330 448q26-7 52 0" />
      </g>

      {/* Boat + fisherman — bobs gently on the swell */}
      <g className="scene-bob">
        {/* Hull */}
        <path d="M150 448Q240 470 330 446L312 486Q240 502 168 486Z" fill="#0A1826" />
        <path d="M162 452Q240 472 318 450" stroke="#1A3A52" strokeWidth="2" fill="none" />

        {/* Fisherman silhouette */}
        <g stroke="#0A1826" fill="none" strokeLinecap="round">
          {/* legs */}
          <path d="M216 450L221 407" strokeWidth="9" />
          <path d="M235 450L228 407" strokeWidth="9" />
          {/* torso, leaning into the throw */}
          <path d="M224 408L233 362" strokeWidth="11" />
          {/* rear arm bracing */}
          <path d="M231 372L207 392" strokeWidth="8" />
          {/* front arm mid-cast */}
          <path d="M233 366Q258 352 276 342" strokeWidth="8" />
        </g>
        <circle cx="237" cy="347" r="11" fill="#0A1826" />

        {/* Cast net — arcs of golden mesh leaving his hand */}
        <g stroke="#F4C46A" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="2 7" opacity="0.85">
          <path d="M276 342Q330 330 368 366" />
          <path d="M276 342Q340 352 372 400" />
          <path d="M276 342Q322 372 348 430" />
        </g>
        <g fill="#F4C46A" opacity="0.9">
          <circle cx="368" cy="366" r="2.6" />
          <circle cx="372" cy="400" r="2.6" />
          <circle cx="348" cy="430" r="2.6" />
        </g>
      </g>
    </svg>
  );
}
