import Link from "next/link";

import { products } from "@/lib/data";
import { getBlurDataURL, placeholderBlurhash } from "@/lib/utils";
import BlurImage from "@/components/blur-image";

export async function CardList() {
  const thumbnailsBlurhash = await Promise.all(
    products.map(async (product) => {
      const imgUrl = `https://ui-hub-nine.vercel.app${product.thumbnail}`;
      const blurDataURL = await getBlurDataURL(imgUrl);
      return `data:image/png;base64,${blurDataURL}`;
    }),
  );
  // console.log(thumbnailsBlurhash);

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-5">
      {products.map((product, idx) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="group flex w-full flex-col last:hidden sm:last:flex"
        >
          <div className="h-[300px] w-full overflow-hidden rounded-xl">
            <BlurImage
              alt={product.title}
              blurDataURL={thumbnailsBlurhash[idx] ?? placeholderBlurhash}
              className="size-full object-cover object-center group-hover:scale-105 group-hover:duration-300"
              width={300}
              height={300}
              placeholder="blur"
              src={product.thumbnail}
              sizes="(max-width: 640px) 300px, 215px"
            />
          </div>
          <div className="mt-1.5 flex w-full items-center justify-between gap-4 px-0.5 text-[15px] font-medium">
            <p className="line-clamp-1 text-balance">{product.title}</p>
            <p className="text-muted-foreground">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
