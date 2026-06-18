"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const works = [
  {
    id: "01",
    category: "Digital Campaign",
    title: "Express your beauty",
    description: "A multi-platform mobilization campaign that engaged 2.4M+ young Africans on civic rights and democratic participation across 12 countries.",
    client: "Circleg",
    year: "2024",
    featured: true,
    image: "/brand/group-3.jpg",
    videoId: "xZ2mBdqXKIU",
    videoUrl: "https://youtu.be/xZ2mBdqXKIU?list=PLaUUxusj0eU5aVB-lze7Y23F-Tq6FgNp0",
    link:"https://circleg.world/home.html"
  },
  {
    id: "02",
    category: "Policy Communications",
    title: "Food policy Campaign",
    description: "The Food Policy Coalition Kenya works to advance stronger food environment policies and address the growing burden of non-communicable diseases (NCDs) in Kenya.",
    client: "Food Policy Coalition",
    year: "2026",
    featured: false,
    image: "/works/food-policy.jpg",
    videoId: "6tPFk4TCA6I",
    videoUrl: "https://youtu.be/6tPFk4TCA6I?si=rJTYjpMgf6_g4PeI",
    link:"https://foodpolicy.ke/about"
  },
  {
    id: "03",
    category: "Audiovisual Production",
    title: "Road safety campaign",
    description: "This Kenyan campaign, aiming to curb speeding, was launched by the Mombasa County Government in collaboration with the National Transport and Safety Authority and the National Police Service. ",
    client: "Vital Strategies",
    year: "2023",
    featured: false,
    image: "/brand/film-slate.png",
    videoId: "6b3vnAqAn4Q",
    videoUrl: "https://youtu.be/6b3vnAqAn4Q?si=pFWSS6I2wJs3dhvm",
    link:"https://www.vitalstrategies.org/resources/kenya-road-safety-slow-down-speeding-ruins-lives-marys-story/"
  },
  {
    id: "04",
    category: "Audio visual Production",
    title: "Tobacco slave documentary",
    description: "Tobacco Slave,” a new film by award-winning director Roy Maconachie, the Tobacco Control Research Group at the University of Bath and tobacco industry watchdog STOP, exposes tobacco giant Imperial Brands and other companies through first-hand accounts from farmers in Malawi",
    client: "University of Bath",
    year: "2023",
    featured: true,
     videoId: "BuqA2xAusso",
    videoUrl: "https://youtu.be/BuqA2xAusso",
    link:"https://www.youtube.com/watch?v=BuqA2xAusso"
  },
];

function WorkCard({
  work,
  index,
  featured = false,
}: {
  work: (typeof works)[0];
  index: number;
  featured?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      className={`group flex flex-col h-full border border-foreground/20 overflow-hidden cursor-pointer transition-all duration-700 hover:border-foreground ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media */}
      <div className="relative overflow-hidden bg-foreground/5 h-64 lg:h-72">
        {"videoId" in work && work.videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${work.videoId}`}
            title={work.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Overlay */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, var(--foreground) 0%, transparent 60%)",
            opacity: "videoId" in work && work.videoId ? 0 : isHovered ? 0.6 : 0.3,
          }}
        />
        {/* Category tag */}
        <span
          className="absolute top-4 left-4 text-xs font-mono px-3 py-1"
          style={{ backgroundColor: "var(--gold)", color: "var(--foreground)" }}
        >
          {work.category}
        </span>
        {/* Arrow icon on hover */}
        <div
          className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-background/40 text-background transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-8 gap-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">{work.client}</span>
          <span className="font-mono text-xs text-muted-foreground">{work.year}</span>
        </div>

        <h3 className="font-display text-xl lg:text-2xl tracking-tight group-hover:translate-x-1 transition-transform duration-500 leading-snug">
          {work.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {work.description}
        </p>

        <a href={work.link} target="blank"
          className="mt-2 flex items-center gap-2 text-sm font-mono text-foreground/50 group-hover:text-foreground transition-colors duration-300"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px" style={{ backgroundColor: "var(--gold)" }} />
              Our Work
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              Strategic Communication
              <br />
              <span className="text-muted-foreground">for Impact.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4 max-w-xl">
              We help organizations tell stories that influence policy, inspire communities, and strengthen development outcomes.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-mono border border-foreground px-6 py-3 self-start lg:self-end hover:bg-foreground hover:text-background transition-all duration-300 group/all"
          >
            View all work
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/all:translate-x-1" />
          </button>
        </div>

        {/* Asymmetric grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-foreground/10">
          {/* Row 1: featured (2 cols) + small (1 col) */}
          <div className="lg:col-span-2 bg-background flex">
            <WorkCard work={works[0]} index={0} featured />
          </div>
          <div className="bg-background flex">
            <WorkCard work={works[1]} index={1} />
          </div>

          {/* Row 2: small (1 col) + featured (2 cols) */}
          <div className="bg-background flex">
            <WorkCard work={works[2]} index={2} />
          </div>
          <div className="lg:col-span-2 bg-background flex">
            <WorkCard work={works[3]} index={3} featured />
          </div>
        </div>

      </div>
    </section>
  );
}
