import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { products } from "@/lib/data";
import { ProductCarousel } from "./product-carousel";
import { SmoothButtonCart } from "./smooth-button-cart";

type Props = {
  product: (typeof products)[0];
};

export default function ProductDisplay({ product }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-8 sm:gap-6">
      <div className="w-full sm:col-span-4 rounded-xl overflow-hidden">
        <ProductCarousel images={product.images} />
      </div>

      <div className="flex flex-col sm:col-span-4 w-full items-start gap-5 font-medium text-pretty ">
        <div className="flex flex-col w-full gap-1 text-balance">
          <h1 className="text-2xl">{product.title}</h1>
          <p className="mt-1 text-xl text-muted-foreground">${product.price}</p>
        </div>
        <p className="text-[17px] text-muted-foreground">
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
        <h2 className="text-xl font-medium">Colors</h2>
        <ToggleGroup
          className="mt-2.5 flex justify-start flex-wrap"
          type="single"
          defaultValue="black"
          variant="outline"
        >
          {colors.map((color) => (
            <ToggleGroupItem
              key={color}
              className="rounded-xl px-5"
              value={color}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="mt-4 sm:mt-0">
        <h2 className="text-xl font-medium">Size</h2>
        <ToggleGroup
          className="mt-2.5 flex justify-start flex-wrap"
          type="single"
          defaultValue="m"
          variant="outline"
        >
          {sizes.map((size) => (
            <ToggleGroupItem
              key={size}
              className="rounded-xl px-5"
              value={size}
            >
              {size.toUpperCase()}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </>
  );
}
