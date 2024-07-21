import { HeaderSection } from "@/components/shared/header-section";
import { UIShell } from "@/components/shared/ui-shell";

import { SmoothButton } from "./smooth-button";

export function AnimatedButton() {
  return (
    <div className="flex flex-col gap-y-6">
      <HeaderSection
        title="Animated Button"
        text="Try an animated button with framer-motion."
      />
      <UIShell
        className="flex h-[350px] items-center justify-center"
        githubUrl="https://github.com/mickasmt/ui-hub/tree/main/src/components/experiments/animated-button"
      >
        <SmoothButton />
      </UIShell>
    </div>
  );
}
