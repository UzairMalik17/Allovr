import React from "react";
import ComponentWrapper from "./Componentwrapper";
import Button from "./Button";

function Poolcard({ number, staked, owned, slots, poolLink, rebalance }) {
  return (
    <ComponentWrapper
      style={`bg-[#111112] text-white font-workSans rounded-2xl`}>
      <div className="w-full py-4 flex flex-col gap-4">
        <span className="text-[24px] font-bold">Pool {number}</span>
        <div className="w-full flex flex-row items-center justify-between text-sm">
          <div className="flex flex-col gap-2 items-start justify-start">
            <span>Total Staked</span>
            <div>
              <span className="font-spaceGrotesk text-2xl">{staked}</span>
              <span> AOVR</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end justify-end">
            <span>Total Owned</span>
            <div>
              <span className="font-spaceGrotesk text-2xl">{owned}</span>
              <span>{"   "}AOVR</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-2">
          <span>Available Slots :</span>{" "}
          <div className="flex flex-row gap-2 items-center justify-start">
            <span className="font-spaceGrotesk text-Yellow text-2xl">
              {slots}
            </span>
            <span>Slots</span>
          </div>
        </div>
        <hr></hr>
        <div className="w-full text-[#0093FE] break-all">
          <a href={poolLink}>{poolLink}</a>
        </div>
        <div className="w-full flex flex-row gap-2 items-center justify-start">
          {rebalance && (
            <Button
              style={`w-[120px] h-[41px] border-white hover:bg-Red`}
              content={"REBALANCE"}
            />
          )}
          <Button
            style={`w-[80px] h-[41px] border-Red bg-Red`}
            content={"STAKE"}
          />
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Poolcard;
