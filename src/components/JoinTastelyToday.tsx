import { FunctionComponent } from "react";
import styles from "./JoinTastelyToday.module.css";
const JoinTastelyToday: FunctionComponent = () => {
  return (
    <div className={styles.joinTastelyToday}>
      <div className={styles.skrmbild202305161433462Parent}>
        <img className={styles.skrmbild202305161433462} alt="" src="/skrmbild-20230516-143346-2@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
      </div>
      <div className={styles.section5LandingPage}>
        <div className={styles.joinTastelyTodayParent}>
          <b className={styles.joinTastelyToday1}>{`Join Tastely today! `}</b>
          <div className={styles.signUpNowAndEmbarkOnACuWrapper}>
            <div className={styles.signUpNow}>
              {" "}
              Sign up now and embark on a culinary adventure like no other. Discover new flavors, connect with inspiring
              individuals, and unleash your inner chef!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTastelyToday;
