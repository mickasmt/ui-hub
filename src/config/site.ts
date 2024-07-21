import { SiteConfig } from "@/types";

// const site_url = process.env.NEXT_PUBLIC_APP_URL
//   ? process.env.NEXT_PUBLIC_APP_URL
//   : "http://localhost:3000";
const site_url = "https://ui-hub-nine.vercel.app";

export const siteConfig: SiteConfig = {
  name: "Ui Hub",
  description: "A little space for mickasmt's ui experiments!",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt",
  },
  mailSupport: "support@mickasmt.com",
};
