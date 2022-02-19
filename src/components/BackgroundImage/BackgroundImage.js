import React from "react";
import Image from "next/image";
import firas from "./../../../public/images/pic-min.png"
const prefix = "/portfilio/"
const BackgroundImage = () => (
  
  <div>
    <Image
      placeholder="blur"
      src={prefix+firas}
      height={310}
      width={220}
      layout="responsive"
      alt="firas debich - Firas Debich "
      priority
      blurDataURL
    />
  </div>
);

export default BackgroundImage;
