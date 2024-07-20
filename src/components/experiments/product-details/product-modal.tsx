"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ProductImagesData } from "@/types";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Drawer } from "vaul";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { ProductCarousel } from "./product-carousel";
import ProductDisplay, { ProductInfos } from "./product-display";
import { SmoothButtonCart } from "./smooth-button-cart";

interface ProductModalProps {
  product: ProductImagesData;
}

export function ProductModal({ product }: ProductModalProps) {
  const router = useRouter();
  const { isMobile, height } = useMediaQuery();
  const [snap, setSnap] = useState<number | string | null>(0.3);
  const contentRef = useRef<HTMLDivElement>(null);

  const snapPoints = ["250px", 0.9];
  const lastSnapPoint = snapPoints[snapPoints.length - 1];

  let drawerHeightStart;
  if (height) {
    drawerHeightStart =
      typeof snapPoints[0] === "string"
        ? height - (parseInt(snapPoints[0].replace("px", "")) - 35)
        : 0;
  }

  const handleOpenChange = () => {
    router.back();
  };

  const handleSnapChange = (newSnap: any) => {
    if (newSnap !== lastSnapPoint && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    setSnap(newSnap);
  };

  if (isMobile) {
    return (
      <Drawer.Root
        open={true}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={handleSnapChange}
        dismissible={false}
        onClose={handleOpenChange}
      >
        <Drawer.Portal>
          <Drawer.Overlay
            onClick={() => handleSnapChange(snapPoints[0])}
            className="fixed inset-0 bg-background/30 backdrop-blur-sm"
            style={{
              zIndex: snap === lastSnapPoint ? 45 : 30,
            }}
          />

          {/* Carousel */}
          <div className="pointer-events-auto fixed inset-0 z-40 bg-background">
            <div
              className="relative size-full"
              style={{
                height: drawerHeightStart,
              }}
            >
              <ProductCarousel images={product.images} drawer />
            </div>
          </div>

          {/* Cart button  */}
          <div className="pointer-events-auto fixed inset-x-0 bottom-0 z-[80] h-16 shrink-0 border-t bg-background">
            <div className="mx-auto flex h-full max-w-md items-center px-4">
              <SmoothButtonCart />
            </div>
          </div>

          {/* Drawer Content */}
          <Drawer.Content
            vaul-drawer-carousel=""
            className="border-b-none fixed inset-x-0 bottom-0 z-50 -mx-px flex h-full max-h-[97%] flex-col overflow-hidden rounded-t-2xl border bg-background outline-none"
          >
            <div className="sticky top-0 flex w-full items-center justify-center bg-background">
              <div className="my-3 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
            </div>

            <div
              ref={contentRef}
              className={cn(
                "relative mx-auto flex w-full max-w-md flex-col overscroll-none px-4 py-2",
                {
                  "overflow-y-auto pb-20": snap === lastSnapPoint,
                  "overflow-hidden": snap !== lastSnapPoint,
                },
              )}
            >
              {/* Header Drawer */}
              <div
                className="w-full shrink-0"
                onClick={() => handleSnapChange(lastSnapPoint)}
                // style={{
                //   height: drawerHeightStart
                //     ? `calc(${snapPoints[0]} - 50px)`
                //     : "auto",
                // }}
              >
                <Drawer.Title className="mt-1 truncate text-2xl font-bold">
                  {product.title}
                </Drawer.Title>
                <p className="mt-2 text-xl font-medium text-muted-foreground">
                  ${product.price}
                </p>
                <div className="mt-3 flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={`star-${index}`}
                      className="size-5 shrink-0 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ))}
                  <span className="ml-2 text-[15px] font-medium leading-none text-muted-foreground/80">
                    35 reviews
                  </span>
                </div>
              </div>

              <div className="mb-16 mt-3 w-full text-pretty">
                <Drawer.Description className="mb-4 mt-6 text-[17px] font-medium text-muted-foreground">
                  {product.description}
                </Drawer.Description>

                <ProductInfos />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "max-w-2xl gap-0 overflow-hidden p-3 md:rounded-2xl md:border",
        )}
      >
        <DialogHeader className="h-0">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ProductDisplay product={product} />
      </DialogContent>
    </Dialog>
  );
}
