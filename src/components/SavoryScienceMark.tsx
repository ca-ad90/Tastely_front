import { FunctionComponent } from "react";
import styles from "./SavoryScienceMark.module.css";

type SavoryScienceMarkType = {
  mark?: string;
  savoryScienceMark?: string;
  welcomeToTheSavorySideOfC?: string;
};

const SavoryScienceMark: FunctionComponent<SavoryScienceMarkType> = ({
  mark,
  savoryScienceMark,
  welcomeToTheSavorySideOfC,
}) => {
  return (
    <div className={styles.savorysciencemark}>
      <div className={styles.markParent}>
        <img className={styles.markIcon} alt="" src={mark} />
        <div className={styles.groupChild} />
      </div>
      <div className={styles.savorysciencemark1}>
        <div className={styles.savorysciencemarkWrapper}>
          <b className={styles.savorysciencemark2}>{savoryScienceMark}</b>
        </div>
        <div className={styles.welcomeToThe}>{welcomeToTheSavorySideOfC}</div>
      </div>
    </div>
  );
};

export default SavoryScienceMark;
