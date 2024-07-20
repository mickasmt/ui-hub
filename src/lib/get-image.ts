import fs from "fs/promises";
import path from "path";
import { getPlaiceholder } from "plaiceholder";

export const getImage = async (src: string) => {
  const buffer = await fs.readFile(path.join("./public", src));

  const {
    base64,
    // ...plaiceholder,
    metadata: { height, width },
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    base64,
    // ...plaiceholder,
    img: { src, height, width },
  };
};
