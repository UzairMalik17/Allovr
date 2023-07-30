import React from "react";
import ComponentWrapper from "../shared/Componentwrapper";
import Button from "../shared/Button";
import Poolcard from "../shared/Poolcard";

function Stakingpools() {
  return (
    <ComponentWrapper
      style={`py-12 bg-[url('./images/topGr.png')] bg-cover bg-no-repeat`}>
      <div className="w-full">
        <div className="w-full flex flex-col gap-8 justify-between text-white">
          <div className="w-1/2 font-workSans flex flex-col gap-8 font-semibold text-6xl">
            <span>Staking pools</span>
            <div className="text-base font-normal">
              <span>Browse </span>
              <span className="font-semibold">ALLOVR’s</span>
              <span>
                {" "}
                100% transparent staking pools. Select a pool to stake your{" "}
              </span>
              <span className="font-semibold">ALLOVR</span>
              <span> tokens or get assigned one randomly by hitting </span>
              <span className="text-Yellow">Stake AOVR now.</span>
              <span> note that all staking pools work the same and</span>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="w-1/2">
              <p className="font-workSans text-3xl">
                - earn the same there is no good or bad choice here
              </p>
            </div>
            <div className="w-1/2 flex flex-row justify-end gap-4 items-center">
              <Button
                style={
                  "w-10/12 md:w-[233px] h-[56px] bg-Red border-Red hover:bg-Yellow font-normal"
                }
                content={"TRIGGER INFLATION RUN"}
              />
              <Button
                style={
                  "w-10/12 md:w-[233px] h-[56px] hover:bg-Yellow font-normal"
                }
                content={"REGISTER POOL"}
              />
            </div>
          </div>
        </div>
        <div className="w-full grid-cols-4 gap-2">
          <Poolcard />
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Stakingpools;
