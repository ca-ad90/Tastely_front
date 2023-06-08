import React, { FunctionComponent } from "react";
import styles from "./FrameComponent11.module.css";

const FrameComponent11: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.discoverDeliciousRecipesWrapper}>
        <b className={styles.discoverDeliciousRecipes}>Discover Delicious Recipes!</b>
      </div>
      <div className={styles.searchInputField}>
        <div className={styles.iconText}>
          <img className={styles.magnifyingGlassIcon} alt="" src="/magnifying-glass-icon3.svg" />
          <div className={styles.searchForA}>Search for a recipe</div>
        </div>
        <div className={styles.filterIcon}>
          <div className={styles.filterIconChild} />
          <img className={styles.filterIcon1} alt="" src="/filter-icon2.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
