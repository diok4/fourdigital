import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/*?utm_", "/*?fbclid="],
      },
    ],
    host: siteConfig.url,
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
};

export default robots;
