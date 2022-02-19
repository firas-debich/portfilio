import React from "react";
import Image from "next/image";
const prefix = "/portfilio";
const BackgroundImage = () => (
  <div>
    <Image
      src={`${prefix}/images/pic-min.png`}
      height={350}
      width={260}
      layout="responsive"
      alt="firas debich - Firas Debich "
      priority
    />
  </div>
);

export default BackgroundImage;
