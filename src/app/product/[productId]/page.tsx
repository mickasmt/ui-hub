import ProductDisplay from "@/components/experiments/product-details/product-display";
import { getProduct } from "@/lib/data";

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductDetailsPage({
  params: { productId },
}: Props) {
  const product = await getProduct(Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-2 grid place-content-center">
      <ProductDisplay product={product} />
    </div>
  );
}
