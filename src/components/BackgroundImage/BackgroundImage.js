import React from "react";
import Image from "next/image";
const  firas = require( "./../../../public/images/pic-min.png")
const prefix = "/portfilio";
const BackgroundImage = () => (
  <div>
    <Image
      placeholder="blur"
      src={require( "./../../../public/images/pic-min.png")}
      height={350}
      width={260}
      layout="responsive"
      alt="firas debich - Firas Debich "
      priority
      blurDataURL
    />
  </div>
);

export default BackgroundImage;
