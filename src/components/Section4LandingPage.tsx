import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Section4LandingPage.module.css";

type Section4LandingPageType = {
  looptroopAHappyRobotLooki?: string;

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
    <div className={styles.section4LandingPage} style={section4LandingPageStyle}>
      <img
        className={styles.looptroopAHappyRobotLookinIcon}
        alt=""
        src={looptroopAHappyRobotLooki}
        style={looptroopAHappyRobotLookinIconStyle}
      />
      <div className={styles.privacyAndSecuritySectionT}>
        <div className={styles.h3Parent} style={frameDivStyle}>
          <div className={styles.h3}>
            <b className={styles.h3Seamless}>{`Privacy and security `}</b>
          </div>
          <div className={styles.ourAiSystemUtilizesAdvanceWrapper}>
            <div className={styles.ourAiSystem} style={ourAISystemStyle}>
              Our AI system utilizes advanced image recognition algorithms to identify and flag inappropriate or
              offensive uploads, covering a wide range of content. It offers real-time monitoring, scanning
              contributions to promptly detect potential violations, ensuring users can browse and share recipes without
              encountering offensive content. We also value community input through our ticket system, allowing users to
              report objectionable content and contribute to further AI training, fostering a safe community for all.
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Section4LandingPage;
