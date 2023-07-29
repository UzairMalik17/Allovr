import React from "react";
import Navbar from "../home/Navbar";
import Hero from "../home/Hero";
import Staking from "../home/Staking";
import StakingInfo from "../home/StakingInfo";
import Action from "../home/Action";
function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Staking />
      <StakingInfo />
      <Action />
    </div>
  );
}

export default Landing;
