"use client";

import Image from "next/image";
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

const partners = [
  { src: "/partners/1.png", alt: "Partner logo 1", width: 2233, height: 329 },
  { src: "/partners/2.png", alt: "Partner logo 2", width: 405, height: 124 },
  { src: "/partners/3.png", alt: "Partner logo 3", width: 1061, height: 235 },
  { src: "/partners/4.png", alt: "Partner logo 4", width: 1795, height: 470 },
  { src: "/partners/5.png", alt: "Partner logo 5", width: 351, height: 144 },
  { src: "/partners/6.jpg", alt: "Partner logo 6", width: 1200, height: 630 },
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
    <section className="relative py-16 border-foreground/10 lg:pb-14">
      {/* <div className="max-w-7xl mx-auto px-6 lg:px-12"> */}
        {/* Section Label */}
        {/* <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What clients say
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div> */}

        {/* Main Quote */}
        {/* <div className="grid lg:grid-cols-12 gap-12 lg:gap-20"> */}
          {/* <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>
            </blockquote>
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
          </div> */}

          {/* Right: person image background + Key Result foreground */}
          {/* <div className="lg:col-span-4 flex flex-col justify-center gap-6"> */}
            {/* <div className="relative overflow-hidden aspect-[3/4]">
    
              <Image
                src="/works/digital.jpg"
                alt={activeTestimonial.author}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className={`object-cover object-top transition-all duration-500 ${
                  isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, var(--foreground) 0%, transparent 55%)",
                  opacity: 0.75,
                }}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                <span className="font-mono text-xs tracking-widest text-background/60 uppercase block mb-2">
                  Key Result
                </span>
                <p className="font-display text-2xl md:text-3xl text-background leading-tight">
                  {activeTestimonial.metric}
                </p>
           
                <div className="mt-3 w-8 h-0.5" style={{ backgroundColor: "var(--gold)" }} />
              </div>
            </div> */}

            {/* Navigation Dots */}
            {/* <div className="flex gap-2">
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
            </div> */}
          {/* </div> */}
        {/* </div> */}

        {/* Partners marquee */}
        <div className="border-foreground/10" id="partners">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Trusted by organizations across the Globe
          </p>
        {/* </div> */}
      </div>

      {/* Full-width marquee */}
      <div className="w-full">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {partners.map((partner) => (
                <div
                  key={`${setIdx}-${partner.src}`}
                  className="relative h-14 w-40 md:h-16 md:w-52 shrink-0 opacity-45 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
