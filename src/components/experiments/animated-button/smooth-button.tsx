"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const buttonCopy = {
  idle: "Try me",
  loading: <Loader2 className="size-5 animate-spin" />,
  success: "Yes sir!",
};

const directions = ["top", "bottom", "left", "right"] as const;
type Direction = (typeof directions)[number];

const directionValues = {
  top: {
    initial: { y: 25, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -25, opacity: 0 },
  },
  bottom: {
    initial: { y: -25, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 25, opacity: 0 },
  },
  left: {
    initial: { x: 25, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -25, opacity: 0 },
  },
  right: {
    initial: { x: -25, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 25, opacity: 0 },
  },
};

export const SmoothButton = () => {
  const [buttonState, setButtonState] =
    useState<keyof typeof buttonCopy>("idle");
  const [direction, setDirection] = useState<Direction>(directions[0]);

  return (
    <div className="flex flex-col items-center gap-14">
      <div>
        <h2 className="text-center font-medium">Choose a direction</h2>
        <ToggleGroup
          className="mt-3 flex flex-wrap items-center justify-center"
          type="single"
          defaultValue={directions[0]}
          variant="outline"
          onValueChange={(value) => setDirection(value as Direction)}
        >
          {directions.map((dir) => (
            <ToggleGroupItem
              key={dir}
              value={dir}
              className="rounded-xl px-5 capitalize"
            >
              {dir}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <Button
        className="h-12 w-52 shrink-0 rounded-xl text-base font-semibold disabled:opacity-85"
        disabled={buttonState !== "idle"}
        onClick={() => {
          // This code is just a placeholder
          setButtonState("loading");

          setTimeout(() => {
            setButtonState("success");
          }, 1000);

          setTimeout(() => {
            setButtonState("idle");
          }, 2500);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={buttonState}
            className="flex w-full items-center justify-center text-center"
            initial={directionValues[direction].initial}
            animate={directionValues[direction].animate}
            exit={directionValues[direction].exit}
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
    </div>
  );
};
