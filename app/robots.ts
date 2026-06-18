import type { MetadataRoute } from "next";

const baseUrl = "https://www.beaconfoldmedia.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/page-2", "/page-3"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
