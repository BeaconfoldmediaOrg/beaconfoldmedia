"use client";

import { useEffect, useState, useRef } from "react";

const regions = [
  { name: "East Africa", cities: "Nairobi · Addis Ababa · Kampala", status: "Primary Hub" },
  { name: "West Africa", cities: "Lagos · Accra · Dakar", status: "Active" },
  { name: "Southern Africa", cities: "Johannesburg · Lusaka", status: "Active" },
  { name: "North Africa", cities: "Cairo · Tunis · Rabat", status: "Active" },
  { name: "Central Africa", cities: "Kigali · Kinshasa", status: "Emerging" },
  { name: "Global Diaspora", cities: "London · New York · Toronto", status: "Active" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % regions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              Who We Are
            </span> */}
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
             Who We Are
             
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              BeaconFold Media is a A Pan-African public relations and strategic communications agency
              dedicated to shaping impactful narratives for development, policy, and
              social change.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Built on the pillars of <span className="text-foreground font-medium">Evidence. Story. Action.</span>, we help
              organizations communicate with clarity, influence stakeholders strategically,
              and inspire transformative action across Africa.
            </p>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 gap-6">
              <div className="border-l-2 pl-4" style={{ borderColor: "var(--gold)" }}>
                <div className="text-xs font-mono text-muted-foreground mb-1">Vision</div>
                <div className="text-sm leading-relaxed">A Pan-African ecosystem where evidence, storytelling, and strategy drive policy and social change.</div>
              </div>
              <div className="border-l-2 pl-4" style={{ borderColor: "var(--gold)" }}>
                <div className="text-xs font-mono text-muted-foreground mb-1">Mission</div>
                <div className="text-sm leading-relaxed">To deliver high-impact advocacy, strategic communications, digital campaigns, audiovisual content, and events that amplify civic and development outcomes across Africa.</div>
              </div>
            </div>
          </div>

          {/* Right: Region list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
           <img src="/africa-1.png" alt="Africa map" />
          </div>
        </div>
      </div>
    </section>
  );
}
