import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./GrillmasterCarlos.module.css";

type GrillmasterCarlosType = {
  pexelsPhotoByRDNEStockPro?: string;
  grillMasterCarlos?: string;
  fireUpThoseGrillsWithGril?: string;
  propBoxShadow?: Property.BoxShadow;
};

const GrillmasterCarlos: FunctionComponent<GrillmasterCarlosType> = ({
  pexelsPhotoByRDNEStockPro,
  grillMasterCarlos,
  fireUpThoseGrillsWithGril,
  propBoxShadow,
}) => {
  const rectangleDiv2Style: CSS.Properties = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  return (
    <div className={styles.grillmastercarlos}>
      <div className={styles.pexelsPhotoByRdneStockProParent}>
        <img className={styles.pexelsPhotoByRdneStockPro} alt="" src={pexelsPhotoByRDNEStockPro} />
        <div className={styles.groupChild} style={rectangleDiv2Style} />
      </div>
      <div className={styles.grillmastercarlosWrapper}>
        <b className={styles.grillmastercarlos1}>{grillMasterCarlos}</b>
      </div>
      <div className={styles.fireUpThose}>{fireUpThoseGrillsWithGril}</div>
    </div>
  );
};

export default GrillmasterCarlos;
