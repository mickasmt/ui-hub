"use server";

import path from "node:path";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getImage = async (
  src: string,
  type: "local" | "remote" = "local"
) => {
  let buffer;
  if (type === "local") {
    buffer = await fs.readFile(path.join("./public", src));
  } else {
    buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
  }

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};
