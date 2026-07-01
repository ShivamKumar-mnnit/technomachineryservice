export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  name: string;
  model: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: ProductSpec[];
  applications: string[];
  features: string[];
  weight?: string;
  power?: string;
  capacity?: string;
  engine?: string;
  tags: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  videoId?: string;
}

export interface RequestItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  company: string;
  city: string;
  email?: string;
  message?: string;
}

export type Category =
  | "Internal Vibrators"
  | "External Vibrators"
  | "Concrete Mixers"
  | "Plate Compactors"
  | "Tamping Rammers"
  | "Vibratory Rollers"
  | "Concrete Cutters"
  | "Power Trowels"
  | "Rebar Cutting Machines"
  | "Generators"
  | "Jack Hammers"
  | "Backhoe Loaders"
  | "Excavators";
