import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent13.module.css";
import { useNavigate } from "react-router-dom";

const FrameComponent13: FunctionComponent = () => {
  const navigate = useNavigate(); 


  const onCardClick = useCallback(() => {
    navigate("/recipe/1");
  }, [navigate]);
  
  return (
    <div className={styles.frameParent}>
      <div className={styles.popularRecipesWrapper}>
        <b className={styles.popularRecipes}>Popular Recipes</b>
      </div>
      <div className={styles.popularRecipesCarousel}>
        <div className={styles.frameGroup} >
          <div className={styles.groupParent} onClick={onCardClick}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-126@2x.png" onClick={onCardClick}/>
            </div>
            <div className={styles.smashedBurger} onClick={onCardClick}>Smashed burger</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-127@2x.png" onClick={onCardClick}/>
            </div>
            <div className={styles.smashedBurger}>Moscow mule</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-128@2x.png" onClick={onCardClick}/>
            </div>
            <div className={styles.smashedBurger}>American pancakes</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-129@2x.png" onClick={onCardClick}/>
            </div>
            <div className={styles.smashedBurger}>Tomato salad</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-1210@2x.png" onClick={onCardClick}/>
            </div>
            <div className={styles.smashedBurger}>Karaage chicken</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.frameWrapper}>
              <img className={styles.groupChild} alt="" src="/frame-1211@2x.png" onClick={onCardClick}/>
            </div>
            <div className={styles.smashedBurger}>Fusilli rotini</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
