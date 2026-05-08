"use client";

import { ArrowRight, Check } from "lucide-react";

const engagements = [
  {
    name: "Advisory",
    description: "Strategic consulting & research engagements",
    tier: "From $2,500",
    features: [
      "Strategy workshops & briefings",
      "Policy landscape research",
      "Communications audit",
      "Stakeholder mapping",
      "Priority recommendations report",
    ],
    cta: "Request Advisory",
    popular: false,
  },
  {
    name: "Campaign",
    description: "Full project delivery with end-to-end support",
    tier: "From $15,000",
    features: [
      "Campaign strategy & planning",
      "Content production",
      "Digital strategy & execution",
      "Coalition coordination",
      "Event strategy & management",
      "M&E & impact reporting",
    ],
    cta: "Discuss a Campaign",
    popular: true,
  },
  {
    name: "Partnership",
    description: "Long-term strategic alliance",
    tier: "Custom",
    features: [
      "Everything in Campaign",
      "Dedicated account team",
      "Ongoing advocacy support",
      "Powered Voice content",
      "Thought leadership program",
      "Priority access & response",
      "Quarterly strategic reviews",
      "Annual impact assessment",
    ],
    cta: "Explore Partnership",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Engagement Models
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            The right model
            <br />
            <span className="text-stroke">for your mission</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            From one-time advisory to long-term strategic partnership — structured to match the scope of your ambition.
          </p>
        </div>

        {/* Engagement Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {engagements.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2" : ""
              }`}
              style={plan.popular ? { borderColor: "var(--gold)" } : {}}
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 left-8 px-3 py-1 text-xs font-mono uppercase tracking-widest"
                  style={{ backgroundColor: "var(--gold)", color: "var(--foreground)" }}
                >
                  Most Requested
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Tier */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <span className="font-display text-4xl lg:text-5xl text-foreground">{plan.tier}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--teal)" }}
                    />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group border border-foreground/20 hover:border-foreground hover:bg-foreground/5 ${
                  plan.popular ? "border-0 hover:border-0 hover:bg-transparent" : ""
                }`}
                style={plan.popular ? { backgroundColor: "var(--gold)", color: "var(--foreground)" } : {}}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          All engagements include regular check-ins, progress reporting, and dedicated support.{" "}
          <a href="#" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Get in touch to discuss your needs
          </a>
        </p>
      </div>
    </section>
  );
}
