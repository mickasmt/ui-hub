"use client";

import { useRouter } from "next/navigation";
import { Drawer } from "vaul";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data";
import ProductDisplay from "./product-display";
import { useState } from "react";
import { ProductCarousel } from "./product-carousel";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface ProductModalProps {
  product: (typeof products)[0];
}

export function ProductModal({ product }: ProductModalProps) {
  const router = useRouter();
  const { isMobile, height } = useMediaQuery();
  const [snap, setSnap] = useState<number | string | null>(0.3);

  const snapPoints = ["250px", 0.8];
  const lastSnapPoint = snapPoints[snapPoints.length - 1];

  let drawerHeightStart;
  if (height) {
    drawerHeightStart =
      typeof snapPoints[0] === "string"
        ? height - (parseInt(snapPoints[0].replace("px", "")) - 35)
        : 0;
  }

  console.log(drawerHeightStart);

  const handleOpenChange = () => {
    router.back();
  };

  if (isMobile) {
    return (
      <Drawer.Root
        open={true}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
        dismissible={false}
        onClose={handleOpenChange}
      >
        <Drawer.Portal>
          <Drawer.Overlay
            onClick={handleOpenChange}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm"
            style={{
              zIndex: snap === lastSnapPoint ? 45 : 30,
            }}
          />

          {/* Carousel */}
          <div className="fixed inset-0 bg-background z-40 pointer-events-auto">
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
          <div className="fixed inset-x-0 bottom-0 z-[60] h-16 shrink-0 bg-background border-t">
            <div className="flex items-center h-full max-w-md mx-auto px-4">
              <p className="text-xl text-muted-foreground font-medium w-28">
                ${product.price}
              </p>
              <Button className="h-12 rounded-xl w-full text-base font-medium">
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Drawer Content */}
          <Drawer.Content
            vaul-drawer-carousel=""
            className="fixed flex flex-col bg-background border border-b-none rounded-t-2xl overflow-hidden bottom-0 inset-x-0 h-full max-h-[97%] mx-[-1px] z-50 outline-none"
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center bg-background">
              <div className="my-2.5 h-1.5 w-16 rounded-full bg-muted-foreground/20" />
            </div>

            <div
              className={cn(
                "relative flex flex-col max-w-md mx-auto w-full px-4 pt-2 pb-20",
                {
                  "overflow-y-auto": snap === lastSnapPoint,
                  "overflow-hidden": snap !== lastSnapPoint,
                }
              )}
            >
              <div
                className="w-full"
                style={{
                  height: drawerHeightStart
                    ? `calc(${snapPoints[0]} - 50px)`
                    : "auto",
                }}
              >
                <div className="flex items-center">
                  <svg
                    className="text-yellow-400 h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-400 h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-400 h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-400 h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-400 h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-[15px] leading-none text-muted-foreground/80 font-medium ml-1.5">(22)</span>
                </div>
                <Drawer.Title className="mt-2 text-2xl font-bold">
                  {product.title}
                </Drawer.Title>
                <Drawer.Description
                  className={cn(
                    "mt-1.5 text-[17px] text-muted-foreground font-medium",
                    {
                      "line-clamp-2": snap !== lastSnapPoint,
                    }
                  )}
                >
                  {product.description}
                </Drawer.Description>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-medium">Module 01. The Details</h2>
                <div className="space-y-4 mt-4">
                  <div>
                    <span className="block">Layers of UI</span>
                    <span className="text-gray-600">
                      A basic introduction to Layers of Design.
                    </span>
                  </div>
                  <div>
                    <span className="block">Typography</span>
                    <span className="text-gray-600">
                      The fundamentals of type.
                    </span>
                  </div>
                  <div>
                    <span className="block">UI Animations</span>
                    <span className="text-gray-600">
                      Going through the right easings and durations.
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-12">
                <h2 className="text-xl font-medium">Module 02. The Process</h2>
                <div className="space-y-4 mt-4">
                  <div>
                    <span className="block">Build</span>
                    <span className="text-gray-600">
                      Create cool components to practice.
                    </span>
                  </div>
                  <div>
                    <span className="block">User Insight</span>
                    <span className="text-gray-600">
                      Find out what users think and fine-tune.
                    </span>
                  </div>
                  <div>
                    <span className="block">Putting it all together</span>
                    <span className="text-gray-600">
                      Let&apos;s build an app together and apply everything.
                    </span>
                  </div>
                </div>
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
          "overflow-hidden p-3 max-w-2xl md:rounded-xl md:border gap-0"
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
