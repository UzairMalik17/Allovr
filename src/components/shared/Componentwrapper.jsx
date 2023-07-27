import React from "react";

const ComponentWrapper = ({ style, children }) => {
  return (
    <div className={`w-full ${style} `}>
      <div className="w-full max-w-[1300px] mx-auto md:px-8 px-4">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
