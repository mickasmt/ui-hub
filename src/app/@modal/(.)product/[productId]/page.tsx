import { ProductModal } from "@/components/experiments/product-details/product-modal";
import { products } from "@/lib/data";

type Props = {
  params: {
    productId: string;
  };
};

export default async function Photo({ params: { productId } }: Props) {
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductModal product={product} />;
}
