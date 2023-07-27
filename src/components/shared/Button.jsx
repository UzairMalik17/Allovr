import React from "react";

function Button({ style, content }) {
  return (
    <button
      className={`rounded-full border-white border p-2 items-center ${style}`}>
      {content}
    </button>
  );
}

export default Button;
