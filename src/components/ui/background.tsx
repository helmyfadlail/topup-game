import Image from "next/image";

import { shimmer, toBase64 } from "@/utils";

import { BackgroundProps } from "@/types";

export const Background = ({ src, className, children, parentClassName }: BackgroundProps) => {
  return (
    <figure className={`relative text-light overflow-hidden ${parentClassName ?? ""}`}>
      <Image
        src={src}
        alt="background image"
        objectFit="cover"
        objectPosition="center"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(800, 800))}`}
        fill
        priority
        className={`absolute inset-0 w-full h-full`}
      />
      <div className={`z-1 flex relative w-full ${className ?? ""}`}>{children}</div>
    </figure>
  );
};
