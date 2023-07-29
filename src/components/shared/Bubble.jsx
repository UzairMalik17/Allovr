import React from "react";

function Bubble({ tstyle, cstyle, content, text }) {
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-between ${tstyle}`}>
      <div
        className={`w-14 h-14 rounded-full flex text-black text-2xl items-center justify-center bg-Yellow font-spaceGrotesk ${cstyle}`}>
        {content}
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Bubble;
