"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const buttonCopy = {
  idle: "Add to cart",
  loading: <Loader2 className="size-5 animate-spin" />,
  success: "Product added !",
};

export const SmoothButtonCart = () => {
  const [buttonState, setButtonState] =
    useState<keyof typeof buttonCopy>("idle");

  return (
    <Button
      className="h-12 w-full rounded-xl text-base font-semibold disabled:opacity-85"
      disabled={buttonState !== "idle"}
      onClick={() => {
        // This code is just a placeholder
        setButtonState("loading");

        setTimeout(() => {
          setButtonState("success");
        }, 1500);

        setTimeout(() => {
          setButtonState("idle");
        }, 3300);
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          // key using buttonState to indicate unmounting
          key={buttonState}
          className="flex w-full items-center justify-center"
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: 25,
            opacity: 0,
          }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0,
          }}
        >
          {buttonCopy[buttonState]}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
};
