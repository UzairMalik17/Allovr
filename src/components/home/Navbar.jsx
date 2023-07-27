import React from "react";
import { useState } from "react";
import Button from "../shared/Button";
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
    <ComponentWrapper style={`relative bg-black`}>
      <div className="w-full h-[100px] flex flex-row bg-black items-center justify-between text-white font-workSans">
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
          <Button
            style={`w-[160px] h-[30px] md:w-[287px] md:h-[52px] text-[8px] md:text-base flex flex-row justify-start gap-2 hover:bg-Red border-white`}
            content={
              <>
                <img
                  className="w-3 h-3 md:w-6 md:h-6"
                  src="./images/phantom.png"
                  alt="Phantom"></img>
                CONNECT PHANTOM WALLET
              </>
            }
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
            <Button
              style={`w-[287px] h-[52px] text-base flex flex-row gap-2 hover:bg-Red border-white`}
              content={
                <>
                  <img
                    className="w-6 h-6"
                    src="./images/phantom.png"
                    alt="Phantom"></img>
                  CONNECT PHANTOM WALLET
                </>
              }
            />
          </div>
        )}
      </div>
    </ComponentWrapper>
  );
}

export default Navbar;
