import { AnimatedButton } from "@/components/experiments/animated-button";
import { CalendarDrawerSection } from "@/components/experiments/calendar-drawer/index";
import { CalendarRowsExample } from "@/components/experiments/calendar-rows";
import { ProductDetails } from "@/components/experiments/product-details";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <ProductDetails />
      <AnimatedButton />
      <CalendarRowsExample />
      <CalendarDrawerSection />
    </main>
  );
}
