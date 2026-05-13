"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection3() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="home">
      {/* Video background — place your file at public/hero-video.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/brand/hero.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient fade at bottom */}
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
            <a  href="/our-work">
            <Button
              size="lg"
              className="px-8 h-14 text-base rounded-full group"
              style={{ backgroundColor: "var(--gold)", color: "#0a0a0a" }}
            >
              Our Work
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            </a>
            <a  href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-white/30 text-black hover:bg-white/10"
            >
              Get In Touch
            </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom tagline */}
      <div
        className={`absolute z-10 bottom-8 left-0 right-0 max-w-[1400px] mx-auto px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
          Evidence. Story. Action.
        </span>
      </div>
    </section>
  );
}
