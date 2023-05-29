import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type Section1LandingPage1Type = {
  image3?: string;
  h3SeamlessSharing?: string;
  easilyShareYourFavoriteRe?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
  propWidth?: Property.Width;
  propAlignItems?: Property.AlignItems;
  propJustifyContent?: Property.JustifyContent;
};

const Section1LandingPage1: FunctionComponent<Section1LandingPage1Type> = ({
  image3,
  h3SeamlessSharing,
  easilyShareYourFavoriteRe,
  propBackgroundColor,
  propWidth,
  propAlignItems,
  propJustifyContent,
}) => {
  const rectangleDiv1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv4Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const h3Style: CSS.Properties = useMemo(() => {
    return {
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
    };
  }, [propAlignItems, propJustifyContent]);

  return (
    <div className="flex flex-col items-center justify-start relative gap-[20px] text-left text-3xl text-neutrals-neutral-black font-h1">
      <div
        className="absolute my-0 mx-[!important] top-[0px] left-[0.12px] rounded-[13.47px] bg-darkorange-100 w-[270.23px] h-[262px] z-[0]"
        style={rectangleDiv1Style}
      />
      <img
        className="relative rounded-sm-5 w-[270.23px] h-[262px] object-cover z-[1]"
        alt=""
        src={image3}
      />
      <div
        className="flex flex-col items-start justify-start gap-[7px] z-[2]"
        style={frameDiv4Style}
      >
        <div
          className="flex flex-row items-center justify-center"
          style={h3Style}
        >
          <b className="relative leading-[28px]">{h3SeamlessSharing}</b>
        </div>
        <div className="flex flex-col pt-[5px] px-0 pb-0 items-center justify-center text-base font-p1">
          <div className="relative leading-[20px] inline-block w-[270px]">
            {easilyShareYourFavoriteRe}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1LandingPage1;
