// import type { Icon } from "lucide-react"
// import { Icons } from "@/components/icons"

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type ImageData = {
  base64: string;
  img: {
    src: string;
    height: number;
    width: number;
  };
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductImagesData = Product & { images: ImageData[] };
