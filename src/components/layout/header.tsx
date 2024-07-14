import Image from "next/image";
import React from "react";

export function Header() {
  return (
    <div className="flex items-center gap-4 py-4">
      <Image
        className="size-[52px] shrink-0 overflow-hidden object-cover"
        src="/_static/images/flask.png"
        alt="avatar"
        width={52}
        height={52}
      />

      <div>
        <h1 className="text-[20px] font-bold">Ui Hub</h1>
        <p className="text-muted-foreground font-medium leading-none">
          A little space for my experiments!
        </p>
      </div>
    </div>
  );
}
