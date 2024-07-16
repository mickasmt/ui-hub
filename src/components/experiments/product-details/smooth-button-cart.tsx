"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const buttonCopy = {
  idle: "Add to cart",
  loading: <Icons.spinner className="animate-spin text-foreground size-6" />,
  success: "Product added!",
};

export const SmoothButtonCart = () => {
  const [buttonState, setButtonState] =
    useState<keyof typeof buttonCopy>("idle");

  return (
    <Button
      className="h-12 rounded-xl w-full text-base font-medium disabled:opacity-85"
      disabled={buttonState !== "idle"}
      onClick={() => {
        // This code is just a placeholder
        setButtonState("loading");

        setTimeout(() => {
          setButtonState("success");
        }, 1750);

        setTimeout(() => {
          setButtonState("idle");
        }, 3500);
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
