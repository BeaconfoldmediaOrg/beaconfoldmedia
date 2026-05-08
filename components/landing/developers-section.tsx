"use client";

import { useState, useEffect, useRef } from "react";
import { Headphones } from "lucide-react";

const episodes = [
  {
    label: "Latest",
    content: `Ep. 23 — "The Policy Gap"
Featuring: Dr. Amara Diallo
Duration: 42:18
Topics: Health policy,
        CSO advocacy,
        Evidence use

→ Available now`,
  },
  {
    label: "Series",
    content: `Series: Democracy & Voice
Episodes: 8 complete
Season: 02 ongoing

Covering: Elections,
  civic space,
  youth participation,
  media freedom

→ Explore the series`,
  },
  {
    label: "Subscribe",
    content: `Subscribe to Powered Voice

Spotify        ✓ Available
Apple Podcasts ✓ Available
YouTube        ✓ Available
RSS Feed       ✓ Available

→ Never miss an episode`,
  },
];

const features = [
  {
    title: "Weekly episodes",
    description: "New conversations from Africa's policy and advocacy space, every week.",
  },
  {
    title: "Expert voices",
    description: "Policymakers, advocates, and changemakers from across the continent.",
  },
  {
    title: "Pan-African focus",
    description: "Stories, issues, and ideas from all regions of Africa.",
  },
  {
    title: "Everywhere you listen",
    description: "Available on Spotify, Apple Podcasts, YouTube, and more.",
  },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
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
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              Powered Voice
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Africa&apos;s stories.
              <br />
              <span className="text-muted-foreground">Amplified.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Powered Voice is BeaconFold Media&apos;s podcast and audiovisual production arm,
              bringing African advocacy conversations to global audiences through compelling
              audio and visual storytelling.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Episode panel */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Tabs */}
              <div className="flex items-center border-b border-foreground/10">
                {episodes.map((ep, idx) => (
                  <button
                    key={ep.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-4 text-sm font-mono transition-colors relative ${
                      activeTab === idx
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {ep.label}
                    {activeTab === idx && (
                      <span className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: "var(--gold)" }} />
                    )}
                  </button>
                ))}
                <div className="flex-1" />
                <div className="px-4 py-4 text-muted-foreground">
                  <Headphones className="w-4 h-4" />
                </div>
              </div>

              {/* Episode content */}
              <div className="p-8 font-mono text-sm bg-foreground/[0.01] min-h-[220px]">
                <pre className="text-foreground/80">
                  {episodes[activeTab].content.split("\n").map((line, lineIndex) => (
                    <div
                      key={`${activeTab}-${lineIndex}`}
                      className="leading-loose dev-code-line"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      <span className="inline-flex">
                        {line.split("").map((char, charIndex) => (
                          <span
                            key={`${activeTab}-${lineIndex}-${charIndex}`}
                            className="dev-code-char"
                            style={{
                              animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                            }}
                          >
                            {char === " " ? " " : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground hover:underline underline-offset-4">
                Visit Powered Voice
              </a>
              <span className="text-foreground/20">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                View all episodes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
