"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";


const steps = [
  {
    number: "1",
    title: "Evidence",
    description: "We ground every engagement in research. Stakeholder mapping, policy landscape analysis, and audience insights form the foundation before the first word is written.",
  },
  {
    number: "2",
    title: "Story",
    description: "We craft narratives that move people and shift policy. Compelling, credible, culturally resonant communications built for African contexts and global credibility.",
  },
  {
    number: "3",
    title: "Action",
    description: "We deploy strategy at scale. Multi-channel campaigns, coalition building, and policy engagements that create measurable change across the continent.",
  },
];

function StepCard({
  step,
  index,
  isOpen,
  onToggle,
}: {
  step: (typeof steps)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
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
      className={`transition-all duration-700 border-b border-background/25 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-6 lg:gap-12 py-8 lg:py-10 text-left group"
      >
        {/* Number */}
        <span className="shrink-0 font-display text-3xl text-background/80 w-10">
          {step.number}
        </span>

        {/* Title */}
        <h3
          className={`flex-1 text-2xl lg:text-4xl font-display tracking-tight text-background transition-transform duration-500 ${
            isOpen ? "" : "group-hover:translate-x-1"
          }`}
        >
          {step.title}
        </h3>

        {/* Plus / Minus */}
        <span
          className="shrink-0 w-9 h-9 flex items-center justify-center border border-background/60 text-background transition-all duration-300 group-hover:border-background/50"
          style={isOpen ? { borderColor: "var(--gold)", color: "var(--gold)" } : {}}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      {/* Collapsible description */}
      <div
        className="grid transition-all duration-500 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="text-lg text-background/80 leading-relaxed pb-8 pl-[calc(2.5rem+1.5rem)] lg:pl-[calc(2.5rem+3rem)]">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/100 mb-6">
            <span className="w-8 h-px bg-background/80" />
            Process
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight text-background transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Three pillars.
            <br />
            <span className="text-background/50">Endless impact.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-background/25">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
