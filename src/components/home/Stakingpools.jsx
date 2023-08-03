import ComponentWrapper from "../shared/Componentwrapper";
import Button from "../shared/Button";
import Poolcard from "../shared/Poolcard";

function Stakingpools() {
  const pools = [
    {
      staked: 342,
      owned: 1234,
      slots: 3,
      link: "DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg",
      rebalance: false,
    },
    {
      staked: 342,
      owned: 1234,
      slots: 3,
      link: "DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg",
      rebalance: false,
    },
    {
      staked: 342,
      owned: 1234,
      slots: 3,
      link: "DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg",
      rebalance: true,
    },
    {
      staked: 342,
      owned: 1234,
      slots: 3,
      link: "DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg",
      rebalance: false,
    },
    {
      staked: 342,
      owned: 1234,
      slots: 3,
      link: "DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg",
      rebalance: true,
    },
    {
      staked: 342,
      owned: 1234,
      slots: 3,
      link: "DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg",
      rebalance: true,
    },
    {
      staked: 342,
      owned: 1234,
      slots: 3,
      link: "DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg",
      rebalance: true,
    },
    {
      staked: 342,
      owned: 1234,
      slots: 3,
      link: "DzWPTj1Ym5w5uGoGvdjtRK6GyoG4VpjL8VJhdUcSRfqg",
      rebalance: false,
    },
  ];
  return (
    <ComponentWrapper
      style={`py-12 bg-[url('./images/topGr.png')] bg-cover bg-no-repeat bg-top font-workSans text-white`}>
      <div className="w-full">
        <div className="w-full flex flex-col gap-6 md:gap-12 justify-between">
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <span className="font-semibold text-6xl">Staking pools</span>
            <div>
              <span>Browse </span>
              <span className="font-semibold">ALLOVR’s</span>
              <span>
                {" "}
                100% transparent staking pools. Select a pool to stake your{" "}
              </span>
              <span className="font-semibold">ALLOVR</span>
              <span> tokens or get assigned one randomly by hitting </span>
              <span className="text-Yellow font-semibold">Stake AOVR now.</span>
              <span> note that all staking pools work the same and</span>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/2">
              <p className="text-3xl">
                - earn the same there is no good or bad choice here
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-end gap-4 items-center">
              <Button
                style={`w-10/12 md:w-[233px] h-[56px] bg-Red border-Red hover:bg-Yellow`}
                content={"TRIGGER INFLATION RUN"}
              />
              <Button
                style={`w-10/12 md:w-[233px] h-[56px] border-white hover:bg-Yellow`}
                content={"REGISTER POOL"}
              />
            </div>
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {pools.map((items, index) => {
              return (
                <Poolcard
                  key={index}
                  number={index}
                  owned={items.owned}
                  staked={items.staked}
                  slots={items.slots}
                  poolLink={items.link}
                  rebalance={items.rebalance}
                />
              );
            })}
          </div>
          <div className="w-full flex flex-col justify-between items-center">
            <Button
              style={`w-[185px] h-[56px] border-white`}
              content={"LOAD MORE ..."}
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Stakingpools;
