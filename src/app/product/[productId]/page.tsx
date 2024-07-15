import ProductDisplay from "@/components/experiments/product-details/product-display";
import { products } from "@/lib/data";

type Props = {
  params: {
    productId: string;
  };
};

export default function Photo({ params: { productId } }: Props) {
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-2 grid place-content-center">
      <ProductDisplay product={product} />
    </div>
  );
}
