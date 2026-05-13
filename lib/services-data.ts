export type Service = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  offerings: { title: string; description: string }[];
  approach: { step: string; title: string; description: string }[];
  whoWeWorkWith: string[];
  relatedSlugs: string[];
};

export const servicesData: Service[] = [
  {
    slug: "strategic-communications",
    number: "01",
    title: "Strategic Communications & Counsel",
    tagline: "Say the right thing, to the right people, at the right time.",
    description:
      "Evidence-based communications strategy that guides your voice from insight to impact. We help organisations navigate complex stakeholder landscapes, craft messages that resonate, and build the communications infrastructure needed for lasting influence.",
    image: "/works/1.jpg",
    offerings: [
      {
        title: "Communications Strategy & Planning",
        description:
          "Comprehensive strategies that align your communications objectives with organisational goals, mapping audiences, channels, and timelines for maximum impact.",
      },
      {
        title: "Stakeholder Mapping & Engagement",
        description:
          "Rigorous analysis of your stakeholder landscape — identifying allies, influencers, and decision-makers — and building engagement plans that build trust and drive action.",
      },
      {
        title: "Message Development & Positioning",
        description:
          "Clear, compelling, culturally resonant messaging frameworks that speak to every audience segment with precision and authenticity.",
      },
      {
        title: "Communications Audits & Reviews",
        description:
          "Honest assessment of your current communications — identifying gaps, inconsistencies, and opportunities to strengthen your voice and presence.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Discovery & Landscape Analysis",
        description:
          "We begin with a thorough assessment of your organisation, stakeholders, and communications environment — understanding what exists, what is missing, and what the context demands.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "A tailored communications roadmap aligned to your goals, your audiences, and the African policy and social context you are operating in.",
      },
      {
        step: "03",
        title: "Message Architecture",
        description:
          "We build layered, evidence-grounded messaging frameworks — core messages, audience variations, and proof points — that hold up in every room that matters.",
      },
      {
        step: "04",
        title: "Rollout & Ongoing Counsel",
        description:
          "Strategic guidance throughout implementation, including spokesperson preparation, channel activation, and real-time advisory support.",
      },
    ],
    whoWeWorkWith: [
      "International NGOs & Civil Society Organisations",
      "Government Ministries & Public Institutions",
      "Development Finance Institutions",
      "Foundations & Philanthropic Organisations",
      "Pan-African Networks & Coalitions",
    ],
    relatedSlugs: ["advocacy-policy", "digital-strategy", "research-impact-storytelling"],
  },
  {
    slug: "advocacy-policy",
    number: "02",
    title: "Advocacy & Policy Communications",
    tagline: "Building the narrative infrastructure that shifts policy.",
    description:
      "From policy briefs to parliamentary submissions, we build the communications and advocacy infrastructure that influences decisions where they are made. Pan-African expertise, globally credible, culturally resonant — designed to move legislation, shift budgets, and transform governance.",
    image: "/brand/group-3.jpg",
    offerings: [
      {
        title: "Policy Briefs & Position Papers",
        description:
          "Rigorous, readable policy documents that translate complex evidence into actionable recommendations — written for the rooms where decisions are made.",
      },
      {
        title: "Parliamentary & Government Engagement",
        description:
          "Strategic communications support for engaging legislatures, ministries, and regulatory bodies across Africa with credibility and precision.",
      },
      {
        title: "Coalition Building & Stakeholder Alliances",
        description:
          "Designing and facilitating advocacy coalitions that aggregate voice, align messaging, and build the collective power needed to change policy.",
      },
      {
        title: "Advocacy Campaign Design",
        description:
          "End-to-end advocacy campaigns — from strategy and message development to stakeholder mobilisation and impact tracking.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Policy Landscape Analysis",
        description:
          "We map the policy environment — key actors, decision timelines, opposing forces, and windows of opportunity — to inform a strategy grounded in reality.",
      },
      {
        step: "02",
        title: "Advocacy Strategy",
        description:
          "A clear theory of change, target decision-makers, key asks, and a sequenced plan for moving from current state to desired policy outcome.",
      },
      {
        step: "03",
        title: "Coalition Architecture",
        description:
          "Identifying and convening allies, assigning roles, aligning messaging, and managing the relational dynamics that make coalitions work over time.",
      },
      {
        step: "04",
        title: "Campaign Execution & Monitoring",
        description:
          "Deploying the campaign with discipline, tracking milestones, adapting to the political environment, and documenting wins for accountability and learning.",
      },
    ],
    whoWeWorkWith: [
      "Health & Education Advocacy Networks",
      "Climate & Environmental Coalitions",
      "Women's Rights & Gender Justice Organisations",
      "Youth-Led Civic Movements",
      "Research & Think-Tank Institutions",
    ],
    relatedSlugs: ["strategic-communications", "research-impact-storytelling", "event-communication"],
  },
  {
    slug: "digital-strategy",
    number: "03",
    title: "Digital Strategy & Campaigns",
    tagline: "Multi-channel campaigns designed to mobilise, engage, and convert.",
    description:
      "Data-driven digital strategy meets compelling storytelling — designed to build movements, shift opinions, and drive measurable action across social media, web, and emerging digital platforms. We bring a distinctly African lens to digital organising and online advocacy.",
    image: "/works/3.jpg",
    offerings: [
      {
        title: "Digital Strategy & Audit",
        description:
          "Comprehensive digital strategy development — platform selection, audience targeting, content architecture, and KPI frameworks aligned to your organisational objectives.",
      },
      {
        title: "Social Media Management & Campaigns",
        description:
          "Full-service social media management and campaign execution across LinkedIn, X, Instagram, Facebook, and YouTube — from content creation to community engagement.",
      },
      {
        title: "Digital Campaign Design & Execution",
        description:
          "Multi-platform campaigns designed to mobilise audiences, generate petitions, amplify events, and sustain advocacy narratives over time.",
      },
      {
        title: "Analytics, Reporting & Optimisation",
        description:
          "Real-time performance monitoring, campaign reporting, and data-driven optimisation to ensure every campaign learns and improves.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audience Research & Platform Mapping",
        description:
          "We study where your audiences live digitally, how they consume content, and what motivates them to act — before we write a single post.",
      },
      {
        step: "02",
        title: "Strategy & Content Architecture",
        description:
          "A content plan built around your campaign narrative — pillar content, campaign phases, channel-specific adaptations, and a publishing cadence.",
      },
      {
        step: "03",
        title: "Content Production",
        description:
          "Copywriting, graphic design, short-form video, and multimedia content produced to platform standards and campaign voice.",
      },
      {
        step: "04",
        title: "Launch, Monitor & Optimise",
        description:
          "Campaign launch with full performance monitoring, community management, mid-campaign pivots based on data, and end-of-campaign impact reports.",
      },
    ],
    whoWeWorkWith: [
      "Civil Society & Advocacy Organisations",
      "International Development Programmes",
      "Government Agencies & Parastatals",
      "Media & Publishing Organisations",
      "Pan-African Youth Networks",
    ],
    relatedSlugs: ["strategic-communications", "audiovisual-production", "event-communication"],
  },
  {
    slug: "audiovisual-production",
    number: "04",
    title: "Audiovisual Production & Podcasting",
    tagline: "Cinematic storytelling that amplifies your mission.",
    description:
      "Powered Voice — BeaconFold Media's audiovisual production arm — brings African advocacy voices to global audiences through compelling documentary, podcast, and video content. We believe the most powerful evidence is a story told well.",
    image: "/works/2.jpg",
    offerings: [
      {
        title: "Documentary & Short Film Production",
        description:
          "Research-grounded documentaries and impact films that humanise data, contextualise policy, and move audiences from awareness to empathy to action.",
      },
      {
        title: "Podcast Development & Production (Powered Voice)",
        description:
          "End-to-end podcast production — concept development, guest curation, recording, editing, and distribution — for advocacy, development, and thought leadership voices.",
      },
      {
        title: "Social Media Video & Motion Content",
        description:
          "Short-form video content, reels, motion graphics, and explainer videos optimised for digital advocacy and social media campaigns.",
      },
      {
        title: "Event Coverage & Live Streaming",
        description:
          "Professional audiovisual coverage of conferences, forums, and convenings — capturing key moments and extending reach beyond the room.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Concept & Story Development",
        description:
          "We work with you to identify the story at the heart of your work — the human truth, the policy challenge, the community voice — and build a production concept around it.",
      },
      {
        step: "02",
        title: "Pre-Production Planning",
        description:
          "Script development, location scouting, talent coordination, equipment planning, and scheduling — the rigorous preparation that makes productions run smoothly.",
      },
      {
        step: "03",
        title: "Production",
        description:
          "Professional filming, recording, and direction with experienced crews who understand the African development and advocacy context.",
      },
      {
        step: "04",
        title: "Post-Production & Distribution",
        description:
          "Editing, colour grading, audio mastering, subtitling, and multi-platform distribution strategy to maximise reach and longevity.",
      },
    ],
    whoWeWorkWith: [
      "Development Organisations & Foundations",
      "Research & Academic Institutions",
      "Government Communications Teams",
      "Human Rights & Social Justice Organisations",
      "Pan-African Media Networks",
    ],
    relatedSlugs: ["digital-strategy", "research-impact-storytelling", "event-communication"],
  },
  {
    slug: "event-communication",
    number: "05",
    title: "Event Communication",
    tagline: "Strategic visibility and engagement for conferences, forums, and convenings.",
    description:
      "Conferences and convenings are high-stakes communications moments. We build the communications strategy, media presence, and digital amplification infrastructure that ensures your event lands with impact — before, during, and long after the delegates leave the room.",
    image: "/works/seminar.jpg",
    offerings: [
      {
        title: "Event Communications Strategy",
        description:
          "A comprehensive communications plan covering pre-event visibility, on-site media management, digital amplification, and post-event impact documentation.",
      },
      {
        title: "Media Relations & Press Management",
        description:
          "Media accreditation, press briefing materials, spokesperson preparation, and on-site media liaison to ensure your event earns the coverage it deserves.",
      },
      {
        title: "Digital Event Amplification",
        description:
          "Social media strategy, live coverage, real-time content creation, and hashtag management to extend your event's reach to audiences who are not in the room.",
      },
      {
        title: "Post-Event Impact Documentation",
        description:
          "Comprehensive post-event reports, highlight reels, proceedings documentation, and impact summaries that carry your event's outcomes forward.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Pre-Event Communications Plan",
        description:
          "Developing the full communications architecture — stakeholder invitations, media outreach, social media content calendar, and pre-event narrative building.",
      },
      {
        step: "02",
        title: "On-Site Management",
        description:
          "A dedicated communications team on the ground managing media, capturing content, briefing spokespeople, and keeping the narrative on track.",
      },
      {
        step: "03",
        title: "Real-Time Digital Coverage",
        description:
          "Live social media coverage, real-time graphics, quote cards, short clips, and audience engagement across all relevant platforms.",
      },
      {
        step: "04",
        title: "Post-Event Impact Report",
        description:
          "A thorough documentation of reach, media coverage, social analytics, key outcomes, and follow-through action items.",
      },
    ],
    whoWeWorkWith: [
      "International Conferences & Forums",
      "African Union & Regional Bodies",
      "Multilateral & Bilateral Development Organisations",
      "Academic Institutions & Think Tanks",
      "Civil Society Networks & Coalitions",
    ],
    relatedSlugs: ["strategic-communications", "digital-strategy", "audiovisual-production"],
  },
  {
    slug: "research-impact-storytelling",
    number: "06",
    title: "Research & Impact Storytelling",
    tagline: "Turning evidence, insights, and data into compelling narratives.",
    description:
      "Research and data rarely speak for themselves. We translate evidence, evaluation findings, and impact data into narratives that move stakeholders — from funders and policymakers to communities and media. We help your research earn the influence it deserves.",
    image: "/works/health.jpg",
    offerings: [
      {
        title: "Research Communication & Translation",
        description:
          "Transforming academic papers, evaluation reports, and datasets into accessible, persuasive communications products for non-specialist audiences.",
      },
      {
        title: "Impact Reports & Annual Reviews",
        description:
          "Narrative-led impact reports and organisational reviews that tell your story of change with evidence, humanity, and strategic intent.",
      },
      {
        title: "Data Visualisation & Infographics",
        description:
          "Visual communication of complex data — charts, infographics, interactive summaries — designed to make your evidence impossible to ignore.",
      },
      {
        title: "Learning Documentation & Case Studies",
        description:
          "Capturing programmatic learning, success stories, and failure lessons in formats that support accountability, adaptation, and advocacy.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Evidence Review & Narrative Mining",
        description:
          "We review your research, data, and evaluation findings to identify the core story — the insight that matters most to your target audience.",
      },
      {
        step: "02",
        title: "Audience-Centred Framing",
        description:
          "Translating your findings into language and frames that resonate with specific audiences — policymakers, donors, communities, or media.",
      },
      {
        step: "03",
        title: "Content & Visual Design",
        description:
          "Producing the communications product — report, brief, infographic, video summary — with rigorous attention to accuracy and compelling design.",
      },
      {
        step: "04",
        title: "Dissemination Strategy",
        description:
          "A targeted plan for getting your research into the right hands through the right channels — launches, media outreach, policy briefings, and digital distribution.",
      },
    ],
    whoWeWorkWith: [
      "Research & Evaluation Institutions",
      "International Development Programmes",
      "Health, Education & Climate Foundations",
      "Monitoring, Evaluation & Learning Teams",
      "Think Tanks & Policy Research Centres",
    ],
    relatedSlugs: ["advocacy-policy", "strategic-communications", "event-communication"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((s) => servicesData.find((sd) => sd.slug === s)).filter(Boolean) as Service[];
}
