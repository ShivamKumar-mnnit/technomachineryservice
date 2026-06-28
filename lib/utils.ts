import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatWhatsAppMessage(
  items: Array<{ name: string; model: string; quantity: number }>,
  customer: { name: string; phone: string; company: string; city: string; message?: string }
): string {
  const productLines = items
    .map(
      (item, i) =>
        `${i + 1}. *${item.name}* (${item.model})\n   Quantity: ${item.quantity}`
    )
    .join("\n\n");

  return `Hello Techno Machinery,

I would like a quotation for the following products:

${productLines}

*Customer Details:*
Name: ${customer.name}
Phone: ${customer.phone}
Company: ${customer.company}
City: ${customer.city}${customer.message ? `\nNotes: ${customer.message}` : ""}

Please contact me with pricing and availability.`;
}
