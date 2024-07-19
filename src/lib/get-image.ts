import { siteConfig } from "@/config/site";
import { getPlaiceholder } from "plaiceholder";

export async function getImages(imagePaths: string[]) {
  return await Promise.all(imagePaths.map((imagePath) => getBase64(imagePath)));
}

export async function getBase64(imageUrl: string) {
  // try {
  let url = imageUrl;

  if (imageUrl.startsWith("/_static/")) {
    url = new URL(imageUrl, siteConfig.url).href;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
  }

  const buffer = await res.arrayBuffer();
  // const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(Buffer.from(buffer));

  return {
    ...plaiceholder,
    img: { src: url, height, width },
  };

  // return base64;
  // } catch (e) {
  //   if (e instanceof Error) console.log(e.stack);
  // }
}
