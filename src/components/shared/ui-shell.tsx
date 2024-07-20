import { cn } from "@/lib/utils";

export function UIShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-second-accent w-full rounded-xl border border-border p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
