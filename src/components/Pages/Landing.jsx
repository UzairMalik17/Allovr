import React from "react";
import Navbar from "../home/Navbar";
import Hero from "../home/Hero";
import Staking from "../home/Staking";
import StakingInfo from "../home/StakingInfo";
import Action from "../home/Action";
import Working from "../home/Working";
import Stakingpools from "../home/Stakingpools";
function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Staking />
      <StakingInfo />
      <Action />
      <Working />
      <Stakingpools />
    </div>
  );
}

export default Landing;
