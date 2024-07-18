import { getProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export async function CardList() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-6 sm:gap-5">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="flex flex-col w-full last:hidden sm:last:flex"
        >
          <div className="w-full h-[300px] rounded-xl overflow-hidden">
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
          <div className="flex w-full items-center justify-between gap-4 text-[15px] font-medium mt-1.5 px-0.5">
            <p className="text-balance line-clamp-1">{product.title}</p>
            <p className="text-muted-foreground">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
