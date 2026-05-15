"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Services: [
    { name: "Strategic Communications & Counsel", href: "/services/strategic-communications" },
    { name: "Digital Strategy & Campaigns", href: "/services/digital-strategy" },
    { name: "Audiovisual Production", href: "/services/audiovisual-production" },
    { name: "Event Communication", href: "/services/event-communication" },
    { name: "Policy Advocacy & Communications", href: "/services/advocacy-policy" },
    { name: "Research & Impact Storytelling", href: "/services/research-impact-storytelling" },
  ],
  Company: [
    { name: "About", href: "/#about" },
    // { name: "Team", href: "#" },
    { name: "Partners", href: "/#partners" },
    { name: "Careers", href: "/contact", badge: "Hiring" },
    { name: "Contact", href: "/contact" },
  ]
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/surety-pr-media-ltd" },
  { name: "X", href: "https://x.com/PrSurety" },
  { name: "Instagram", href: "https://www.instagram.com/suretyprmedia/" },
  { name: "YouTube", href: "https://www.youtube.com/@SuretyPRMedia" },
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
        <div className="pt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 ">
            {/* Brand Column */}
            <div className="">
              <a href="/" className="inline-flex items-center gap-1">
                <img
              src="/logo-2.png"
              alt="BeaconFold Media"
              className="transition-all duration-500 h-36 w-auto"
            />
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                A Pan-African Public relations and  strategic communications agency
                focused on evidence-based storytelling, policy influence, and development impact.
              </p>

           
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
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
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
           {/* Social Links */}
              <div className="flex justify-center py-4 flex-wrap gap-6">
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

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BeaconFold Media. All rights reserved.
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
