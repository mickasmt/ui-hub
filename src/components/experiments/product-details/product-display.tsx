import Image from "next/image";
import { products } from "@/lib/data";
import { ProductCarousel } from "./product-carousel";

type Props = {
  product: (typeof products)[0];
};

export default function ProductDisplay({ product }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-8 sm:gap-6">
      <div className="w-full sm:col-span-4">
        <ProductCarousel images={product.images} />
      </div>

      <div className="flex flex-col sm:col-span-4 w-full items-start gap-5 font-medium text-pretty ">
        <div className="flex flex-col w-full gap-1">
          <h1 className="truncate text-2xl">{product.title}</h1>
          <p className="text-xl text-muted-foreground">${product.price}</p>
        </div>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
    </div>
  );
}
