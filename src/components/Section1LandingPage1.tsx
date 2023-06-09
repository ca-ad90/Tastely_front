import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type Section1LandingPage1Type = {
  image3?: string;
  h3SeamlessSharing?: string;
  easilyShareYourFavoriteRe?: string;

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
    <div className="relative flex flex-col items-center justify-start gap-[20px] text-left font-h1 text-3xl text-neutrals-neutral-black">
      <div
        className="absolute left-[0.12px] top-[0px] z-[0] mx-[!important] my-0 h-[262px] w-[270.23px] rounded-[13.47px] bg-darkorange-100"
        style={rectangleDiv1Style}
      />
      <img className="relative z-[1] h-[262px] w-[270.23px] rounded-sm-5 object-cover" alt="" src={image3} />
      <div className="z-[2] flex flex-col items-start justify-start gap-[7px]" style={frameDiv4Style}>
        <div className="flex flex-row items-center justify-center" style={h3Style}>
          <b className="relative leading-[28px]">{h3SeamlessSharing}</b>
        </div>
        <div className="flex flex-col items-center justify-center px-0 pb-0 pt-[5px] font-p1 text-base">
          <div className="relative inline-block w-[270px] leading-[20px]">{easilyShareYourFavoriteRe}</div>
        </div>
      </div>
    </div>
  );
};

export default Section1LandingPage1;
