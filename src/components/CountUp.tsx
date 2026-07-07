"use client";
import { useEffect, useRef, useState } from "react";

/** Animates the numeric part of strings like "4M+", "7,517", "₹0". */
export default function CountUp({ value, start }: { value: string; start: boolean }) {
  const m = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const target = m ? parseInt(m[2].replace(/,/g, ""), 10) : 0;
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current || !m) return;
    started.current = true;
    const t0 = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  if (!m) return <>{value}</>;
  const shown = m[2].includes(",") ? n.toLocaleString("en-US") : String(n);
  return <>{m[1]}{shown}{m[3]}</>;
}
