import React from "react";
import ComponentWrapper from "../shared/Componentwrapper";
import ImgButton from "../shared/ImgButton";

function Hero() {
  return (
    <ComponentWrapper
      style={`font-workSans bg-[url('./images/bottomGr.png')] min-[850px]:bg-Gradient bg-center bg-no-repeat bg-cover relative`}>
      <div className="w-full h-[1000px] min-[850px]:h-screen flex flex-col gap-4 min-[850px]:flex-row font-bold text-[56px] min-[850px]:text-8xl leading-[61px] min-[850px]:leading-[105.6px] items-center justify-between">
        <div className="w-full min-[850px]:w-[400px] h-[400px] min-[850px]:h-full flex flex-col gap-4 pt-[100px] items-center min-[850px]:items-start text-center">
          <span className="text-white">Stake</span>{" "}
          <span className="text-Yellow">ALLOVR.</span>
          <span className="text-white w-full min-[850px]:w-[400px] leading-[30px] text-[20px] min-[850px]:text-3xl">
            This is the best time to get the earnings you dream of.
          </span>
          <ImgButton
            style={
              "w-[180px] h-[56px] text-[16px] flex flex-row-reverse justify-center hover:bg-Red font-spaceGrotesk font-normal"
            }
            alt={"Arrow"}
            Img={"./images/arrow-down.png"}
            content={"SCROLL DOWN"}
            istyle={`w-6 h-6`}
          />
        </div>
        <div className="w-full min-[850px]:w-1/2 h-[600px] min-[850px]:h-screen bg-Hero absolute right-0 bottom-0 bg-no-repeat bg-cover bg-center"></div>
      </div>
    </ComponentWrapper>
  );
}

export default Hero;
