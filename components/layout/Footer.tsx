"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/constants/data";

const SocialIcon = ({ type }: { type: string }) => {
  if (type === "facebook") return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
  if (type === "instagram") return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
  if (type === "linkedin") return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
  if (type === "twitter") return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
  if (type === "youtube") return <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
  return null;
};


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0b] border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-[#d97706]/10 to-[#ea580c]/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label mb-3">Let&apos;s Work Together</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Ready to Source Your{" "}
              <span className="text-gradient-accent">Next Collection?</span>
            </h2>
            <p className="text-[#9ca3af] mt-3 max-w-xl text-sm leading-relaxed">
              Partner with Bangladesh&apos;s premier garments buying house. From sampling to shipment, we deliver excellence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/request-quote"
              className="bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
            >
              Request Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6">
              <span className="text-2xl font-black tracking-tight text-white">MART</span>
              <span className="text-2xl font-black tracking-tight text-gradient-accent">X</span>
              <span className="text-2xl font-black tracking-tight text-white ml-1">BD</span>
            </Link>
            <p className="text-[#9ca3af] text-sm leading-relaxed max-w-xs">
              World-class garments buying house and apparel sourcing company based in Dhaka, Bangladesh. Serving global fashion brands with ethical manufacturing and premium quality.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              {[
                { type: "facebook", href: SITE.social.facebook, label: "Facebook" },
                { type: "instagram", href: SITE.social.instagram, label: "Instagram" },
                { type: "linkedin", href: SITE.social.linkedin, label: "LinkedIn" },
                { type: "twitter", href: SITE.social.twitter, label: "Twitter" },
                { type: "youtube", href: SITE.social.youtube, label: "YouTube" },
              ].map(({ type, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-[#d97706] transition-all duration-200"
                  aria-label={label}
                >
                  <SocialIcon type={type} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9ca3af] text-sm hover:text-[#d97706] transition-colors duration-200 animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/request-quote"
                  className="text-[#9ca3af] text-sm hover:text-[#d97706] transition-colors duration-200 animated-underline"
                >
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 9).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-[#9ca3af] text-sm hover:text-[#d97706] transition-colors duration-200 animated-underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#d97706] mt-0.5 flex-shrink-0" />
                <span className="text-[#9ca3af] text-sm leading-relaxed">{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#d97706] flex-shrink-0" />
                <Link href={`tel:${SITE.phone}`} className="text-[#9ca3af] text-sm hover:text-[#d97706] transition-colors">
                  {SITE.phone}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#d97706] flex-shrink-0" />
                <Link href={`mailto:${SITE.email}`} className="text-[#9ca3af] text-sm hover:text-[#d97706] transition-colors">
                  {SITE.email}
                </Link>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-white text-sm font-semibold mb-3">Stay Updated</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#d97706] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#d97706] text-white rounded-full px-4 py-2.5 hover:opacity-90 transition-opacity"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9ca3af] text-xs">
            © {year} MartX BD. All rights reserved. Dhaka, Bangladesh.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-[#9ca3af] text-xs hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#9ca3af] text-xs hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <p className="text-[#9ca3af] text-xs">
            Garments Buying House Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
