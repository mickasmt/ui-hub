import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export function UIShell({
  children,
  className,
  githubUrl,
}: {
  children: React.ReactNode;
  className?: string;
  githubUrl?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full rounded-xl border border-border bg-white/90 p-4 dark:bg-muted/30",
        className,
      )}
    >
      {githubUrl ? (
        <Link
          href={githubUrl}
          target="_blank"
          className="absolute bottom-3 right-4"
        >
          <Icons.gitHub className="size-6 text-muted-foreground/80 transition duration-300 hover:text-foreground" />
        </Link>
      ) : null}

      {children}
    </div>
  );
}
