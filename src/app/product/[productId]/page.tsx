import ProductDisplay from "@/components/experiments/product-details/product-display";
import { getProduct, products } from "@/lib/data";

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductDetailsPage({
  params: { productId },
}: Props) {
  const product = await getProduct(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-2 grid place-content-center">
      <ProductDisplay product={product} />
    </div>
  );
}
