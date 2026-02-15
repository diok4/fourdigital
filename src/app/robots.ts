import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
};

export default robots;
