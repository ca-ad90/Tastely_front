import { FunctionComponent } from "react";

const JoinTastelyToday: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[20px] text-center text-13xl text-secondarycolor-secondarycolor font-h1">
      <div className="relative w-[355.35px] h-[347px]">
        <img
          className="absolute top-[0px] left-[85.36px] w-[269.99px] h-[347px] object-cover"
          alt=""
          src="/skrmbild-20230516-143346-2@2x.png"
        />
        <img
          className="absolute top-[47.32px] left-[0px] w-[152.16px] h-[299.68px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-[7px]">
          <b className="relative leading-[32px]">{`Join Tastely today! `}</b>
          <div className="flex flex-col pt-[7px] px-0 pb-0 items-center justify-center text-base text-neutrals-neutral-black font-p1">
            <div className="relative leading-[20px] inline-block w-[327px]">
              {" "}
              Sign up now and embark on a culinary adventure like no other.
              Discover new flavors, connect with inspiring individuals, and
              unleash your inner chef!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTastelyToday;
