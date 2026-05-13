"use client";

import { useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { getServiceBySlug, getRelatedServices, servicesData } from "@/lib/services-data";

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

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs).slice(0, 3);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const overview = useFadeIn();
  const offerings = useFadeIn();
  const approach = useFadeIn();
  const whoSection = useFadeIn();
  const relatedSection = useFadeIn();

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation variant="light" />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden bg-foreground">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 pt-40">
          {/* Back link */}
          <a
            href="/#how-it-works"
            className={`inline-flex items-center gap-2 text-sm font-mono text-white/50 hover:text-white transition-all duration-300 mb-12 group ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            All Services
          </a>

          {/* Number + title */}
          <div
            className={`transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="font-mono text-sm text-white/30 block mb-4">{service.number}</span>
            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-display leading-[0.95] tracking-tight text-white mb-6">
              {service.title}
            </h1>
            <p
              className="text-xl lg:text-2xl max-w-2xl leading-relaxed"
              style={{ color: "var(--gold)" }}
            >
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div
          ref={overview.ref}
          className={`max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start transition-all duration-700 ${
            overview.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              Overview
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight leading-tight">
              What this service
              <br />
              <span className="text-muted-foreground">delivers.</span>
            </h2>
          </div>
          <div>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Deliver ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            ref={offerings.ref}
            className={`transition-all duration-700 ${
              offerings.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              What We Deliver
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-16">
              Core offerings.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
            {service.offerings.map((offering, i) => (
              <div
                key={offering.title}
                className={`bg-background p-8 lg:p-10 transition-all duration-700 ${
                  offerings.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-8 h-px mb-6"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <h3 className="text-xl lg:text-2xl font-display tracking-tight mb-4">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            ref={approach.ref}
            className={`transition-all duration-700 mb-16 ${
              approach.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/60 mb-6">
              <span className="w-8 h-px bg-background/40" />
              Our Approach
            </span>
            <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-background">
              How we work.
            </h2>
          </div>

          <div className="border-t border-background/20">
            {service.approach.map((step, i) => (
              <div
                key={step.step}
                className={`border-b border-background/20 py-8 lg:py-10 grid lg:grid-cols-[80px_1fr_2fr] gap-6 lg:gap-12 items-start transition-all duration-700 ${
                  approach.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-mono text-sm text-background/30">{step.step}</span>
                <h3 className="text-xl lg:text-2xl font-display tracking-tight text-background">
                  {step.title}
                </h3>
                <p className="text-background/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Work With ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            ref={whoSection.ref}
            className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-start transition-all duration-700 ${
              whoSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
                Who We Work With
              </span>
              <h2 className="text-3xl lg:text-5xl font-display tracking-tight">
                Built for
                <br />
                <span className="text-muted-foreground">changemakers.</span>
              </h2>
            </div>
            <ul className="space-y-4 pt-2 lg:pt-16">
              {service.whoWeWorkWith.map((client) => (
                <li key={client} className="flex items-start gap-4">
                  <span
                    className="shrink-0 mt-1 w-5 h-5 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--gold)", color: "var(--foreground)" }}
                  >
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-lg text-muted-foreground">{client}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 lg:py-28 border-t border-foreground/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div
              ref={relatedSection.ref}
              className={`transition-all duration-700 mb-12 ${
                relatedSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
                Related Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-display tracking-tight">
                You may also need.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
              {related.map((rel, i) => (
                <a
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className={`group bg-background p-8 lg:p-10 flex flex-col gap-4 hover:bg-foreground/[0.02] transition-all duration-500 ${
                    relatedSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="font-mono text-xs text-muted-foreground">{rel.number}</span>
                  <h3 className="text-xl font-display tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">{rel.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-2">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
      <FooterSection />
    </main>
  );
}

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}
