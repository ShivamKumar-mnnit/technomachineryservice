import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import ProductDetailClient from "@/components/products/ProductDetailClient";

const SITE_URL = "https://www.technomachineryservice.com";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const firstSpec = product.specifications?.[0];
  const specHint = firstSpec ? ` ${firstSpec.label}: ${firstSpec.value}.` : "";
  const title = `${product.name} – ${product.model} | Buy in Kolkata | Techno Machinery Service`;
  const description = `Buy ${product.name} (${product.model}) from Techno Machinery Service, Kolkata.${specHint} ${product.description.slice(0, 100)}. Pan India delivery. Call: 7323936166`;
  const imageUrl = product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`;

  return {
    title,
    description,
    alternates: { canonical: `/products/${slug}` },
    keywords: [
      product.name,
      product.model,
      product.category,
      ...product.tags,
      "buy " + product.name.toLowerCase(),
      product.name.toLowerCase() + " price",
      product.name.toLowerCase() + " Kolkata",
      product.name.toLowerCase() + " India",
      "Techno Machinery Service",
      "construction equipment Kolkata",
    ],
    openGraph: {
      title,
      description,
      url: `/products/${slug}`,
      images: [{ url: imageUrl, width: 800, height: 600, alt: product.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const imageUrl = product.image.startsWith("http") ? product.image : `${SITE_URL}${product.image}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${SITE_URL}/products/${slug}#product`,
        name: product.name,
        description: product.description,
        model: product.model,
        image: [imageUrl, ...product.gallery.map((g) => (g.startsWith("http") ? g : `${SITE_URL}${g}`))],
        sku: product.model,
        brand: {
          "@type": "Brand",
          name: "Techno Machinery Service",
        },
        category: product.category,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Techno Machinery Service",
            url: SITE_URL,
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
        },
        additionalProperty: product.specifications.map((spec) => ({
          "@type": "PropertyValue",
          name: spec.label,
          value: spec.value,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: `${SITE_URL}/products`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.category,
            item: `${SITE_URL}/products?category=${encodeURIComponent(product.category)}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: product.name,
            item: `${SITE_URL}/products/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
