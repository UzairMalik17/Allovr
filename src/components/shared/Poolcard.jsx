import React from "react";
import ComponentWrapper from "./Componentwrapper";
import Button from "./Button";

function Poolcard({ number, staked, owned, slots, poolLink, rebalance }) {
  return (
    <ComponentWrapper
      style={`bg-[#111112] text-white font-workSans rounded-2xl`}>
      <div className="w-full py-4 flex flex-col gap-4">
        <span className="text-[24px] font-bold">Pool {number}</span>
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2 ">
            <span className="font-workSanstext-base">Total Staked</span>
            <div>
              <span className="font-spaceGrotesk text-2xl">{staked}</span>
              <span> AOVR</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="font-workSanstext-base">Total Owned</span>
            <div>
              <span className="font-spaceGrotesk text-2xl">{owned}</span>
              <span>{"   "}AOVR</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-2 text-base font-workSans">
          <span>Available Slots :</span>{" "}
          <div>
            <span className="font-spaceGrotesk text-Yellow text-2xl">
              {slots}
            </span>
            <span>Slots</span>
          </div>
        </div>
        <hr></hr>
        <div className="w-[236px] text-[#0093FE] ">
          <a href={poolLink}>l</a>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-2 items-center justify-start font-spaceGrotesk">
          {rebalance && (
            <Button
              style={`w-10/12 lg:w-[120px] h-[41px] hover:bg-pink`}
              content={"REBALANCE"}
            />
          )}
          <Button
            style={`w-10/12 lg:w-[80px] h-[41px] bg-Red border-Red`}
            content={"STAKE"}
          />
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Poolcard;
