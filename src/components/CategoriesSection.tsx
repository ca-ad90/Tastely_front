import { FunctionComponent } from "react";
import styles from "./CategoriesSection.module.css";
const CategoriesSection: FunctionComponent = () => {
  return (
    <div className={styles.foodCategoryShowAllParent}>
      <div className={styles.foodCategoryShowAll}>
        <div className={styles.showAll}>Show all</div>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="/group-148.svg" />
          <div className={styles.french}>French</div>
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.frameChild} alt="" src="/group-149.svg" />
          <div className={styles.french}>Dessert</div>
        </div>
        <div className={styles.frameDiv}>
          <img className={styles.frameChild} alt="" src="/group-1410.svg" />
          <div className={styles.french}>Brunch</div>
        </div>
        <div className={styles.groupParent1}>
          <img className={styles.frameChild} alt="" src="/group-1411.svg" />
          <div className={styles.french}>BBQ</div>
        </div>
      </div>
      <div className={styles.categoriesWrapper}>
        <b className={styles.categories}>Categories</b>
      </div>
    </div>
  );
};

export default CategoriesSection;
