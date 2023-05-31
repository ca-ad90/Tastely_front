import { FunctionComponent } from "react";
import SavoryScienceMark from "./SavoryScienceMark";
import GrillmasterCarlos from "./GrillmasterCarlos";
import styles from "./BackgroundMeetOurCreators.module.css";
const BackgroundMeetOurCreators: FunctionComponent = () => {
  return (
    <div className={styles.backgroundMeetOurCreators}>
      <div className={styles.meetourcreatorsCardsParent}>
        <div className={styles.meetourcreatorsCards}>
          <div className={styles.kitchenexplorermalik}>
            <div className={styles.kitchenexplorermalikInner}>
              <div className={styles.pexelsPhotoByAnnaTarazevicParent}>
                <img
                  className={styles.pexelsPhotoByAnnaTarazevic}
                  alt=""
                  src="/pexels-photo-by-anna-tarazevich2@2x.png"
                />
                <div className={styles.groupChild} />
              </div>
            </div>
            <div className={styles.kitchenexplorermalikInner}>
              <b className={styles.kitchenexplorermalik1}>KitchenExplorerMalik</b>
            </div>
            <div
              className={styles.heyThereIm}
            >{`Hey there, I'm Malik! Join me on a culinary adventure, let's explore flavors, create delicious recipes, and unlock the wonders of the culinary world together. `}</div>
          </div>
          <SavoryScienceMark
            mark="/mark2@2x.png"
            savoryScienceMark="SavoryScienceMark"
            welcomeToTheSavorySideOfC="Welcome to the savory side of cooking! I'm Mark, your flavor and technique guide. Let's unravel culinary secrets and dive into food science!"
          />
          <SavoryScienceMark
            mark="/filippoon2@2x.png"
            savoryScienceMark="FilipPoon"
            welcomeToTheSavorySideOfC="I´m Filip, a foodfluencer from Youtube and TikTok. Happy to be a part of the Tastely Community, where future chefs are born!"
          />
          <div className={styles.kitchenexplorermalikInner}>
            <div className={styles.wholesomechefemily1}>
              <div className={styles.pexelsPhotoByKarolinaGraboParent}>
                <img
                  className={styles.pexelsPhotoByAnnaTarazevic}
                  alt=""
                  src="/pexels-photo-by-karolina-grabowska2@2x.png"
                />
                <div className={styles.groupChild} />
              </div>
              <div className={styles.wholesomechefemilyWrapper}>
                <b className={styles.kitchenexplorermalik1}>WholesomeChefEmily</b>
              </div>
              <div className={styles.heyFoodiesIm}>
                Hey, foodies! I'm Emily, join me on a journey of mindful eating and wholesome ingredients. Let's create
                a healthier version of ourselves through food!
              </div>
              <img className={styles.buttonBackArrowTablet} alt="" src="/button-back-arrow--tablet1.svg" />
            </div>
          </div>
          <GrillmasterCarlos
            pexelsPhotoByRDNEStockPro="/pexels-photo-by-rdne-stock-project2@2x.png"
            grillMasterCarlos="GrillMasterCarlos"
            fireUpThoseGrillsWithGril="Fire up those grills with grill master Carlos! Join me as we sizzle through lots of BBQ recipes, from juicy steaks to smoky ribs."
          />
          <GrillmasterCarlos
            pexelsPhotoByRDNEStockPro="/pexels-photo-by-polina-tankilevitch2@2x.png"
            grillMasterCarlos="SweetToothMia"
            fireUpThoseGrillsWithGril="Calling all dessert lovers! I'm Mia, let's indulge in homemade treats and spread the joy of sweets!"
            propBoxShadow="unset"
          />
        </div>
        <div className={styles.h3MeetOurCreators}>
          <b className={styles.meetOurCreators}>Meet Our Creators</b>
          <div className={styles.meetOurCommunity}>
            Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the globe.
          </div>
        </div>
      </div>
      <img className={styles.buttonBackArrowTablet1} alt="" src="/button-back-arrow--tablet6.svg" />
      <img className={styles.backgroundMeetOurCreatorsChild} alt="" src="/group-512.svg" />
    </div>
  );
};

export default BackgroundMeetOurCreators;
