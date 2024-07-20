import { getProduct } from "@/lib/data";
import { ProductModal } from "@/components/experiments/product-details/product-modal";

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductDetailsModal({
  params: { productId },
}: Props) {
  const product = await getProduct(Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductModal product={product} />;
}
