"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Menu, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/constants/data";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        menu,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
      const items = menu.querySelectorAll(".mobile-nav-item");
      gsap.fromTo(
        items,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, delay: 0.2, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(menu, { xPercent: 100, opacity: 0, duration: 0.4, ease: "power3.in" });
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          isScrolled
            ? "bg-[#0b0b0b]/90 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tight text-white">
                MART
              </span>
              <span className="text-2xl font-black tracking-tight text-gradient-accent">X</span>
              <span className="text-2xl font-black tracking-tight text-white ml-1">BD</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[0.8rem] font-medium tracking-wider uppercase transition-colors duration-200 animated-underline",
                  pathname === link.href
                    ? "text-[#d97706]"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "text-[0.8rem] font-medium tracking-wider uppercase transition-colors duration-200 animated-underline",
                pathname === "/contact"
                  ? "text-[#d97706]"
                  : "text-white/70 hover:text-white"
              )}
            >
              Contact
            </Link>
            <Link
              href="/request-quote"
              className="bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white text-[0.8rem] font-semibold tracking-wide px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Request Quote
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "fixed inset-0 z-[200] bg-[#0b0b0b] flex flex-col",
          !mobileOpen && "pointer-events-none"
        )}
        style={{ transform: "translateX(100%)", opacity: 0 }}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
            <span className="text-2xl font-black tracking-tight text-white">MART</span>
            <span className="text-2xl font-black tracking-tight text-gradient-accent">X</span>
            <span className="text-2xl font-black tracking-tight text-white ml-1">BD</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/70 hover:text-white p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile nav links */}
        <div className="flex-1 flex flex-col justify-center px-8 gap-2">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "mobile-nav-item text-4xl font-black tracking-tight py-3 border-b border-white/5 transition-colors duration-200",
                pathname === link.href ? "text-[#d97706]" : "text-white/80 hover:text-white"
              )}
            >
              <span className="text-[#d97706] text-sm mr-3 font-medium">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-quote"
            className="mobile-nav-item mt-6 bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white text-lg font-bold px-8 py-4 rounded-full text-center"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile footer info */}
        <div className="px-8 py-6 border-t border-white/5">
          <p className="text-[#9ca3af] text-sm">Dhaka, Bangladesh</p>
          <p className="text-[#d97706] text-sm font-medium mt-1">info@martxbd.com</p>
        </div>
      </div>
    </>
  );
}
