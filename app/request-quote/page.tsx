"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Upload, Send } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE } from "@/constants/data";

const PRODUCT_TYPES = [
  "T-Shirts / Jersey", "Polo Shirts", "Denim Jeans / Shorts", "Jackets / Outerwear",
  "Sweaters / Knitwear", "Hoodies / Sweatshirts", "Activewear / Sportswear",
  "Workwear / Uniforms", "Woven Shirts / Blouses", "Kidswear", "Lingerie", "Other",
];

const CERTIFICATIONS_NEEDED = [
  "BSCI", "SEDEX", "WRAP", "GOTS (Organic)", "OEKO-TEX",
  "Accord", "ISO 9001", "RSC", "None Required",
];

const QUANTITY_RANGES = [
  "Under 300 pcs", "300–1,000 pcs", "1,000–5,000 pcs",
  "5,000–20,000 pcs", "20,000–50,000 pcs", "50,000+ pcs",
];

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: "", email: "", company: "", country: "", phone: "",
    // Step 2
    productType: "", quantity: "", targetPrice: "", deliveryDate: "",
    // Step 3
    fabricRequirements: "", certifications: [] as string[], specialRequirements: "", hasDesigns: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleCertification = (cert: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0b0b0b] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Request Quote"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/80 to-[#0b0b0b]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp><SectionLabel>Get a Quote</SectionLabel></FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white leading-tight mt-4 mb-6 max-w-3xl">
              Request Your{" "}
              <span className="text-gradient-accent">Custom Quote</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[#9ca3af] text-lg max-w-2xl leading-relaxed">
              Complete our 3-step quote request form and receive a detailed pricing proposal within 48 hours. No obligation, no generic quotes — just precise pricing for your specific requirements.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {submitted ? (
            <div className="bg-white rounded-3xl p-16 text-center border border-[#e5e7eb] shadow-sm">
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={36} className="text-green-500" />
              </div>
              <h2 className="text-3xl font-black text-[#0b0b0b] mb-4">Quote Request Received!</h2>
              <p className="text-[#6b7280] mb-8 leading-relaxed">
                Thank you for reaching out. Our team will review your requirements and send a detailed quote within 48 business hours. You can also reach us on WhatsApp for a faster response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-[#0b0b0b] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors text-sm"
                >
                  Back to Home
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#0b0b0b] text-[#0b0b0b] font-bold px-8 py-4 rounded-full hover:bg-[#0b0b0b] hover:text-white transition-all text-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#e5e7eb] shadow-sm overflow-hidden">
              {/* Progress bar */}
              <div className="bg-[#0b0b0b] px-10 py-8">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-3 flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                          s === step
                            ? "border-[#d97706] bg-[#d97706] text-white"
                            : s < step
                            ? "border-[#d97706] bg-transparent text-[#d97706]"
                            : "border-white/20 text-white/30"
                        }`}
                      >
                        {s < step ? <CheckCircle size={14} /> : s}
                      </div>
                      <span className={`text-xs font-medium ${s === step ? "text-white" : "text-white/30"}`}>
                        {s === 1 ? "Your Info" : s === 2 ? "Product Details" : "Requirements"}
                      </span>
                      {s < 3 && <div className={`flex-1 h-px mx-2 ${s < step ? "bg-[#d97706]" : "bg-white/10"}`} />}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-10">
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h2 className="text-2xl font-black text-[#0b0b0b] mb-8">Your Contact Information</h2>
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
                      <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">
                        Country *
                      </label>
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
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full bg-[#0b0b0b] text-white font-bold py-4 rounded-xl hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-2"
                      >
                        Continue <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-[#0b0b0b] mb-8">Product Details</h2>
                    <div>
                      <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-3">
                        Product Type *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {PRODUCT_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, productType: type }))}
                            className={`px-4 py-3 rounded-xl text-xs font-medium text-left transition-all border ${
                              formData.productType === type
                                ? "border-[#d97706] bg-[#d97706]/5 text-[#d97706]"
                                : "border-[#e5e7eb] text-[#4b5563] hover:border-[#d97706]/30"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">
                          Quantity Range *
                        </label>
                        <select
                          name="quantity"
                          required
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] transition-all"
                        >
                          <option value="">Select quantity...</option>
                          {QUANTITY_RANGES.map((q) => <option key={q}>{q}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">
                          Target Price (per pcs, USD)
                        </label>
                        <input
                          type="text"
                          name="targetPrice"
                          value={formData.targetPrice}
                          onChange={handleChange}
                          placeholder="e.g. $4.50 – $6.00"
                          className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">
                        Required Delivery Date
                      </label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] transition-all"
                      />
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-[#e5e7eb] text-[#6b7280] font-bold py-4 rounded-xl hover:bg-[#f9fafb] transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 bg-[#0b0b0b] text-white font-bold py-4 rounded-xl hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-2"
                      >
                        Continue <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black text-[#0b0b0b] mb-8">Requirements & Specifications</h2>
                    <div>
                      <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-3">
                        Compliance Certifications Required
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {CERTIFICATIONS_NEEDED.map((cert) => (
                          <button
                            key={cert}
                            type="button"
                            onClick={() => toggleCertification(cert)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                              formData.certifications.includes(cert)
                                ? "border-[#d97706] bg-[#d97706]/10 text-[#d97706]"
                                : "border-[#e5e7eb] text-[#6b7280] hover:border-[#d97706]/30"
                            }`}
                          >
                            {formData.certifications.includes(cert) && <CheckCircle size={10} className="inline mr-1" />}
                            {cert}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">
                        Fabric / Material Requirements
                      </label>
                      <textarea
                        name="fabricRequirements"
                        value={formData.fabricRequirements}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g. 100% organic cotton, 180 GSM, reactive dyed, pre-washed..."
                        className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#374151] uppercase tracking-wider block mb-2">
                        Special Requirements / Notes
                      </label>
                      <textarea
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any additional information: packing requirements, labeling needs, inspection requirements, specific factories, etc."
                        className="w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 py-3 text-[#0b0b0b] text-sm focus:outline-none focus:border-[#d97706] transition-all resize-none"
                      />
                    </div>
                    <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-4 flex items-center gap-3">
                      <Upload size={18} className="text-[#d97706] shrink-0" />
                      <div>
                        <p className="text-[#92400e] font-semibold text-sm">Have a Tech Pack or Design?</p>
                        <p className="text-[#a16207] text-xs mt-0.5">Email your files to <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a> with subject &quot;Quote Request&quot;</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 border border-[#e5e7eb] text-[#6b7280] font-bold py-4 rounded-xl hover:bg-[#f9fafb] transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-[#d97706] to-[#ea580c] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        Submit Quote Request <Send size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
