/* Hand-drawn SVG icon set for Vaayu's nine features.
   Consistent style: 24-grid, 1.8 stroke, rounded caps, one filled accent per icon. */

type IconProps = { size?: number; color?: string };

const base = (size: number, color: string) => ({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "none",
  stroke: color,
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
});

/* Sun over rolling swell */
export function WeatherIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <circle cx="15.5" cy="7.5" r="3.1" />
      <path d="M15.5 1.8v1.7M21.2 7.5h-1.7M19.6 3.4l-1.2 1.2M11.4 3.4l1.2 1.2" />
      <path d="M2.5 15.5q1.3-1.6 2.6 0t2.6 0t2.6 0t2.6 0t2.6 0t2.6 0t2.6 0" />
      <path d="M4.5 19.5q1.3-1.6 2.6 0t2.6 0t2.6 0t2.6 0t2.6 0" />
    </svg>
  );
}

/* Cyclone spiral */
export function CycloneIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <path d="M12 12c0-1.7 1.4-3.1 3.1-3.1 2.3 0 4.2 1.9 4.2 4.2 0 3.2-2.6 5.8-5.8 5.8-4 0-7.3-3.3-7.3-7.3C6.2 6.7 10.1 3 14.9 3" />
      <circle cx="12" cy="12" r="1" fill={color} stroke="none" />
    </svg>
  );
}

/* Compass rose, north needle filled */
export function CompassIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 6.6L14.3 12L12 17.4L9.7 12Z" />
      <path d="M12 6.6L14.3 12H9.7Z" fill={color} stroke="none" />
    </svg>
  );
}

/* Lifebuoy ring */
export function LifebuoyIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M6 6l3.4 3.4M18 6l-3.4 3.4M6 18l3.4-3.4M18 18l-3.4-3.4" />
    </svg>
  );
}

/* Fish with forecast sparkle */
export function FishIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <path d="M4.2 12C7 7.6 11.6 6.1 15.2 7.9c2.1 1 3.8 2.5 5.1 4.1-1.3 1.6-3 3.1-5.1 4.1-3.6 1.8-8.2.3-11-4.1Z" />
      <path d="M4.2 12L1.6 9.3M4.2 12l-2.6 2.7" />
      <circle cx="16.9" cy="10.9" r="0.9" fill={color} stroke="none" />
      <path d="M20 2.6v2.4M18.8 3.8h2.4" />
    </svg>
  );
}

/* Rising market trend */
export function MarketIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <path d="M3.6 4v16.4h16.8" />
      <path d="M6.8 15.6l3.4-3.6 2.8 2.3 5.4-6.1" />
      <path d="M15.3 7.6l3.1-.4.5 3.1" />
    </svg>
  );
}

/* Fleet of two boats in signal contact */
export function FleetIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <path d="M2.8 16.2h6.4l-1.1 2.6H4z" />
      <path d="M6 16.2v-4.4M6 11.8l2.9 4.4" />
      <path d="M14.8 16.2h6.4l-1.1 2.6h-4.2z" />
      <path d="M18 16.2v-4.4M18 11.8l2.9 4.4" />
      <path d="M9.8 8.6q2.2-2.2 4.4 0" />
    </svg>
  );
}

/* Microphone with sound waves */
export function VoiceIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <rect x="9.9" y="2.8" width="4.2" height="8.4" rx="2.1" />
      <path d="M7 9.4a5 5 0 0 0 10 0" />
      <path d="M12 14.4v3.2M9.2 20.6h5.6" />
      <path d="M4.6 6.4q-1.6 3 0 6M19.4 6.4q1.6 3 0 6" />
    </svg>
  );
}

/* Cloud with sync loop */
export function SyncIcon({ size = 22, color = "currentColor" }: IconProps) {
  return (
    <svg {...base(size, color)}>
      <path d="M6.8 14.2a3.6 3.6 0 0 1-.4-7.2 4.8 4.8 0 0 1 9.4-1.1 4 4 0 0 1 1.6 7.7" />
      <path d="M8.4 19.6a3 3 0 0 1 5.4-2.5" />
      <path d="M13.4 15.4l.6 1.9-1.9.5" />
      <path d="M15.6 17.6a3 3 0 0 1-5.4 2.5" />
      <path d="M10.6 21.8l-.6-1.9 1.9-.5" />
    </svg>
  );
}
