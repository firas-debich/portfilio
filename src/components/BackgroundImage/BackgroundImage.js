import React from "react";
const prefix = "/portfilio";
const BackgroundImage = () => (
  <div>
    <img
      src={ `${prefix}/images/pic-min.png`}
      height="380px"
      style={{
        transform: "translateY(0)",
      }}
    />
  </div>
);

export default BackgroundImage;
