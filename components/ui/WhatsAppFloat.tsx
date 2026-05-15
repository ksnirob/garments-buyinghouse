import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/constants/data";

export default function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float flex items-center gap-2 bg-[#25D366] text-white rounded-full px-4 py-3 shadow-2xl hover:bg-[#1ebe5d] transition-colors duration-200 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="text-sm font-semibold whitespace-nowrap max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 ease-in-out">
        Get a Quote
      </span>
    </Link>
  );
}
