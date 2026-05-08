"use client";

import { useEffect, useState, useRef } from "react";
import { BookOpen, Globe, Lock, BarChart3 } from "lucide-react";

const principles = [
  {
    icon: BookOpen,
    title: "Evidence-First",
    description: "Every strategy grounded in rigorous research, data, and stakeholder insight before a single message is crafted.",
  },
  {
    icon: Globe,
    title: "Pan-African Depth",
    description: "Deep relationships across civil society, government, and media built over years of on-the-ground engagement.",
  },
  {
    icon: Lock,
    title: "Client Confidentiality",
    description: "Strict protocols to protect your strategy, sensitive information, and stakeholder relationships at all times.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    description: "Clear KPIs and evaluation frameworks ensure every engagement delivers documented, reportable outcomes.",
  },
];

const values = ["Integrity", "Leadership", "Collaboration", "Impact", "Creativity"];

export function SecuritySection() {
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
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              Principles
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Integrity is
              <br />
              non-negotiable.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Every engagement begins and ends with our commitment to evidence-based,
              ethical, and impactful work. Our values aren&apos;t aspirational —
              they&apos;re operational.
            </p>

            {/* Values */}
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <span
                  key={value}
                  className={`px-4 py-2 border text-sm font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${index * 50 + 200}ms`,
                    borderColor: "var(--gold)",
                    color: "var(--gold)",
                  }}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Principles */}
          <div className="grid gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:border-[var(--gold)] transition-colors duration-300">
                    <principle.icon className="w-5 h-5 group-hover:text-[var(--gold)] transition-colors duration-300" style={{ color: "inherit" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
