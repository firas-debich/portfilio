import React from "react";
const prefix = "/portfilio";
const BackgroundImage = () => (
  <div>
    <img
      src={prefix + "/images/pic.png"}
      style={{
        transform: "translateY(-8rem)",
      }}
    />
  </div>
);

export default BackgroundImage;
