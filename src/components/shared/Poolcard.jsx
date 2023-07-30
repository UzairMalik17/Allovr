import React from "react";
import ComponentWrapper from "./Componentwrapper";

function Poolcard({ number }) {
  return (
    <ComponentWrapper style={`bg-[#111112] text-white font-workSans`}>
      <div className="w-full py-4 flex flex-col gap-4">
        <span>Pool {number}</span>
        <div className="w-full"></div>
      </div>
    </ComponentWrapper>
  );
}

export default Poolcard;
