"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const serviceOptions = [
  { label: "Strategic Communications & Counsel", slug: "strategic-communications" },
  { label: "Advocacy & Policy Communications", slug: "advocacy-policy" },
  { label: "Digital Strategy & Campaigns", slug: "digital-strategy" },
  { label: "Audiovisual Production", slug: "audiovisual-production" },
  { label: "Event Communication", slug: "event-communication" },
  { label: "Research & Impact Storytelling", slug: "research-impact-storytelling" },
  { label: "Other / Not sure yet", slug: undefined },
];

function useFadeIn() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

export default function ContactPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const formSection = useFadeIn();
  const infoSection = useFadeIn();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up your form handler (e.g. Resend, Formspree, or a server action) here
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-20 lg:pb-5 overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-foreground/10"
              style={{ top: `${16.66 * (i + 1)}%`, left: 0, right: 0 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className={`transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              Get In Touch
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-display leading-[0.95] tracking-tight mb-8">
              Let&apos;s Build Stories
              <br />
              <span className="text-muted-foreground">That Drive Change</span>
            </h1>
            {/* <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Whether you are launching a campaign, shaping policy conversations, documenting
              impact, or building a movement — BeaconFold Media is ready to partner with you.
            </p> */}
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────── */}
      <section className="pb-12 py-5 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">

          {/* ── Form ── */}
          <div
            ref={formSection.ref}
            className={`transition-all duration-700 ${
              formSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Image */}
            <div className="w-full h-72 lg:h-96 overflow-hidden mb-10">
              <img
                src="/contact.png"
                alt="BeaconFold Media team"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-display tracking-tight mb-10">
              Start a Conversation
            </h2>

            {submitted ? (
              <div className="border border-foreground/20 p-10 lg:p-14 flex flex-col gap-4">
                <span
                  className="text-4xl lg:text-5xl font-display tracking-tight"
                  style={{ color: "var(--gold)" }}
                >
                  Message received.
                </span>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Thank you for reaching out. A member of the BeaconFold Media team will be in
                  touch within 48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setFormState({ name: "", organisation: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-4 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors self-start"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name + Organisation */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Full Name <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Osei"
                      className="border border-foreground/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formState.organisation}
                      onChange={handleChange}
                      placeholder="Organisation name"
                      className="border border-foreground/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Email <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@organisation.org"
                      className="border border-foreground/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+254 7xx xxx xxx"
                      className="border border-foreground/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                {/* Service interest */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="border border-foreground/20 bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors text-foreground appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.label} value={opt.label}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Tell Us About Your Project <span style={{ color: "var(--gold)" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your campaign, initiative, or challenge — what are you working on and how can we help?"
                    className="border border-foreground/20 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors resize-none placeholder:text-muted-foreground/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="self-start px-8 h-14 text-base rounded-full group"
                  style={{ backgroundColor: "var(--gold)", color: "var(--foreground)" }}
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs font-mono text-muted-foreground">
                  We respond within 48 hours on business days.
                </p>
              </form>
            )}
          </div>

          {/* ── Contact Info ── */}
          <div
            ref={infoSection.ref}
            className={`transition-all duration-700 delay-200 ${
              infoSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="sticky top-32 flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-display tracking-tight mb-8">
                  Contact Information
                </h2>

                <div className="flex flex-col gap-6">
                  <a
                    href="mailto:beaconfoldmedia@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <span
                      className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/20 group-hover:border-foreground transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-xs font-mono text-muted-foreground mb-1">Email</div>
                      <div className="text-sm group-hover:text-foreground/70 transition-colors">
                        beaconfoldmedia@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+254790546287"
                    className="flex items-start gap-4 group"
                  >
                    <span className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/20 group-hover:border-foreground transition-colors duration-300">
                      <Phone className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-xs font-mono text-muted-foreground mb-1">Business Line</div>
                      <div className="text-sm group-hover:text-foreground/70 transition-colors">
                        +254 790 546287
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/20">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-xs font-mono text-muted-foreground mb-1">KEYSTONE PARK</div>
                      <div className="text-sm text-muted-foreground">
                        Nairobi, Kenya
                        <span className="block text-xs mt-0.5">Pan-African Operations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-foreground/10" />

              {/* Values blurb */}
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  We would love to hear about your project, initiative, campaign, or partnership
                  opportunity. No brief is too early — reach out and let&apos;s explore together.
                </p>
                <span className="text-xs font-mono" style={{ color: "var(--gold)" }}>
                  Evidence. Story. Action.
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-foreground/10" />

              {/* Services quick links */}
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                 Why BeaconFold
                </div>
                <div className="flex flex-col gap-3">
                  
                    <div
                     
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-4 h-px transition-all duration-300 group-hover:w-6"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                     Pan-African perspective
                    </div>
                 <div
                     
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-4 h-px transition-all duration-300 group-hover:w-6"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                    Advocacy-driven communication
                    </div>
                    <div
                     
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-4 h-px transition-all duration-300 group-hover:w-6"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                    Strong storytelling expertise
                    </div>
                    <div
                     
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-4 h-px transition-all duration-300 group-hover:w-6"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                   Development communication focus
                    </div>
                    <div
                     
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-4 h-px transition-all duration-300 group-hover:w-6"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                    Strategic and creative execution
                    </div>
                     <div
                     
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span
                        className="w-4 h-px transition-all duration-300 group-hover:w-6"
                        style={{ backgroundColor: "var(--gold)" }}
                      />
                    Impact-oriented approach
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
