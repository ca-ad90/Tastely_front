import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type Section1LandingPageType = {
  image3?: string;
  h3SeamlessSharing?: string;
  easilyShareYourFavoriteRe?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
  propTextAlign?: Property.TextAlign;
};

const Section1LandingPage: FunctionComponent<Section1LandingPageType> = ({
  image3,
  h3SeamlessSharing,
  easilyShareYourFavoriteRe,
  propBackgroundColor,
  propTextAlign,
}) => {
  const rectangleDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const easilyShareYourStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="flex flex-col items-center justify-start relative gap-[20px] text-left text-3xl text-neutrals-neutral-black font-h1">
      <div
        className="absolute my-0 mx-[!important] top-[0px] left-[0px] rounded-lg bg-darkorange-100 w-[361px] h-[350px] z-[0]"
        style={rectangleDivStyle}
      />
      <img
        className="relative rounded-lg w-[361px] h-[350px] object-cover z-[1]"
        alt=""
        src={image3}
      />
      <div className="flex flex-col items-center justify-start gap-[7px] z-[2]">
        <div className="flex flex-row items-center justify-center">
          <b className="relative leading-[28px]">{h3SeamlessSharing}</b>
        </div>
        <div className="flex flex-col pt-[5px] px-0 pb-0 items-center justify-center text-base font-p1">
          <div
            className="relative leading-[20px] inline-block w-[327px]"
            style={easilyShareYourStyle}
          >
            {easilyShareYourFavoriteRe}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1LandingPage;
