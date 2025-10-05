import React from "react";
import type { HeadingProps } from "@/types";

export function Heading({ headline, linkId }: Readonly<HeadingProps>) {
  return (
    <h3 className="article-headline" id={linkId}>
      {headline}
    </h3>
  );
}
