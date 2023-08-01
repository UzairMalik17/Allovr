import React from "react";
import ComponentWrapper from "../shared/Componentwrapper";
import { BiLogoDiscord } from "react-icons/bi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <ComponentWrapper style={`py-12`}>
      <div className="w-full h-1/2 flex items-center justify-center">
        <div className="flex flex-col justify-between gap-8">
          <img
            className="w-[250px] h-[60px]"
            src="./images/logo.png"
            alt="logo Allovr"></img>
          <div className="w-full flex flex-row gap-8 justify-center items-center">
            <BiLogoDiscord className="w-[24px] h-[24px] bg-Yellow hover:bg-Red" />
            <PiInstagramLogoFill className="w-[24px] h-[24px] bg-Yellow hover:bg-Red" />
            <BsTwitter className="w-[24px] h-[24px] bg-Yellow hover:bg-Red" />
          </div>
          <span className="font-workSans text-xl text-white">
            2022 . All Right Reserved
          </span>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Footer;
