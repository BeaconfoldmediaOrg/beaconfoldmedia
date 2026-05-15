"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "Strategic Communications", href: "#features" },
    { name: "Advocacy & Policy", href: "#features" },
    { name: "Digital Campaigns", href: "#features" },
    { name: "Powered Voice", href: "#developers" },
    { name: "Events", href: "#features" },
    { name: "M&E", href: "#features" },
  ],
  Work: [
    { name: "Campaigns", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Impact Reports", href: "#" },
    { name: "Powered Voice Episodes", href: "#developers" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Team", href: "#" },
    { name: "Partners", href: "#integrations" },
    { name: "Careers", href: "#", badge: "Hiring" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Ethics Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/surety-pr-media-ltd" },
  { name: "X", href: "https://x.com/PrSurety" },
  { name: "Instagram", href: "https://www.instagram.com/suretyprmedia/" },
  { name: "YouTube", href: "https://x.com/PrSurety" },
  { name: "Facebook", href: "https://www.facebook.com/Suretyprmedia" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-1 mb-6">
                <img
              src="/logo-2.png"
              alt="BeaconFold Media"
              className="transition-all duration-500 h-28 w-auto"
            />
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                A Pan-African Public relations, strategic communications and advocacy agency
                focused on evidence-based storytelling, policy influence, and development impact.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: "var(--gold)", color: "var(--foreground)" }}
                          >
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 BeaconFold Media. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 font-mono text-xs">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--teal)" }} />
              Evidence. Story. Action.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
