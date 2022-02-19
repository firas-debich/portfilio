import React from "react";
import Image from "next/image";

const BackgroundImage = () => (
  <div>
    <Image
      placeholder="blur"
      src={"/images/pic-min.png"}
      height={310}
      width={220}
      layout="responsive"
      alt="firas debich - Firas Debich"
      priority
      blurDataURL
    />
  </div>
);

export default BackgroundImage;
