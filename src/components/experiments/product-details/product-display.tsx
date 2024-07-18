import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ProductCarousel } from "./product-carousel";
import { SmoothButtonCart } from "./smooth-button-cart";
import { ProductImagesData } from "@/types";

interface ProductDisplayProps {
  product: ProductImagesData;
}

export default function ProductDisplay({ product }: ProductDisplayProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-8 sm:gap-6">
      <div className="w-full sm:col-span-4 rounded-xl overflow-hidden">
        <ProductCarousel images={product.images} />
      </div>

      <div className="flex flex-col sm:col-span-4 w-full items-start gap-4 font-medium text-pretty ">
        <div className="flex flex-col w-full gap-1.5 text-balance">
          <h1 className="text-2xl">{product.title}</h1>
          <p className=" text-xl text-muted-foreground">${product.price}</p>
          <div className=" flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={`star-${index}`}
                className="text-yellow-400 h-5 w-5 shrink-0"
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
            <span className="text-[15px] leading-none text-muted-foreground font-medium ml-2">
              35 reviews
            </span>
          </div>
        </div>
        <p className="mt-1 text-[17px] text-muted-foreground">
          {product.description}
        </p>
        <ProductInfos />
        <div className="mt-4 sm:mt-auto w-full">
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
          className="mt-2 flex justify-start flex-wrap"
          type="single"
          defaultValue="black"
          variant="outline"
        >
          {colors.map((color) => (
            <ToggleGroupItem
              key={color}
              className="rounded-xl capitalize px-5"
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
          className="mt-2 flex justify-start flex-wrap"
          type="single"
          defaultValue="m"
          variant="outline"
        >
          {sizes.map((size) => (
            <ToggleGroupItem
              key={size}
              className="rounded-xl uppercase px-5"
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
