import React from "react";
import Image from "next/image";
const BackgroundImage = () => (
  <div>
    <Image
      placeholder="blur"
      src={"https://firas-debich.github.io/portfilio/pic-min.png")}
      height={350}
      width={260}
      layout="responsive"
      alt="firas debich - Firas Debich "
      priority
      
    />
  </div>
);

export default BackgroundImage;
