import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import StaggerReveal from "@/components/animations/StaggerReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/constants/data";

export const metadata: Metadata = {
  title: "Contact | Get in Touch with MartX BD",
  description:
    "Contact MartX BD for apparel sourcing inquiries, factory visits, compliance questions, or partnership opportunities. Based in Dhaka, Bangladesh.",
};

const OFFICES = [
  {
    city: "Dhaka (HQ)",
    address: "House 12, Road 7, Sector 6, Uttara, Dhaka-1230, Bangladesh",
    phone: SITE.phone,
    email: SITE.email,
    hours: "Sun-Thu: 9:00 AM - 6:00 PM",
  },
  {
    city: "Chattogram",
    address: "Agrabad Commercial Area, Chattogram, Bangladesh",
    phone: "+880 31 000 0000",
    email: "ctg@martxbd.com",
    hours: "Sun-Thu: 9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-[#0b0b0b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp><SectionLabel>Get In Touch</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight mt-4 mb-8 max-w-3xl">
              {"Let's Start a "}
              <span className="text-gradient-accent">Conversation</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
              Whether you have a specific sourcing requirement or just want to learn more about our services, our team is here to help. Reach out and we will respond within 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <FadeUp>
                <div className="bg-white rounded-3xl p-10 border border-[#e5e7eb] shadow-sm">
                  <h2 className="text-2xl font-black text-[#0b0b0b] mb-8">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <StaggerReveal>
                {OFFICES.map((office) => (
                  <div key={office.city} className="bg-white rounded-2xl p-8 border border-[#e5e7eb]">
                    <h3 className="text-[#0b0b0b] font-black text-lg mb-5">{office.city}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-[#d97706] mt-0.5 shrink-0" />
                        <p className="text-[#6b7280] text-sm">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-[#d97706] shrink-0" />
                        <a href={"tel:" + office.phone} className="text-[#0b0b0b] text-sm hover:text-[#d97706] transition-colors">{office.phone}</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-[#d97706] shrink-0" />
                        <a href={"mailto:" + office.email} className="text-[#0b0b0b] text-sm hover:text-[#d97706] transition-colors">{office.email}</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={16} className="text-[#d97706] shrink-0" />
                        <p className="text-[#6b7280] text-sm">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href={"https://wa.me/" + SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] rounded-2xl p-6 flex items-center gap-4 hover:opacity-90 transition-opacity block"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Chat on WhatsApp</p>
                    <p className="text-white/70 text-sm">Fastest response - within minutes</p>
                  </div>
                </a>
              </StaggerReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
