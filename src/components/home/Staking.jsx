import React from "react";
import ComponentWrapper from "../shared/Componentwrapper";
import { useState, useEffect } from "react";
import Bubble from "../shared/Bubble";
import ImgButton from "../shared/ImgButton";
import Button from "../shared/Button";

function Staking() {
  var tomorrow = new Date();
  const date = tomorrow.setDate(tomorrow.getDate() + 3);
  const [expiryTime, setExpiryTime] = useState(date);
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  const earninginfo = [{ stakedAmount: 56599, communityEarningAmount: 3923 }];
  return (
    <ComponentWrapper>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 py-12">
        <div className="w-full md:w-1/2 flex flex-col gap-8 font-workSans items-center md:items-start text-xl text-white">
          <span>Total Staked at this moment</span>
          {earninginfo.stakedAmount}
          <span>AOVR</span>
          <span>Community earnings since last payout</span>
          {earninginfo.communityEarningAmount}
          <span>AOVR</span>
          <span>Time to next payout</span>
          <div className="w-full md:w-[312px] h-[90px] text-sm flex flex-row gap-4 items-center justify-between">
            <Bubble content={countdownTime.countdownDays} text={"Days"} />
            <Bubble content={countdownTime.countdownHours} text={"Hours"} />
            <Bubble content={countdownTime.countdownMinutes} text={"Minutes"} />
            <Bubble content={countdownTime.countdownSeconds} text={"Seconds"} />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 text-[16px] font-spaceGrotesk">
            <ImgButton
              style={
                "w-full md:w-[221px] h-[56px] text-white flex flex-row-reverse justify-center hover:bg-Red font-normal bg-gradient-to-r from-Red to-Yellow"
              }
              alt={"Arrow"}
              Img={"./images/arrow-down.png"}
              content={"STAKE AOVR NOW"}
              istyle={"rotate-[270deg]"}
            />
            <Button
              style={
                "w-full md:w-[221px] h-[56px] hover:bg-gradient-to-r from-Red to-Yellow"
              }
              content={"WITHDRAW AOVR"}
            />
          </div>
        </div>
        <div className="w-full md:w-[695px] h-[536px] bg-[#101014] flex justify-center items-center font-workSans text-6xl font-semibold text-[#303038]">
          Stake First
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Staking;
