import ComponentWrapper from "../shared/Componentwrapper";
import ImgButton from "../shared/ImgButton";
import Button from "../shared/Button";

function Working() {
  return (
    <ComponentWrapper style={`py-12`}>
      <div className="w-full  flex flex-col gap-8 justify-between text-white font-workSans">
        <div className="w-full flex flex-col-reverse md:flex-row gap-8 md:gap-0 justify-between items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <span className="text-5xl font-bold">How does it work?</span>
            <div>
              <span>The total </span>{" "}
              <span className="font-semibold">AOVR</span>
              <span>
                {" "}
                supply is inflated with an additional 3% every year. The total
                AOVR supply is inflated with an additional 3% every year. This
                inflation happens in weekly increments, paid out to everyone in
                the community with staked AOVR tokens at the time of payout and
                proportional to the amount staked.{" "}
              </span>
              <p>
                <span>All staked tokens are held by the </span>{" "}
                <span className="font-semibold">AOVR</span>
                <span> Staking treasury, with is controled by the </span>{" "}
                <span className="font-semibold">DAO</span>
                <span>
                  {" "}
                  and therefore secured against malicious behavior by the
                </span>{" "}
                <span className="font-semibold">ALLOVR</span>
                <span> community.</span>
              </p>
            </div>
          </div>
          <img
            className="w-[312px] md:w-[518px] h-[337px] md:h-[560px] items-center"
            src="./images/work.png"
            alt="Working"></img>
        </div>
        <div className="w-full flex flex-row items-center justify-end relative">
          <div className="w-full md:w-8/12 flex flex-col gap-12 font-semibold text-3xl">
            <div>
              <span>- An on-chain register of staking pools is </span>
              <span className="text-Yellow">maintained publicly</span>
              <span> and </span>
              <span className="text-Yellow">transparently</span>
              <span>
                , keeping reords of correct inflation distribution over all
                eligible accounts and{" "}
              </span>
              <span className="text-Yellow">outsanting payments</span>
              <span> per staking slot.</span>
              <span className="text-Yellow">plus your earned interest</span>
              <span> at any time.</span>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-6 text-base md:items-start items-center font-normal">
              <ImgButton
                style={
                  "w-10/12 md:w-[309px] h-[56px] flex flex-row-reverse border-Red bg-Red hover:bg-Yellow"
                }
                alt={"Arrow"}
                Img={"./images/arrow-down.png"}
                content={"READ TECHNICAL DESCRIPTION"}
                istyle={"rotate-[270deg]"}
              />
              <Button
                style={
                  "w-10/12 md:w-[233px] h-[56px] border-white hover:bg-Yellow"
                }
                content={"BROWSE STAKING POOLS"}
              />
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Working;
