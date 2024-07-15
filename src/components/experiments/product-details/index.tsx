import { HeaderSection } from "@/components/header-section";
import { products } from "@/lib/data";
import Image from "next/image";
import React from "react";

export function ProductDetails() {
  return (
    <>
      <HeaderSection
        title="Carousel & Modal - Drawer"
        text="Resize your screen for this the drawer on mobile."
      />
      <CardList />
    </>
  );
}

function CardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col w-full">
          <div className="w-full h-[300px] rounded-xl overflow-hidden bg-muted-foreground/15">
            <Image
              width="260"
              height="300"
              loading="eager"
              className="w-full h-full object-cover object-center"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <div className="flex w-full items-center justify-between gap-4 text-[15px] font-medium mt-1 px-0.5    ">
            <p className="text-balance truncate">{product.title}</p>
            <p className="text-muted-foreground">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
