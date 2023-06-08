import { FunctionComponent, useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import FrameComponent11 from "../components/FrameComponent11";
import CategoriesSection from "../components/CategoriesSection";
import FrameComponent13 from "../components/FrameComponent13";
import Card1 from "../components/Card1";
import Card5 from "../components/Card5";
import styles from "./Discover.module.css";

const Discover: FunctionComponent = () => {
  return (
    <div className={styles.discover}>
      <HamburgerMenu />
      <div className={styles.frameParent}>
        <FrameComponent11 />
        <CategoriesSection />
        <FrameComponent13 />
        <div className={styles.frameGroup}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.recommendedForYouWrapper}>
                <b className={styles.recommendedForYou}>Recommended for you</b>
              </div>
              <div className={styles.frameGroup}>
                <Card1
                  image="/image50@2x.png"
                  nameOfTheDish="Salmon Rice Bowl"
                  clock="/clock38.svg"
                  time="45 min"
                  by="By FoodFinder"
                  group3="/group-3105.svg"
                  bookmark="/bookmark31.svg"
                  propJustifyContent="flex-start"
                  propDisplay="unset"
                />
                <Card1
                  image="/image51@2x.png"
                  nameOfTheDish="TastyTaco"
                  clock="/clock39.svg"
                  time="30 min"
                  by="By EatSmart"
                  group3="/group-3106.svg"
                  bookmark="/bookmark32.svg"
                  propJustifyContent="flex-start"
                  propDisplay="unset"
                />
                <Card1
                  image="/image52@2x.png"
                  nameOfTheDish="Summer Corn Twist"
                  clock="/clock40.svg"
                  time="20 min"
                  by="By TasteBuddy"
                  group3="/group-3107.svg"
                  bookmark="/bookmark33.svg"
                  propJustifyContent="flex-start"
                  propDisplay="unset"
                />
                <Card1
                  image="/image53@2x.png"
                  nameOfTheDish="Spaghetti Bolognese"
                  clock="/clock41.svg"
                  time="45 min"
                  by="By EatExplore"
                  group3="/group-3108.svg"
                  bookmark="/bookmark33.svg"
                  propJustifyContent="flex-start"
                  propDisplay="unset"
                />
                <Card1
                  image="/image54@2x.png"
                  nameOfTheDish="Flavorful Ramen"
                  clock="/clock38.svg"
                  time="1 h"
                  by="By SpiceStreetEats"
                  group3="/group-3109.svg"
                  bookmark="/bookmark32.svg"
                  propJustifyContent="flex-start"
                  propDisplay="unset"
                />
                <Card5
                  image="/image55@2x.png"
                  clock="/clock38.svg"
                  group3="/group-3110.svg"
                  bookmark="/bookmark31.svg"
                />
                <Card1
                  image="/image56@2x.png"
                  nameOfTheDish="Fresh Tomato salad "
                  clock="/clock42.svg"
                  time="10 min"
                  by="By FreshPlate"
                  group3="/group-3111.svg"
                  bookmark="/bookmark31.svg"
                  propJustifyContent="flex-start"
                  propDisplay="unset"
                />
              </div>
            </div>
            <Card1
              image="/image57@2x.png"
              nameOfTheDish="Salmon Rice Bowl"
              clock="/clock42.svg"
              time="45 min"
              by="By FoodFinder"
              group3="/group-3112.svg"
              bookmark="/bookmark31.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
            <Card1
              image="/image58@2x.png"
              nameOfTheDish="TastyTaco"
              clock="/clock42.svg"
              time="30 min"
              by="By EatSmart"
              group3="/group-3113.svg"
              bookmark="/bookmark31.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
            <Card1
              image="/image59@2x.png"
              nameOfTheDish="Summer Corn Twist"
              clock="/clock43.svg"
              time="20 min"
              by="By TasteBuddy"
              group3="/group-3114.svg"
              bookmark="/bookmark34.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
            <Card1
              image="/image60@2x.png"
              nameOfTheDish="Spaghetti Bolognese"
              clock="/clock43.svg"
              time="45 min"
              by="By EatExplore"
              group3="/group-3115.svg"
              bookmark="/bookmark34.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
            <Card1
              image="/image61@2x.png"
              nameOfTheDish="Flavorful Ramen"
              clock="/clock43.svg"
              time="1 h"
              by="By SpiceStreetEats"
              group3="/group-3116.svg"
              bookmark="/bookmark34.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
            <Card5 image="/image62@2x.png" clock="/clock43.svg" group3="/group-3117.svg" bookmark="/bookmark34.svg" />
            <Card1
              image="/image63@2x.png"
              nameOfTheDish="Fresh Tomato salad "
              clock="/clock43.svg"
              time="10 min"
              by="By FreshPlate"
              group3="/group-3118.svg"
              bookmark="/bookmark34.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
            <Card1
              image="/image60@2x.png"
              nameOfTheDish="Spaghetti Bolognese"
              clock="/clock43.svg"
              time="45 min"
              by="By EatExplore"
              group3="/group-3119.svg"
              bookmark="/bookmark34.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
            <Card1
              image="/image61@2x.png"
              nameOfTheDish="Flavorful Ramen"
              clock="/clock44.svg"
              time="1 h"
              by="By SpiceStreetEats"
              group3="/group-3120.svg"
              bookmark="/bookmark34.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
            <Card5 image="/image62@2x.png" clock="/clock44.svg" group3="/group-3121.svg" bookmark="/bookmark35.svg" />
            <Card1
              image="/image59@2x.png"
              nameOfTheDish="Summer Corn Twist"
              clock="/clock44.svg"
              time="20 min"
              by="By TasteBuddy"
              group3="/group-3122.svg"
              bookmark="/bookmark35.svg"
              propJustifyContent="flex-start"
              propDisplay="unset"
            />
          </div>
          <Card1
            image="/image58@2x.png"
            nameOfTheDish="TastyTaco"
            clock="/clock44.svg"
            time="30 min"
            by="By EatSmart"
            group3="/group-3123.svg"
            bookmark="/bookmark35.svg"
            propJustifyContent="flex-start"
            propDisplay="unset"
          />
        </div>
      </div>
      <div className={styles.phoneHeadermenuWrapper}>
        <div className={styles.phoneHeadermenu}>
          <div className={styles.brandNameWrapper}></div>

          <div className={styles.menuheading}></div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
