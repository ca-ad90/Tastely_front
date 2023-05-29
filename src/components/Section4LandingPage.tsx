import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type Section4LandingPageType = {
  looptroopAHappyRobotLooki?: string;

  /** Style props */
  propAlignItems?: Property.AlignItems;
  propWidth?: Property.Width;
  propHeight?: Property.Height;
  propAlignItems1?: Property.AlignItems;
  propTextAlign?: Property.TextAlign;
  propWidth1?: Property.Width;
};

const Section4LandingPage: FunctionComponent<Section4LandingPageType> = ({
  looptroopAHappyRobotLooki,
  propAlignItems,
  propWidth,
  propHeight,
  propAlignItems1,
  propTextAlign,
  propWidth1,
}) => {
  const section4LandingPageStyle: CSS.Properties = useMemo(() => {
    return {
      alignItems: propAlignItems,
    };
  }, [propAlignItems]);

  const looptroopAHappyRobotLookinIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      alignItems: propAlignItems1,
    };
  }, [propAlignItems1]);

  const ourAISystemStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      width: propWidth1,
    };
  }, [propTextAlign, propWidth1]);

  return (
    <div
      className="h-[546px] flex flex-col items-center justify-start gap-[20px] text-left text-3xl text-neutrals-neutral-black font-h1"
      style={section4LandingPageStyle}
    >
      <img
        className="relative rounded-xl w-[327px] h-[234px] object-cover"
        alt=""
        src={looptroopAHappyRobotLooki}
        style={looptroopAHappyRobotLookinIconStyle}
      />
      <div className="flex flex-col items-center justify-start gap-[25px]">
        <div
          className="flex flex-col items-center justify-start gap-[7px]"
          style={frameDivStyle}
        >
          <div className="flex flex-row items-center justify-center">
            <b className="relative leading-[28px]">{`Privacy and security `}</b>
          </div>
          <div className="flex flex-col pt-[5px] px-0 pb-0 items-center justify-center text-center text-base font-p1">
            <div
              className="relative leading-[20px] inline-block w-[327px]"
              style={ourAISystemStyle}
            >
              Our AI system utilizes advanced image recognition algorithms to
              identify and flag inappropriate or offensive uploads, covering a
              wide range of content. It offers real-time monitoring, scanning
              contributions to promptly detect potential violations, ensuring
              users can browse and share recipes without encountering offensive
              content. We also value community input through our ticket system,
              allowing users to report objectionable content and contribute to
              further AI training, fostering a safe community for all.
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Section4LandingPage;
