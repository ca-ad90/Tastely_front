import { FunctionComponent } from "react";
import Section1LandingPage1 from "../components/Section1LandingPage1";
import Section4LandingPage from "../components/Section4LandingPage";

const LandingPage1: FunctionComponent = () => {
  return (
    <div className="relative bg-neutrals-neutral-white w-full h-[4578px] overflow-hidden text-left text-sm text-secondarycolor-secondarycolor font-p1">
      <div className="absolute top-[calc(50%_-_2018px)] left-[calc(50%_-_177px)] w-[355px] h-[376px] text-45xl font-chillax">
        <div className="absolute top-[0px] left-[39px] flex flex-col items-center justify-start gap-[15px]">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-medium">Tastely</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-center text-7xl text-neutrals-neutral-black font-h1">
            <div className="relative leading-[28px] font-semibold inline-block w-[277px] shrink-0">
              A growing library of mouthwatering recipes
            </div>
          </div>
        </div>
        <div className="absolute top-[202px] left-[26px] flex flex-row items-center justify-center text-center text-base text-neutrals-neutral-black font-p1">
          <div className="relative leading-[20px] inline-block w-[303px] shrink-0">
            From classic comfort food to exotic cuisines, we offer a wide range
            of culinary delights to tantalize your tastebuds.
          </div>
        </div>
      </div>
      <div className="absolute top-[599px] left-[61px] flex flex-col items-center justify-start gap-[12px] text-center text-neutrals-neutral-black">
        <div className="flex flex-row items-center justify-center">
          <div className="relative leading-[20px]">
            Join 27546 chefs, creators and foodies!
          </div>
        </div>
        <div className="shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start text-left text-base text-neutrals-neutral-white">
          <div className="rounded-11xl bg-secondarycolor-secondarycolor w-[270px] h-[50px] flex flex-row py-2.5 px-4 box-border items-center justify-center">
            <div className="relative tracking-[0.03em] leading-[18px] font-semibold">
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[390px] h-[293.66px]"
        alt=""
        src="/shape-1.svg"
      />
      <img
        className="absolute top-[-1014px] left-[-80.25px] w-[579.49px] h-[579.79px]"
        alt=""
        src="/shape-2.svg"
      />
      <img
        className="absolute top-[0px] left-[195px] w-[195px] h-[264.31px] object-cover"
        alt=""
        src="/vector--plate@2x.png"
      />
      <div className="absolute top-[710px] left-[57px] flex flex-col items-center justify-start gap-[12px] text-center text-neutrals-neutral-black">
        <div className="flex flex-row items-center justify-center">
          <div className="relative leading-[20px]">Already a foodie?</div>
        </div>
        <div className="shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start text-left text-base text-secondarycolor-secondarycolor">
          <div className="rounded-11xl bg-neutrals-neutral-white box-border w-[270px] h-[50px] flex flex-row py-2.5 px-4 items-center justify-center border-[1px] border-solid border-secondarycolor-secondarycolor">
            <div className="relative tracking-[0.03em] leading-[18px] font-semibold">
              Log In
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[862px] left-[-3px] flex flex-col items-center justify-start gap-[75px] text-3xl text-neutrals-neutral-black font-h1">
        <Section1LandingPage1
          image3="/image-31@2x.png"
          h3SeamlessSharing="Seamless sharing"
          easilyShareYourFavoriteRe="Easily share your favorite recipes with friends, family or the entire Tastely community."
        />
        <Section1LandingPage1
          image3="/image-41@2x.png"
          h3SeamlessSharing="Cook together, miles apart"
          easilyShareYourFavoriteRe="Step into the virtual kitchen and join your favourite creators as they prepare their meals. With realtime video sharing, follow along fellow foodies guiding you through each step. Or start a cookalong yourself and share your tips and tricks with the community! "
          propBackgroundColor="rgba(241, 110, 0, 0.08)"
          propWidth="270px"
          propAlignItems="flex-start"
          propJustifyContent="flex-start"
        />
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <div className="relative w-[270.75px] h-[262.5px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-sm-5 w-[270.75px] h-[262.5px] object-cover"
              alt=""
              src="/pexels-photo-by-fauxels1@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-sm-5 bg-darkorange-200 w-[270.75px] h-[262.5px]" />
          </div>
          <div className="w-[270px] flex flex-col items-start justify-start gap-[7px]">
            <div className="w-[270px] flex flex-row items-start justify-start">
              <b className="relative leading-[28px] inline-block w-[270px] shrink-0">
                Show off your masterpieces
              </b>
            </div>
            <div className="w-[270px] flex flex-col pt-[5px] px-0 pb-0 box-border items-center justify-center text-base font-p1">
              <div className="relative leading-[20px] inline-block w-[270px]">{`Capture mouthwatering pictures of your culinary creations. Recieve feedback, appreciation and encouragement from fellow food enthusiasts! `}</div>
            </div>
          </div>
        </div>
        <div className="relative bg-darkseagreen w-[390px] h-[665px] overflow-x-auto shrink-0 text-base font-p1">
          <div className="absolute top-[161px] left-[15px] w-[1799px] h-[460px]">
            <div className="absolute top-[calc(50%_-_230px)] left-[calc(50%_-_899.5px)] w-[1799px] overflow-hidden flex flex-row items-start justify-start gap-[40px]">
              <div className="flex flex-col items-start justify-start relative gap-[10px]">
                <div className="flex flex-col items-start justify-start z-[0]">
                  <div className="relative w-[235px] h-[295px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-lg w-[235px] h-[295px] object-cover"
                      alt=""
                      src="/pexels-photo-by-anna-tarazevich2@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkorange-200 w-[235px] h-[295px]" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start z-[1]">
                  <b className="relative leading-[20px]">
                    KitchenExplorerMalik
                  </b>
                </div>
                <div className="relative leading-[25px] inline-block w-[235px] z-[2]">{`Hey there, I'm Malik! Join me on a culinary adventure, let's explore flavors, create delicious recipes, and unlock the wonders of the culinary world together. `}</div>
                <img
                  className="absolute my-0 mx-[!important] top-[122px] left-[1px] w-[51.25px] h-[51.25px] z-[3]"
                  alt=""
                  src="/button-back-arrow--tablet4.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start relative gap-[10px]">
                <div className="relative w-[235px] h-[295px] z-[0]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-lg w-[235px] h-[295px] object-cover"
                    alt=""
                    src="/mark2@2x.png"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkorange-200 w-[235px] h-[295px]" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px] z-[1]">
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative leading-[20px]">SavoryScienceMark</b>
                  </div>
                  <div className="relative leading-[25px] inline-block w-[235px]">
                    Welcome to the savory side of cooking! I'm Mark, your flavor
                    and technique guide. Let's unravel culinary secrets and dive
                    into food science!
                  </div>
                </div>
                <img
                  className="absolute my-0 mx-[!important] top-[122px] left-[34px] w-[51.25px] h-[51.25px] z-[2]"
                  alt=""
                  src="/button-back-arrow--tablet5.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative w-[235px] h-[295px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-lg w-[235px] h-[295px] object-cover"
                    alt=""
                    src="/filippoon2@2x.png"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkorange-200 w-[235px] h-[295px]" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative leading-[20px]">FilipPoon</b>
                  </div>
                  <div className="relative leading-[25px] inline-block w-[235px]">
                    I´m Filip, a foodfluencer from Youtube and TikTok. Happy to
                    be a part of the Tastely Community, where future chefs are
                    born!
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative w-[235px] h-[295px]">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-lg w-[235px] h-[295px] object-cover"
                      alt=""
                      src="/pexels-photo-by-karolina-grabowska2@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkorange-200 w-[235px] h-[295px]" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative leading-[20px]">
                      WholesomeChefEmily
                    </b>
                  </div>
                  <div className="relative leading-[25px] inline-block w-[235px]">
                    Hey, foodies! I'm Emily, join me on a journey of mindful
                    eating and wholesome ingredients. Let's create a healthier
                    version of ourselves through food!
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative w-[235px] h-[295px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-lg w-[235px] h-[295px] object-cover"
                    alt=""
                    src="/pexels-photo-by-rdne-stock-project2@2x.png"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkorange-200 shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] w-[235px] h-[295px]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[20px]">GrillMasterCarlos</b>
                </div>
                <div className="relative leading-[25px] inline-block w-[235px]">
                  Fire up those grills with grill master Carlos! Join me as we
                  sizzle through lots of BBQ recipes, from juicy steaks to smoky
                  ribs.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative w-[235px] h-[295px]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-lg w-[235px] h-[295px] object-cover"
                    alt=""
                    src="/pexels-photo-by-polina-tankilevitch2@2x.png"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkorange-200 w-[235px] h-[295px]" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <b className="relative leading-[20px]">SweetToothMia</b>
                </div>
                <div className="relative leading-[25px] inline-block w-[235px]">
                  Calling all dessert lovers! I'm Mia, let's indulge in homemade
                  treats and spread the joy of sweets!
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[635px] left-[178px] w-[58px] h-3"
            alt=""
            src="/group-511.svg"
          />
          <div className="absolute top-[calc(50%_-_300.5px)] left-[calc(50%_-_164px)] flex flex-col items-center justify-start gap-[10px] text-3xl font-h1">
            <b className="relative leading-[28px]">Meet Our Creators</b>
            <div className="relative text-base leading-[20px] font-p1 text-center inline-block w-[327px]">
              Meet our community of food enthusiasts, from kitchen newbies to
              passionate home cooks from across the globe.
            </div>
          </div>
        </div>
        <Section4LandingPage
          looptroopAHappyRobotLooki="/looptroop-a-happy-robot-looking-at-the-screen-of-a-computer-wit-c744e00e0d7b4f0797989bd4dc4300c6-11@2x.png"
          propAlignItems="flex-start"
          propWidth="245.25px"
          propHeight="175.5px"
          propAlignItems1="flex-start"
          propTextAlign="left"
          propWidth1="270px"
        />
      </div>
      <div className="absolute top-[4043px] left-[60px] flex flex-col items-center justify-start gap-[20px] text-center text-13xl font-h1">
        <b className="relative leading-[32px]">{`Join Tastely today! `}</b>
        <div className="w-[270px] flex flex-col items-start justify-start text-left text-base text-neutrals-neutral-black font-p1">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[270px] flex flex-col pt-[7px] px-0 pb-0 box-border items-center justify-center">
              <div className="relative leading-[20px] inline-block w-[270px]">
                {" "}
                Sign up now and embark on a culinary adventure like no other.
                Discover new flavors, connect with inspiring individuals, and
                unleash your inner chef!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3745px] left-[59px] w-[266.51px] h-[260.25px]">
        <img
          className="absolute top-[0px] left-[64.02px] w-[202.49px] h-[260.25px] object-cover"
          alt=""
          src="/skrmbild-20230516-143346-21@2x.png"
        />
        <img
          className="absolute top-[35.49px] left-[0px] w-[114.12px] h-[224.76px] object-cover"
          alt=""
          src="/image-71@2x.png"
        />
      </div>
      <img
        className="absolute bottom-[0px] left-[0px] w-[390px] h-[344px]"
        alt=""
        src="/group-19.svg"
      />
      <div className="absolute top-[4240px] left-[56px] flex flex-col items-center justify-start text-base text-neutrals-neutral-white">
        <div className="shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start">
          <div className="rounded-11xl bg-secondarycolor-secondarycolor w-[270px] h-[50px] flex flex-row py-2.5 px-4 box-border items-center justify-center">
            <div className="relative tracking-[0.03em] leading-[18px] font-semibold">
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[4305px] left-[56px] flex flex-col items-center justify-start text-base">
        <div className="shadow-[6px_10px_21px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start">
          <div className="rounded-11xl bg-neutrals-neutral-white box-border w-[270px] h-[50px] flex flex-row py-2.5 px-4 items-center justify-center border-[1px] border-solid border-secondarycolor-secondarycolor">
            <div className="relative tracking-[0.03em] leading-[18px] font-semibold">
              Log In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
