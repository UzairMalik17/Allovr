import React from "react";
import ComponentWrapper from "../shared/Componentwrapper";
import ImgButton from "../shared/ImgButton";
import Button from "../shared/Button";
function Action() {
  return (
    <ComponentWrapper style={`py-12`}>
      <div className="w-full items-center flex flex-col">
        <div className="w-11/12 h-[418px] min-[507px]:h-[358px] md:h-[300px] flex flex-col relative rounded-2xl">
          <div className="w-full h-[70px] absolute top-0 bg-gradient-to-t from-black to-black -z-10"></div>
          <div className="w-[60px] h-[100px] absolute rotate-[30deg] bg-black top-[-45px] left-[-30px] -z-10"></div>
          <div className="w-full flex flex-col gap-8 items-center mt-auto bg-Yellow py-10 shadow-[0px_-60px_40px_-20px_rgba(0,0,0,0.3)] shadow-Yellow rounded-2xl">
            <div className="w-full items-center text-center">
              <span className="w-full font-semibold text-[40px] md:text-[55px] font-workSans">
                Start your action now!
              </span>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
              <ImgButton
                style={
                  "w-10/12 md:w-[221px] h-[56px] flex flex-row-reverse border-Yellow hover:bg-Red bg-[#1A1A1A]"
                }
                alt={"Arrow"}
                Img={"./images/arrow-down.png"}
                content={"STAKE AOVR NOW"}
              />
              <Button
                style={
                  "w-10/12 md:w-[221px] h-[56px] border-black hover:bg-Red"
                }
                content={"WITHDRAW AOVR"}
              />
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Action;
