import React from "react";
import { useState } from "react";
import ImgButton from "../shared/ImgButton";
import ComponentWrapper from "../shared/Componentwrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "About", route: "/" },
    { name: "How it Works", route: "/" },
    { name: "Staking", route: "/" },
  ];
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <ComponentWrapper style={`relative bg-transparent`}>
      <div className="w-full h-[90px] flex items-center justify-between absolute left-0 right-0 top-0 mx:auto md:px-8 px-4 text-white font-workSans">
        <img
          className="w-[106px] h-[26px] sm:w-[170px] sm:h-[41px]"
          src="./images/logo.png"
          alt="logo Allovr"></img>
        <div className="flex items-center justify-start gap-2 md:gap-8">
          {menu.map((item, index) => {
            return (
              <a
                className="hidden min-[850px]:inline"
                key={index}
                href={item.route}>
                {item.name}
              </a>
            );
          })}
          <ImgButton
            style={`w-[160px] h-[30px] md:w-[287px] md:h-[52px] text-[8px] md:text-base flex flex-row justify-start gap-2 hover:bg-Red border-white`}
            content={"CONNECT PHANTOM WALLET"}
            istyle={"w-2.5 h-3.5 md:w-6 md:h-6"}
            Img={"./images/phantom.png"}
            alt={"Phantom"}
          />
          <GiHamburgerMenu
            className={`h-6 w-6 inline min-[850px]:hidden text-Red hover:text-white ${
              toggle && "text-white"
            }`}
            onClick={toggleHandler}
          />
        </div>
        {toggle && (
          <div className="w-screen h-[447px] absolute min-[850px]:hidden top-0 left-0 flex flex-col bg-black justify-between gap-8 items-center p-4 z-10">
            <div className="flex flex-row items-center relative justify-end w-full">
              <AiOutlineClose
                className="w-6 h-6 text-Red hover:text-white absolute right-4 top-4"
                onClick={toggleHandler}
              />
            </div>
            <img
              className="w-[170px] h-[41px]"
              src="./images/logo.png"
              alt="logo Allovr"></img>
            {menu.map((item, index) => {
              return (
                <a key={index} href={item.route}>
                  {item.name}
                </a>
              );
            })}
            <ImgButton
              style={`w-[287px] h-[52px] text-base flex flex-row gap-2 hover:bg-Red border-white`}
              content={"CONNECT PHANTOM WALLET"}
              istyle={"w-6 h-6"}
              Img={"./images/phantom.png"}
              alt={"Phantom"}
            />
          </div>
        )}
      </div>
    </ComponentWrapper>
  );
}

export default Navbar;
