import React from "react";
import Navbar from "../home/Navbar";
import Hero from "../home/Hero";
import Staking from "../home/Staking";
import StakingInfo from "../home/StakingInfo";
function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Staking />
      <StakingInfo />
    </div>
  );
}

export default Landing;
