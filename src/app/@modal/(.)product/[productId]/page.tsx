import ProductDisplay from "@/components/experiments/product-details/product-display";
import { ProductModal } from "@/components/experiments/product-details/product-modal";
import { Modal } from "@/components/ui/modal";
import { getProduct, products } from "@/lib/data";
import { getImages } from "@/lib/get-image";

type Props = {
  params: {
    productId: string;
  };
};

export default async function ProductDetailsModal({
  params: { productId },
}: Props) {
  const product = await getProduct(Number(productId));
  // const product = products.find((product) => product.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  // const images = await getImages(product.images);

  // return <>
  // <div>{JSON.stringify(product, null, 2)}</div>
  // {/* {images.length > 0 && <div>{JSON.stringify(images, null, 2)}</div>} */}
  // </>;
  // return (
  //   <Modal>
  //     <ProductDisplay product={product} />
  //   </Modal>
  // );
  return <ProductModal product={product} />;
}
