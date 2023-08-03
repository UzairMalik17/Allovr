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
    <ComponentWrapper style={`relative bg-transparent z-10`}>
      <div className="w-full h-24 flex items-center justify-between absolute left-0 right-0 top-0 mx:auto md:px-8 px-4 text-white font-workSans">
        <img
          className="w-28 h-7 sm:w-44 sm:h-10"
          src="./images/logo.png"
          alt="logo Allovr"></img>
        <div className="flex items-center justify-start gap-8">
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
            style={`w-40 h-8 md:w-72 md:h-14 text-[8px] md:text-base border-white hover:bg-Red`}
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
            <div className="flex items-center justify-end w-full">
              <AiOutlineClose
                className="w-12 h-8 text-Red hover:text-white pt-4 pr-4"
                onClick={toggleHandler}
              />
            </div>
            <img
              className="w-44 h-10"
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
              style={`w-72 h-14 text-base border-white hover:bg-Red`}
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
