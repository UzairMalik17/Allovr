import React from "react";
import ComponentWrapper from "../shared/Componentwrapper";
import ImgButton from "../shared/ImgButton";

function Hero() {
  return (
    <ComponentWrapper
      style={`font-workSans bg-[url('./images/bottomGr.png')] md:bg-Gradient bg-center bg-no-repeat bg-cover`}>
      <div className="w-full h-[1000px] md:h-screen text-[56px] md:text-[94px] flex flex-col gap-4 md:flex-row font-bold leading-[61px] md:leading-[105.6px] items-center font-workSans justify-between">
        <div className="w-full md:w-[400px] h-[400px] md:h-full flex flex-col gap-4 pt-[100px] items-center md:items-start text-center">
          <span className="text-white">Stake</span>{" "}
          <span className="text-Yellow">ALLOVR.</span>
          <span className="text-white w-[300px] leading-[30px] text-[20px] md:text-3xl">
            This is the best time to get the earnings you dream of.
          </span>
          <ImgButton
            style={
              "w-[180px] h-[56px] text-white text-[16px] flex flex-row-reverse justify-center hover:bg-Red"
            }
            alt={"Arrow"}
            Img={"./images/arrow-down.png"}
            content={"SCROLL DOWN"}
            bstyle={"w-6 h-6"}
          />
        </div>
        <div className="w-full md:w-1/2 h-[600px] md:h-[calc(100vh-90px)] bg-Hero absolute right-0 left:0 bottom-0 top-[400px] md:top-auto bg-no-repeat bg-cover bg-center"></div>
      </div>
    </ComponentWrapper>
  );
}

export default Hero;
