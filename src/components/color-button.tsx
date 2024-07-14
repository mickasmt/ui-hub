import React from "react";

export const ColorButton = () => {
  return (
    <div>color</div>
    // <Tooltip key={theme.name}>
    //   <TooltipTrigger asChild>
    //     <button
    //       onClick={() =>
    //         setConfig({
    //           ...config,
    //           theme: theme.name,
    //         })
    //       }
    //       className={cn(
    //         "flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs",
    //         isActive ? "border-[--theme-primary]" : "border-transparent"
    //       )}
    //       style={
    //         {
    //           "--theme-primary": `hsl(${
    //             theme?.activeColor[mode === "dark" ? "dark" : "light"]
    //           })`,
    //         } as React.CSSProperties
    //       }
    //     >
    //       <span
    //         className={cn(
    //           "flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]"
    //         )}
    //       >
    //         {isActive && <CheckIcon className="h-4 w-4 text-white" />}
    //       </span>
    //       <span className="sr-only">{theme.label}</span>
    //     </button>
    //   </TooltipTrigger>
    //   <TooltipContent
    //     align="center"
    //     className="rounded-[0.5rem] bg-zinc-900 text-zinc-50"
    //   >
    //     {theme.label}
    //   </TooltipContent>
    // </Tooltip>
  );
};
