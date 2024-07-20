import Image from "next/image";
import Link from "next/link";

import { getProducts } from "@/lib/data";

export async function CardList() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-5">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="flex w-full flex-col last:hidden sm:last:flex"
        >
          <div className="h-[300px] w-full overflow-hidden rounded-xl">
            <Image
              {...product.thumbnail.img}
              alt={product.title}
              placeholder="blur"
              blurDataURL={product.thumbnail.base64}
              priority
              className="size-full object-cover object-center"
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
