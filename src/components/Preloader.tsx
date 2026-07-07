"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"show" | "exit" | "gone">("show");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exit"), 1350);
    const t2 = setTimeout(() => setPhase("gone"), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`preloader ${phase === "exit" ? "exit" : ""}`} aria-hidden="true">
      <img
        src="/logo.png"
        alt=""
        className="preloader-logo h-12 w-auto"
        style={{ filter: "brightness(0) invert(1)" }}
      />
      <div className="preloader-bar"><span /></div>
    </div>
  );
}
