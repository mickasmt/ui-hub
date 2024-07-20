import path from "path";
import fs from "fs/promises";
import { siteConfig } from "@/config/site";
import { getPlaiceholder } from "plaiceholder";

export async function getImages(imagePaths: string[]) {
  const base64Promises = imagePaths.map((imagePath) => getBase64(imagePath));
  const imagesBase64 = await Promise.all(base64Promises);
  return imagesBase64;
}

export async function getBase64(imageUrl: string) {
  let url = imageUrl;

  if (imageUrl.startsWith("/_static/")) {
    url = new URL(imageUrl, siteConfig.url).href;
  }

  const buffer = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    base64,
    metadata: { height, width },
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    base64,
    img: { src: url, height, width },
  };
}

export const getImage = async (src: string) => {
  const buffer = await fs.readFile(path.join("./public", src));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};
