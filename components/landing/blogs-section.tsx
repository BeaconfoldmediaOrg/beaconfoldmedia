"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: "01",
    category: "Policy Communications",
    title: "How Evidence-Based Narratives Are Reshaping African Health Policy",
    excerpt:
      "When data meets compelling storytelling, policy shifts follow. We explore how structured evidence packages are opening doors in East African ministries.",
    date: "Apr 2025",
    readTime: "6 min read",
    image: "/works/health.jpg",
  },
  {
    id: "02",
    category: "Digital Campaigns",
    title: "Mobilizing the Youth Vote: Lessons from 12 Countries",
    excerpt:
      "Our Pan-African Youth Advocacy Campaign reached 2.4M people. Here's what we learned about digital engagement in low-bandwidth contexts.",
    date: "Mar 2025",
    readTime: "8 min read",
    image: "/works/strike.jpg",
  },
  {
    id: "03",
    category: "Advocacy Strategy",
    title: "Building Coalitions That Last: A Guide for CSO Networks",
    excerpt:
      "Coalition fatigue is real. We break down the structural and relational ingredients that make advocacy alliances durable across the continent.",
    date: "Feb 2025",
    readTime: "5 min read",
    image: "/works/seminar.jpg",
  },
  {
    id: "04",
    category: "Digital Strategy",
    title: "From Zero to 300%: How 24 CSOs Transformed Their Digital Presence",
    excerpt:
      "Capacity building isn't just training — it's infrastructure. Our digital transformation work with a West Africa CSO coalition tripled their online reach in under a year.",
    date: "Jan 2025",
    readTime: "7 min read",
    image: "/works/digital.jpg",
  },
];

function PostCard({ post, index }: { post: (typeof posts)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col border border-foreground/20 overflow-hidden cursor-pointer transition-all duration-700 hover:border-foreground ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className="absolute top-3 left-3 text-xs font-mono px-3 py-1"
          style={{ backgroundColor: "var(--gold)", color: "var(--foreground)" }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
        </div>

        <h3 className="font-display text-xl lg:text-2xl tracking-tight leading-snug group-hover:translate-x-1 transition-transform duration-500">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>

        <div className="mt-2 flex items-center gap-2 text-sm font-mono text-foreground/50 group-hover:text-foreground transition-colors duration-300">
          Read article
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}

export function BlogsSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
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
              Insights & Perspectives
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight">
              Ideas that shape
              <br />
              <span className="text-muted-foreground">the conversation.</span>
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm font-mono border border-foreground px-6 py-3 self-start lg:self-end hover:bg-foreground hover:text-background transition-all duration-300 group/all"
          >
            View all articles
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/all:translate-x-1" />
          </button>
        </div>

        {/* 4-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
