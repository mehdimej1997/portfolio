import Image from "next/image";
import React, { AnchorHTMLAttributes } from "react";

interface Props
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  imageUrl: string;
  backdropColor?: string;
}

export default function IconBounce({
  imageUrl,
  backdropColor = "gray",
  ...props
}: Props) {
  return (
    <a
      {...props}
      className={`icon inline-block backdrop-ic ${backdropColor} before:bg-opacity-10 relative`}
    >
      <div className="h-12 aspect-square relative">
        <Image alt="" src={imageUrl} fill />
      </div>
    </a>
  );
}
