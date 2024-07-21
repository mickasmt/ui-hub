import { Product } from "@/types";

import { PRODUCTS } from "@/lib/constants";
import { getBlurDataURL } from "@/lib/utils";

export async function getProduct(id: string): Promise<Product | undefined> {
  const product = PRODUCTS.find((product) => product.id === id);

  if (!product) return;

  const imagesBase64 = await Promise.all(
    product.images.map(async (image) => {
      const blurDataURL = await getBlurDataURL(image);
      return blurDataURL;
    }),
  );

  return {
    ...product,
    imagesBase64: imagesBase64,
  };
}
