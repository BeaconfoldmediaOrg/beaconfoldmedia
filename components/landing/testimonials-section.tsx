"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "BeaconFold transformed how we communicate our advocacy. Their evidence-based approach gave our campaign the credibility it needed to move decision-makers.",
    author: "Fatima Osei",
    role: "Executive Director",
    company: "East Africa Policy Forum",
    metric: "3 ministries adopted our brief",
  },
  {
    quote: "Their digital campaign strategy exceeded every target we set. The reach, the engagement, the quality of content — it all delivered beyond expectation.",
    author: "Kwame Asante",
    role: "Program Director",
    company: "West Africa Development Foundation",
    metric: "2.4M campaign impressions",
  },
  {
    quote: "Working with BeaconFold gave us a voice in rooms we'd never reached before. Strategic, skilled, and deeply connected across the continent.",
    author: "Dr. Lena Mwangi",
    role: "Head of Advocacy",
    company: "Pan-African CSO Network",
    metric: "12 policy engagements convened",
  },
  {
    quote: "The Powered Voice podcast series they produced for us generated more dialogue than five years of previous communications combined.",
    author: "Ibrahim Coulibaly",
    role: "Communications Lead",
    company: "Sahel Advocacy Alliance",
    metric: "50,000+ episode listens",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What clients say
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div
              className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground">
                  {activeTestimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">{activeTestimonial.author}</p>
                <p className="text-muted-foreground">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
              style={{ borderColor: "var(--gold)" }}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display text-3xl md:text-4xl text-foreground">
                {activeTestimonial.metric}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className="h-2 transition-all duration-300"
                  style={{
                    width: idx === activeIndex ? "2rem" : "0.5rem",
                    backgroundColor: idx === activeIndex ? "var(--gold)" : "var(--foreground)",
                    opacity: idx === activeIndex ? 1 : 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Partners marquee */}
        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Trusted by organizations across Africa
          </p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="w-full">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {[
                "Africa Policy Forum",
                "Nairobi Civic Lab",
                "Sahel Advocacy Network",
                "Pan-African Women's Council",
                "East Africa Dev. Forum",
                "West Africa Policy Institute",
                "Horn of Africa Alliance",
                "Southern Africa CSO Hub",
              ].map((org) => (
                <span
                  key={`${setIdx}-${org}`}
                  className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                >
                  {org}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
