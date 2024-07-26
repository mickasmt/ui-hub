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

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  imagesBase64?: string[];
  rating: {
    rate: number;
    count: number;
  };
};

export type Event = {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location?: string;
  bgColor: string;
};
