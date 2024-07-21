import { PRODUCTS } from "@/lib/constants";
import { getProduct } from "@/lib/data";
import ProductDisplay from "@/components/experiments/product-details/product-display";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
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
  // console.log(product)

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-2 grid place-content-center">
      <ProductDisplay product={product} />
    </div>
  );
}
