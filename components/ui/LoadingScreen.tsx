"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const screenRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const screen = screenRef.current;
    const text = textRef.current;
    const bar = barRef.current;
    if (!screen || !text || !bar) return;

    const tl = gsap.timeline();

    tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: "power2.inOut" })
      .fromTo(text, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.8")
      .to(text, { opacity: 0, y: -20, duration: 0.4 }, "+=0.3")
      .to(screen, {
        yPercent: -100,
        duration: 0.9,
        ease: "power3.inOut",
        onComplete: () => {
          if (screen) screen.style.display = "none";
        },
      });

    document.body.style.overflow = "hidden";
    tl.eventCallback("onComplete", () => {
      document.body.style.overflow = "";
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[99999] bg-[#0b0b0b] flex flex-col items-center justify-center"
    >
      <div ref={textRef} className="text-center mb-12">
        <div className="text-3xl font-black tracking-tight text-white mb-2">
          MART<span className="text-gradient-accent">X</span> BD
        </div>
        <p className="text-sm text-[#9ca3af] tracking-[0.2em] uppercase">
          Premium Garments Sourcing
        </p>
      </div>
      <div className="w-48 h-px bg-[#1a1a1a] relative overflow-hidden">
        <div
          ref={barRef}
          className="absolute inset-0 h-full origin-left"
          style={{ background: "linear-gradient(90deg, #d97706, #ea580c)" }}
        />
      </div>
    </div>
  );
}
