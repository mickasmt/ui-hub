import { AnimatedButton } from "@/components/experiments/animated-button";
import { CalendarExample } from "@/components/experiments/calendar-example";
import { ProductDetails } from "@/components/experiments/product-details";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <ProductDetails />
      <AnimatedButton />
      <CalendarExample />
    </main>
  );
}
