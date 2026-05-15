"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-green-500" />
        </div>
        <h3 className="text-[#0b0b0b] font-black text-xl mb-2">Message Sent!</h3>
        <p className="text-[#6b7280]">We&apos;ll get back to you within 24 business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "John Smith", required: true },
          { label: "Email Address", name: "email", type: "email", placeholder: "john@company.com", required: true },
          { label: "Company Name", name: "company", type: "text", placeholder: "Your Company Ltd." },
          { label: "Phone / WhatsApp", name: "phone", type: "tel", placeholder: "+1 234 567 8900" },
        ].map((field) => (
          <div key={field.name}>
            <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">
              {field.label} {field.required && "*"}
            </label>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              value={formData[field.name as keyof typeof formData] as string}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] transition-all"
            />
          </div>
        ))}
      </div>
      <div>
        <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">Country *</label>
        <input
          type="text"
          name="country"
          required
          value={formData.country}
          onChange={handleChange}
          placeholder="e.g. United States, Germany, United Kingdom..."
          className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] transition-all"
        />
      </div>
      <div>
        <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">Subject</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] transition-all"
        >
          <option value="">Select a topic...</option>
          <option>Product Sourcing Inquiry</option>
          <option>Request for Quote</option>
          <option>Factory Visit / Audit</option>
          <option>Compliance Information</option>
          <option>Partnership Opportunity</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">Message *</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your sourcing needs, product type, quantities, target pricing, delivery timeline..."
          className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        Send Message <Send size={16} />
      </button>
    </form>
  );
}
