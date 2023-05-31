import { FunctionComponent } from "react";
import styles from "./FrameComponent13.module.css";
const FrameComponent13: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.popularRecipesWrapper}>
        <b className={styles.popularRecipes}>Popular Recipes</b>
      </div>
      <div className={styles.popularRecipesCarousel}>
        <div className={styles.frameGroup}>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-126@2x.png" />
            </div>
            <div className={styles.smashedBurger}>Smashed burger</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-127@2x.png" />
            </div>
            <div className={styles.smashedBurger}>Moscow mule</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-128@2x.png" />
            </div>
            <div className={styles.smashedBurger}>American pancakes</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-129@2x.png" />
            </div>
            <div className={styles.smashedBurger}>Tomato salad</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-1210@2x.png" />
            </div>
            <div className={styles.smashedBurger}>Karaage chicken</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-1211@2x.png" />
            </div>
            <div className={styles.smashedBurger}>Fusilli rotini</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
