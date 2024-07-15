import { ProductDetails } from "@/components/experiments/product-details";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <ProductDetails />
    </main>
  );
}
