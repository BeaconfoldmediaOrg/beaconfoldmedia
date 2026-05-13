"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/works/strike.jpg",
    caption: "Pan-African Youth Advocacy",
  },
  {
    image: "/works/health.jpg",
    caption: "Health Policy Communications",
  },
  {
    image: "/works/seminar.jpg",
    caption: "Strategic Convenings",
  },
  {
    image: "/works/digital.jpg",
    caption: "Digital Strategy & Campaigns",
  },
];

export function HeroSection2() {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Carousel background images */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient fade at bottom for stats */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-white/70">
            <span className="w-8 h-px bg-[var(--gold)]" />
            A Pan-African public relations and strategic communications agency
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(2.5rem,10vw,6rem)] font-display leading-[0.9] tracking-tight text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Guiding African</span>
            <span className="block">
              <span className="relative inline-block">
                Voices
                <span
                  className="absolute -bottom-2 left-0 right-0 h-3"
                  style={{ backgroundColor: "var(--gold)", opacity: 0.35 }}
                />
              </span>
            </span>
            <span className="block">for Change</span>
          </h1>
        </div>

        {/* Description + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
            className={`text-xl lg:text-2xl text-white/75 leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Strategic communications, advocacy, and storytelling that transform
            evidence into action across Africa.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="px-8 h-14 text-base rounded-full group"
              style={{ backgroundColor: "var(--gold)", color: "#0a0a0a" }}
            >
              Our Work
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-white/30 text-black hover:bg-white/10"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <div className="absolute z-20 inset-x-4 lg:inset-x-8 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
        <button
          type="button"
          onClick={prev}
          className="pointer-events-auto w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 transition-colors duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="pointer-events-auto w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-white/10 transition-colors duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom: dots + caption */}
      <div className="absolute z-20 bottom-8 left-0 right-0 max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Slide dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className="block h-px transition-all duration-300"
                style={{
                  width: i === current ? "2rem" : "1rem",
                  backgroundColor:
                    i === current ? "var(--gold)" : "rgba(255,255,255,0.4)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Current slide caption */}
        <span className="text-xs font-mono text-white/50">
          {slides[current].caption}
        </span>
      </div>
    </section>
  );
}
