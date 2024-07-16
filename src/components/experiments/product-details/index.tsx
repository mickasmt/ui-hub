import { HeaderSection } from "@/components/header-section";
import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProductDetails() {
  return (
    <div className="flex flex-col gap-y-7">
      <HeaderSection
        title="Carousel & Modal - Drawer"
        text="Resize your screen for this the drawer on mobile."
      />
      <CardList />
    </div>
  );
}

function CardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-6 sm:gap-5">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="flex flex-col w-full"
        >
          <div className="w-full h-[300px] rounded-xl overflow-hidden bg-muted-foreground/15">
            <Image
              width={300}
              height={500}
              className="w-full h-full object-cover object-center"
              src={product.thumbnail}
              alt={product.title}
              // style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="flex w-full items-center justify-between gap-4 text-[15px] font-medium mt-1.5 px-0.5    ">
            <p className="text-balance truncate">{product.title}</p>
            <p className="text-muted-foreground">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
