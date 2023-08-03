import React from "react";
import ComponentWrapper from "../shared/Componentwrapper";

function StakingInfo() {
  return (
    <ComponentWrapper>
      <div className="w-full py-12 flex flex-col gap-8 justify-between text-white font-workSans font-semibold">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between items-center">
          <img
            className="w-[312px] md:w-[400px] h-[324] md:h-[560px] items-center"
            src="./images/stakinginfo.png"
            alt="Staking"></img>
          <div className="w-full md:w-[590px] flex flex-col gap-4 ">
            <span className="text-5xl">What is Staking?</span>
            <div className="font-normal">
              <span>
                Staking is when you lock AOVR tokens over a certain time span.
                In return, you receive a share of the weekly minted new
              </span>{" "}
              <span className="font-semibold">AOVR</span>
              <span>
                {" "}
                tokens. While your tokens, are staked you cannot send them to
                other wallets cast votes wihte them in the
              </span>{" "}
              <span className="font-semibold"> ALLOVR DAO</span>
              <span>
                {" "}
                or make use of any other utility the tokens hold. However, it is
                completely up to you how many tokens if any you’d like to stake.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-8/12 text-3xl">
          <span>- The number of </span>
          <span className="text-Yellow">tokens</span>
          <span>
            {" "}
            you gain from the weekly minted supply is proportional to the size
            of your stake compared to those of all others. The minimum staking
            period is oane wee after that you can withdraw your tokens{" "}
          </span>
          <span className="text-Yellow">plus your earned interest</span>
          <span> at any time.</span>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default StakingInfo;
