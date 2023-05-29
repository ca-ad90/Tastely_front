import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MainPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  return (
    <div className="relative bg-neutrals-neutral-white w-full h-[6862px] overflow-y-auto text-left text-3xl text-neutrals-neutral-black font-h1">
      <div className="absolute top-[120px] left-[0px] h-[6742px] flex flex-col items-center justify-start gap-[20px]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <div className="flex flex-row pt-2.5 pb-0 pr-2.5 pl-[15px] items-start justify-start">
              <b className="relative leading-[28px]">{`Who’s cooking right now? `}</b>
            </div>
            <div className="relative w-[390px] h-[88px] overflow-x-auto shrink-0 text-sm font-p1">
              <div className="absolute top-[12px] left-[5px] flex flex-row py-0 px-[11px] items-start justify-start gap-[11px]">
                <div className="flex flex-col items-end justify-start relative">
                  <img
                    className="relative rounded-[50%] w-[72.28px] h-[72.28px] object-cover z-[0]"
                    alt=""
                    src="/profile-picture@2x.png"
                  />
                  <img
                    className="absolute my-0 mx-[!important] right-[0.44px] bottom-[33.2px] w-[17.68px] h-[17.68px] overflow-hidden shrink-0 hidden z-[1]"
                    alt=""
                    src="/plus-icon2.svg"
                  />
                </div>
                <div className="flex flex-col items-center justify-start relative gap-[4px]">
                  <img className="relative w-[96.6px] h-[96.6px] z-[0]" alt="" src="/group-351.svg" />
                  <div className="relative leading-[20px] z-[1]">Aya</div>
                  <div className="my-0 mx-[!important] absolute top-[44px] left-[16.56px] rounded-[2.06px] bg-secondarycolor-secondarycolor shadow-[3.0927834510803223px_5.15463924407959px_10.82px_rgba(0,_0,_0,_0.1)] flex flex-row py-[0.5px] px-[2.577319622039795px] items-start justify-start z-[2] text-[6.19px] text-maincolor-maincolor2">
                    <div className="relative tracking-[0.52px] leading-[10.31px] font-semibold">LIVE</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start relative gap-[4px]">
                  <img className="relative w-[96.6px] h-[96.6px] z-[0]" alt="" src="/group-41.svg" />
                  <div className="relative leading-[20px] z-[1]">Magnus</div>
                  <div className="my-0 mx-[!important] absolute top-[45px] left-[14.96px] rounded-[2.06px] bg-secondarycolor-secondarycolor shadow-[3.0927834510803223px_5.15463924407959px_10.82px_rgba(0,_0,_0,_0.1)] flex flex-row py-[0.5px] px-[2.577319622039795px] items-start justify-start z-[2] text-[6.19px] text-maincolor-maincolor2">
                    <div className="relative tracking-[0.52px] leading-[10.31px] font-semibold">LIVE</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start relative gap-[4px]">
                  <img className="relative w-[96.6px] h-[96.6px] z-[0]" alt="" src="/group-352.svg" />
                  <div className="relative leading-[20px] z-[1]">Aarav</div>
                  <div className="my-0 mx-[!important] absolute top-[45px] left-[15.35px] rounded-[2.06px] bg-secondarycolor-secondarycolor shadow-[3.0927834510803223px_5.15463924407959px_10.82px_rgba(0,_0,_0,_0.1)] flex flex-row py-[0.5px] px-[2.577319622039795px] items-start justify-start z-[2] text-[6.19px] text-maincolor-maincolor2">
                    <div className="relative tracking-[0.52px] leading-[10.31px] font-semibold">LIVE</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[92.6px] h-[92.6px]" alt="" src="/group-353.svg" />
                  <div className="relative leading-[20px]">Leila</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[80.75px] h-[92.6px]" alt="" src="/group-354.svg" />
                  <div className="relative leading-[20px]">Mika</div>
                </div>
                <div
                  className="flex flex-col items-center justify-start gap-[4px] cursor-pointer"
                  onClick={onFrameContainer6Click}
                >
                  <img className="relative w-[50.6px] h-[92.6px]" alt="" src="/group-355.svg" />
                  <div className="relative leading-[20px]">Aisha</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-356.svg" />
                  <div className="relative leading-[20px]">Amir</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-357.svg" />
                  <div className="relative leading-[20px]">Isaac</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-358.svg" />
                  <div className="relative leading-[20px]">Liam</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-359.svg" />
                  <div className="relative leading-[20px]">Bob</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-360.svg" />
                  <div className="relative leading-[20px]">Sofia</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-361.svg" />
                  <div className="relative leading-[20px]">Chester</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-362.svg" />
                  <div className="relative leading-[20px]">Anna</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-363.svg" />
                  <div className="relative leading-[20px]">Vadim</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-364.svg" />
                  <div className="relative leading-[20px]">Bella</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-365.svg" />
                  <div className="relative leading-[20px]">Jon</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-366.svg" />
                  <div className="relative leading-[20px]">Phil</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-367.svg" />
                  <div className="relative leading-[20px]">Emmett</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-368.svg" />
                  <div className="relative leading-[20px]">Roshan</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-369.svg" />
                  <div className="relative leading-[20px]">Ivy</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-370.svg" />
                  <div className="relative leading-[20px]">Henry</div>
                </div>
                <div className="flex flex-col items-center justify-start gap-[4px]">
                  <img className="relative w-[50.6px] h-[50.6px]" alt="" src="/group-371.svg" />
                  <div className="relative leading-[20px]">Marcus</div>
                </div>
              </div>
              <img
                className="absolute top-[-2.25px] left-[21.75px] w-[55.5px] h-[55.5px]"
                alt=""
                src="/go-live-button.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[363px] h-[8119px] flex flex-col items-center justify-start gap-[30px] text-sm font-p1">
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-center relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image29@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">TastyTaco</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock25.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">30 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By EatSmart</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-372.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark22.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image30@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Summer Corn Twist</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock26.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">20 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By TasteBuddy</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-373.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark22.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image31@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Spaghetti Bolognese</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock27.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">45 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By EatExplore</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-374.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark22.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image32@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Flavorful Ramen</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock28.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">1 h</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">
                By SpiceStreetEats
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-375.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark23.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image33@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <div className="flex-1 relative leading-[20px]">
                  <b>E</b>
                  <span className="text-base">asy Homemade Pizza</span>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock29.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">30 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">
                By GourmetGuide
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-376.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark24.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image34@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Salmon Rice Bowl</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock26.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">45 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By FoodFinder</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-377.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark23.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image35@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">{`Fresh Tomato salad `}</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock26.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">10 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By FreshPlate</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-378.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark22.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image29@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">TastyTaco</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock25.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">30 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By EatSmart</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-379.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark22.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image30@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Summer Corn Twist</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock25.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">20 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By TasteBuddy</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-380.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark22.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image31@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Spaghetti Bolognese</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock25.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">45 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By EatExplore</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-381.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark22.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image32@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Flavorful Ramen</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock30.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">1 h</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">
                By SpiceStreetEats
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-382.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark22.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image33@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <div className="flex-1 relative leading-[20px]">
                  <b>E</b>
                  <span className="text-base">asy Homemade Pizza</span>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock30.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">30 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">
                By GourmetGuide
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-383.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark25.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image34@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Salmon Rice Bowl</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock30.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">45 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By FoodFinder</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-384.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark25.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image35@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">{`Fresh Tomato salad `}</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock30.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">10 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By FreshPlate</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-385.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark25.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image36@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">TastyTaco</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock30.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">30 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By EatSmart</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-386.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark25.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image37@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Summer Corn Twist</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock30.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">20 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By TasteBuddy</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-387.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark25.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image29@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">TastyTaco</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock30.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">30 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By EatSmart</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-388.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark25.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image30@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Summer Corn Twist</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock31.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">20 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By TasteBuddy</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-389.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark26.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image31@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Spaghetti Bolognese</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock31.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">45 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">By EatExplore</div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-390.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark26.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image32@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <b className="flex-1 relative leading-[20px]">Flavorful Ramen</b>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock31.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">1 h</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">
                By SpiceStreetEats
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-391.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark26.svg"
            />
          </div>
          <div className="rounded-xl shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[358px] h-[284px] overflow-hidden shrink-0 flex flex-col items-center justify-start relative">
            <img
              className="self-stretch flex-1 relative rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[0]"
              alt=""
              src="/image33@2x.png"
            />
            <div className="rounded-t-none rounded-b-xl bg-neutrals-neutral-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[358px] h-[75px] flex flex-col py-4 pr-4 pl-[75px] box-border items-center justify-center relative gap-[3px] z-[1]">
              <div className="w-[267px] flex flex-row items-start justify-start gap-[8px] z-[0]">
                <div className="flex-1 relative leading-[20px]">
                  <b>E</b>
                  <span className="text-base">asy Homemade Pizza</span>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px] text-center">
                  <img className="relative w-5 h-5 overflow-hidden shrink-0" alt="" src="/clock31.svg" />
                  <div className="relative leading-[20px] inline-block w-[43px] h-[15px] shrink-0">30 min</div>
                </div>
              </div>
              <div className="relative leading-[20px] text-dimgray-200 inline-block w-[267px] z-[1]">
                By GourmetGuide
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[17px] left-[16px] w-[43px] h-[43px] z-[2]"
                alt=""
                src="/group-392.svg"
              />
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[15px] right-[15px] w-[41px] h-[41px] z-[2]"
              alt=""
              src="/bookmark26.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-neutrals-neutral-white shadow-[6px_0px_21px_rgba(0,_0,_0,_0.1)] w-[390px] overflow-hidden flex flex-row py-7 pr-[13px] pl-[15px] box-border items-start justify-start text-13xl text-secondarycolor-secondarycolor font-chillax">
        <div className="relative w-[349px] h-[45px] z-[0]">
          <div className="absolute top-[0px] left-[0px] font-medium">Tastely</div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[12px] left-[301px] rounded-8xs-8 bg-gray-200 flex flex-col py-[9.60000228881836px] px-0 items-center justify-center z-[1]">
          <div className="self-stretch flex flex-row py-[9.60000228881836px] px-[19.20000457763672px] items-center justify-end">
            <img className="relative w-[38.4px] h-[38.4px] overflow-hidden shrink-0" alt="" src="/list1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
