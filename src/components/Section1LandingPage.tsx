import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Section1LandingPage.module.css";

type Section1LandingPageType = {
  image3?: string;
  h3SeamlessSharing?: string;
  easilyShareYourFavoriteRe?: string;
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
    <div className={styles.section1LandingPage + " " + styles.importedComponentWrapper}>
      <div className={styles.section1LandingPageChild} style={rectangleDivStyle} />
      <img className={styles.image3Icon} alt="" src={image3} />
      <div className={styles.h3Parent}>
        <div className={styles.h3}>
          <b className={styles.h3Seamless}>{h3SeamlessSharing}</b>
        </div>
        <div className={styles.easilyShareYourFavoriteRecWrapper}>
          <div className={styles.easilyShareYour} style={easilyShareYourStyle}>
            {easilyShareYourFavoriteRe}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1LandingPage;
