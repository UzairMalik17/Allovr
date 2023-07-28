import React from "react";

function ImgButton({ style, content, Img, istyle, alt }) {
  return (
    <button
      className={`rounded-full border-white border p-2 items-center ${style}`}>
      <img className={istyle} src={Img} alt={alt}></img>
      {content}
    </button>
  );
}

export default ImgButton;
