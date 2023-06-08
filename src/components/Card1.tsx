import { FunctionComponent, useMemo, useCallback } from "react";
import CSS, { Property } from "csstype";
import { useNavigate } from "react-router-dom";
import styles from "./Card1.module.css";

type Card1Type = {
  image?: string;
  nameOfTheDish?: string;
  clock?: string;
  time?: string;
  by?: string;
  group3?: string;
  bookmark?: string;
  propJustifyContent?: Property.JustifyContent;
  propDisplay?: Property.Display;
  onClick?: () => void;
};

const Card1: FunctionComponent<Card1Type> = ({
  image,
  nameOfTheDish,
  clock,
  time,
  by,
  group3,
  bookmark,
  propJustifyContent,
  propDisplay,
  onClick, 
}) => {
  const card1Style: CSS.Properties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  const bookmarkIconStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const navigate = useNavigate();

  const onCard1ContainerClick = useCallback(() => {
    navigate("/recipe/1");
  }, [navigate]);

  const onGroupIconClick = useCallback(() => {
  }, []);

  return (
    <div className={styles.card1} onClick={onCard1ContainerClick} style={card1Style}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.cardDetails}>
        <div className={styles.heading}>
          <b className={styles.nameOfThe}>{nameOfTheDish}</b>
          <div className={styles.time}>
            <img className={styles.clockIcon} alt="" src={clock} />
            <div className={styles.time1}>{time}</div>
          </div>
        </div>
        <div className={styles.by}>{by}</div>
        <img className={styles.cardDetailsChild} alt="" src={group3} onClick={onGroupIconClick} />
      </div>
      <img className={styles.bookmarkIcon} alt="" src={bookmark} style={bookmarkIconStyle} />
    </div>
  );
};

export default Card1;
