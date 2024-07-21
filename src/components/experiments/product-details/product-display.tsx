import { Product } from "@/types";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { ProductCarousel } from "./product-carousel";
import { SmoothButtonCart } from "./smooth-button-cart";

export default function ProductDisplay({ product }: { product: Product }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-8 sm:gap-6">
      <div className="w-full overflow-hidden rounded-xl sm:col-span-4">
        <ProductCarousel
          images={product.images}
          imagesBase64={product.imagesBase64}
        />
      </div>

      <div className="flex w-full flex-col items-start gap-4 text-pretty font-medium sm:col-span-4">
        <div className="flex w-full flex-col gap-1.5 text-balance">
          <h1 className="text-2xl">{product.title}</h1>
          <p className="text-xl text-muted-foreground">${product.price}</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={`star-${index}`}
                className="size-5 shrink-0 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ))}
            <span className="ml-2 text-[15px] font-medium leading-none text-muted-foreground">
              35 reviews
            </span>
          </div>
        </div>
        <p className="mt-1 text-[17px] text-muted-foreground">
          {product.description}
        </p>
        <ProductInfos />
        <div className="mt-4 w-full sm:mt-auto">
          <SmoothButtonCart />
        </div>
      </div>
    </div>
  );
}

export function ProductInfos() {
  const colors = ["black", "white", "grey", "blue", "red", "pink"];
  const sizes = ["s", "m", "l", "xl", "xxl"];

  return (
    <>
      <div className="mt-4 sm:mt-0">
        <h2 className="text-lg font-medium">Colors</h2>
        <ToggleGroup
          className="mt-2 flex flex-wrap justify-start"
          type="single"
          defaultValue="black"
          variant="outline"
        >
          {colors.map((color) => (
            <ToggleGroupItem
              key={color}
              className="rounded-xl px-5 capitalize"
              value={color}
            >
              {color}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="mt-4 sm:mt-0">
        <h2 className="text-lg font-medium">Size</h2>
        <ToggleGroup
          className="mt-2 flex flex-wrap justify-start"
          type="single"
          defaultValue="m"
          variant="outline"
        >
          {sizes.map((size) => (
            <ToggleGroupItem
              key={size}
              className="rounded-xl px-5 uppercase"
              value={size}
            >
              {size}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </>
  );
}
