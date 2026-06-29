import { MetadataRoute } from "next";

export const dynamic = "force-static";
import { products } from "@/data/products";
import { SITE_URL } from "@/lib/contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,              priority: 1.0, changeFrequency: "weekly"  },
    { url: `${base}/products/`,     priority: 0.9, changeFrequency: "weekly"  },
    { url: `${base}/about/`,        priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/contact/`,      priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/industries/`,   priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/why-choose-us/`,priority: 0.6, changeFrequency: "monthly" },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}/`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...productPages];
}
