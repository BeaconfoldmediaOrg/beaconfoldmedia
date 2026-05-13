"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    slug: "strategic-communications",
    number: "01",
    title: "Strategic Communications & Counsel",
    description: "Evidence-based communications strategy that guides your voice from insight to impact. We help you say the right thing, to the right people, at the right time — in every room that matters.",
    cta: "Learn More",
  },
  {
    slug: "advocacy-policy",
    number: "02",
    title: "Advocacy & Policy Communications",
    description: "From policy briefs to parliamentary submissions, we build the narrative infrastructure that shifts policy. Pan-African expertise, globally credible, culturally resonant.",
    cta: "Learn More",
  },
  {
    slug: "digital-strategy",
    number: "03",
    title: "Digital Strategy & Campaigns",
    description: "Multi-channel campaigns designed to mobilize, engage, and convert audiences. Data-driven strategy meets compelling storytelling for measurable reach and impact.",
    cta: "Learn More",
  },
  {
    slug: "audiovisual-production",
    number: "04",
    title: "Audiovisual Production & Podcasting",
    description: "Cinematic storytelling and podcast production that amplifies your mission. Powered Voice brings African advocacy voices to global audiences through compelling audio and visual content.",
    cta: "Learn More",
  },
  {
    slug: "event-communication",
    number: "05",
    title: "Event Communication",
    description: "Strategic visibility and engagement for conferences, forums, and convenings.",
    cta: "Learn More",
  },
  {
    slug: "research-impact-storytelling",
    number: "06",
    title: "Research & Impact Storytelling",
    description: "Turning evidence, insights, and data into compelling narratives.",
    cta: "Learn More",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group border border-foreground p-8 lg:p-10 flex flex-col gap-6 h-full hover:bg-foreground/[0.02] transition-colors duration-500"
      >
        {/* Number */}
        <span className="font-mono text-xs text-muted-foreground">{service.number}</span>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-display tracking-tight group-hover:translate-x-1 transition-transform duration-500">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />

        {/* Description — flex-1 pushes CTA to the bottom */}
        <p className="text-muted-foreground leading-relaxed flex-1">
          {service.description}
        </p>

        {/* CTA */}
        <span className="mt-2 inline-flex items-center gap-2 text-sm font-mono border border-foreground px-4 py-2 self-start transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
          {service.cta}
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </div>
  );
}

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
            Our Services
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Advocacy-led.
            <br />
            <span className="text-muted-foreground">Strategically delivered.</span>
          </h2>
        </div>

        {/* Cards grid — items-stretch ensures equal height */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        {/* Impact & Closing statements */}
        <div className="mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-24 border-t border-foreground/10 pt-12">
          <div>
            <span className="text-xs font-mono text-muted-foreground block mb-3">Impact Statement</span>
            <p className="text-xl lg:text-2xl font-display tracking-tight leading-snug">
              Every campaign, story, and strategy we create is designed to move audiences from awareness to action.
            </p>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe Africa&apos;s stories deserve strategic visibility, authentic representation, and measurable impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
