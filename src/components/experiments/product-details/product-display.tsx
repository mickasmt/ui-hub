import Image from "next/image";
import { products } from "@/lib/data";

type Props = {
  product: (typeof products)[0];
};

export default function ProductDisplay({ product }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-7 sm:gap-6">
      <div className="w-full sm:col-span-3 rounded-xl overflow-hidden bg-muted-foreground/15">
        <Image
          width="260"
          height="300"
          loading="eager"
          className="w-full h-full object-cover sm:object-center"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="flex flex-col sm:col-span-4 w-full items-start gap-5 font-medium text-balance ">
        <div className="flex items-center justify-between w-full">
          <h1 className="truncate text-2xl">{product.title}</h1>
          <p className="text-xl text-muted-foreground">${product.price}</p>
        </div>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
    </div>
  );
}
