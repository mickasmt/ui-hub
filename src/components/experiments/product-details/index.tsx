import { HeaderSection } from "@/components/shared/header-section";
import { CardList } from "./card-list";

export function ProductDetails() {
  return (
    <div className="flex flex-col gap-y-6">
      <HeaderSection
        title="Carousel inside Modal & Drawer"
        text="Resize your screen for this the drawer on mobile."
      />
      <CardList />
    </div>
  );
}
