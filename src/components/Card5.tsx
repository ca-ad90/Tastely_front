import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card5.module.css";

type Card5Type = {
  image?: string;
  clock?: string;
  group3?: string;
  bookmark?: string;
};

const Card5: FunctionComponent<Card5Type> = ({ image, clock, group3, bookmark }) => {
  const navigate = useNavigate();

  const onCard5ContainerClick = useCallback(() => {
    navigate("/recipe/:id");
  }, [navigate]);

  return (
    <div className={styles.card5} onClick={onCard5ContainerClick}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.cardDetails}>
        <div className={styles.heading}>
          <div className={styles.nameOfTheContainer}>
            <b>E</b>
            <span className={styles.asyHomemadePizza}>asy Homemade Pizza</span>
          </div>
          <div className={styles.time}>
            <img className={styles.clockIcon} alt="" src={clock} />
            <div className={styles.time1}>30 min</div>
          </div>
        </div>
        <div className={styles.by}>By GourmetGuide</div>
        <img className={styles.cardDetailsChild} alt="" src={group3} />
      </div>
      <img className={styles.bookmarkIcon} alt="" src={bookmark} />
    </div>
  );
};

export default Card5;
