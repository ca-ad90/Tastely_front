import { FunctionComponent, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import Card1 from "../components/Card1";
import Card5 from "../components/Card5";
import MainPageTablet from "../components/MainPageTablet";
import styles from "./MainPage.module.css";

const MainPage: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/live-feed-mobile");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardClick = useCallback(() => {
    navigate("/recipe/1");
  }, [navigate]);

  return (
    <div className={styles.mainPage}>
      {windowWidth > 1024 ? (
        <>
          <MainPageTablet />
        </>
      ) : (
        <>
          <HamburgerMenu />
          <div className={styles.profileCarousel}>
            <div className={styles.frameParent}>
              <div className={styles.whosCookingRightNowWrapper}>
                <b className={styles.whosCookingRight}>{`Who’s cooking right now? `}</b>
              </div>
              <div className={styles.userCarousel}>
                <div className={styles.tabletMyProfilePictureParent}>
                  <div className={styles.tabletMyProfilePicture}>
                    <img className={styles.profilePictureIcon} alt="" src="/profile-picture@2x.png" />
                    <img className={styles.plusIcon} alt="" src="/plus-icon2.svg" />
                  </div>
                  <div className={styles.groupParent}>
                    <img className={styles.frameChild} alt="" src="/group-3.svg" />
                    <div className={styles.aya}>Aya</div>
                    <div className={styles.liveIcon}>
                      <div className={styles.live}>LIVE</div>
                    </div>
                  </div>
                  <div className={styles.groupContainer} onClick={onFrameContainer2Click}>
                    <img className={styles.frameChild} alt="" src="/group-4.svg" />
                    <div className={styles.aya}>Magnus</div>
                    <div className={styles.liveIcon1}>
                      <div className={styles.live}>LIVE</div>
                    </div>
                  </div>
                  <div className={styles.groupParent}>
                    <img className={styles.frameChild} alt="" src="/group-31.svg" />
                    <div className={styles.aya}>Aarav</div>
                    <div className={styles.liveIcon2}>
                      <div className={styles.live}>LIVE</div>
                    </div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.groupIcon} alt="" src="/group-32.svg" />
                    <div className={styles.leila}>Leila</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild1} alt="" src="/group-33.svg" />
                    <div className={styles.leila}>Mika</div>
                  </div>
                  <div className={styles.groupParent3} onClick={onFrameContainer6Click}>
                    <img className={styles.frameChild2} alt="" src="/group-34.svg" />
                    <div className={styles.leila}>Aisha</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-35.svg" />
                    <div className={styles.leila}>Amir</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-36.svg" />
                    <div className={styles.leila}>Isaac</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-37.svg" />
                    <div className={styles.leila}>Liam</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-38.svg" />
                    <div className={styles.leila}>Bob</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-39.svg" />
                    <div className={styles.leila}>Sofia</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-310.svg" />
                    <div className={styles.leila}>Chester</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-311.svg" />
                    <div className={styles.leila}>Anna</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-312.svg" />
                    <div className={styles.leila}>Vadim</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-313.svg" />
                    <div className={styles.leila}>Bella</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-314.svg" />
                    <div className={styles.leila}>Jon</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-315.svg" />
                    <div className={styles.leila}>Phil</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-316.svg" />
                    <div className={styles.leila}>Emmett</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-317.svg" />
                    <div className={styles.leila}>Roshan</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-318.svg" />
                    <div className={styles.leila}>Ivy</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-319.svg" />
                    <div className={styles.leila}>Henry</div>
                  </div>
                  <div className={styles.groupParent1}>
                    <img className={styles.frameChild3} alt="" src="/group-320.svg" />
                    <div className={styles.leila}>Marcus</div>
                  </div>
                </div>
                <img className={styles.goLiveButton} alt="" src="/go-live-button.svg" />
              </div>
            </div>
            <div className={styles.cardFlow}>
              <Card1
                image="/image29@2x.png"
                nameOfTheDish="TastyTaco"
                clock="/clock25.svg"
                time="30 min"
                by="By EatSmart"
                group3="/group-321.svg"
                bookmark="/bookmark22.svg"
                onClick={onCardClick}
              />
              <Card1
                image="/image30@2x.png"
                nameOfTheDish="Summer Corn Twist"
                clock="/clock26.svg"
                time="20 min"
                by="By TasteBuddy"
                group3="/group-322.svg"
                bookmark="/bookmark22.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image31@2x.png"
                nameOfTheDish="Spaghetti Bolognese"
                clock="/clock27.svg"
                time="45 min"
                by="By EatExplore"
                group3="/group-323.svg"
                bookmark="/bookmark22.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image32@2x.png"
                nameOfTheDish="Flavorful Ramen"
                clock="/clock28.svg"
                time="1 h"
                by="By SpiceStreetEats"
                group3="/group-324.svg"
                bookmark="/bookmark23.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card5 image="/image33@2x.png" clock="/clock29.svg" group3="/group-325.svg" bookmark="/bookmark24.svg" />
              <Card1
                image="/image34@2x.png"
                nameOfTheDish="Salmon Rice Bowl"
                clock="/clock26.svg"
                time="45 min"
                by="By FoodFinder"
                group3="/group-326.svg"
                bookmark="/bookmark23.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image35@2x.png"
                nameOfTheDish="Fresh Tomato salad "
                clock="/clock26.svg"
                time="10 min"
                by="By FreshPlate"
                group3="/group-327.svg"
                bookmark="/bookmark22.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image29@2x.png"
                nameOfTheDish="TastyTaco"
                clock="/clock25.svg"
                time="30 min"
                by="By EatSmart"
                group3="/group-328.svg"
                bookmark="/bookmark22.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image30@2x.png"
                nameOfTheDish="Summer Corn Twist"
                clock="/clock25.svg"
                time="20 min"
                by="By TasteBuddy"
                group3="/group-329.svg"
                bookmark="/bookmark22.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image31@2x.png"
                nameOfTheDish="Spaghetti Bolognese"
                clock="/clock25.svg"
                time="45 min"
                by="By EatExplore"
                group3="/group-330.svg"
                bookmark="/bookmark22.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image32@2x.png"
                nameOfTheDish="Flavorful Ramen"
                clock="/clock30.svg"
                time="1 h"
                by="By SpiceStreetEats"
                group3="/group-331.svg"
                bookmark="/bookmark22.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card5 image="/image33@2x.png" clock="/clock30.svg" group3="/group-332.svg" bookmark="/bookmark25.svg" />
              <Card1
                image="/image34@2x.png"
                nameOfTheDish="Salmon Rice Bowl"
                clock="/clock30.svg"
                time="45 min"
                by="By FoodFinder"
                group3="/group-333.svg"
                bookmark="/bookmark25.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image35@2x.png"
                nameOfTheDish="Fresh Tomato salad "
                clock="/clock30.svg"
                time="10 min"
                by="By FreshPlate"
                group3="/group-334.svg"
                bookmark="/bookmark25.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image36@2x.png"
                nameOfTheDish="TastyTaco"
                clock="/clock30.svg"
                time="30 min"
                by="By EatSmart"
                group3="/group-335.svg"
                bookmark="/bookmark25.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image37@2x.png"
                nameOfTheDish="Summer Corn Twist"
                clock="/clock30.svg"
                time="20 min"
                by="By TasteBuddy"
                group3="/group-336.svg"
                bookmark="/bookmark25.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image29@2x.png"
                nameOfTheDish="TastyTaco"
                clock="/clock30.svg"
                time="30 min"
                by="By EatSmart"
                group3="/group-337.svg"
                bookmark="/bookmark25.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image30@2x.png"
                nameOfTheDish="Summer Corn Twist"
                clock="/clock31.svg"
                time="20 min"
                by="By TasteBuddy"
                group3="/group-338.svg"
                bookmark="/bookmark26.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image31@2x.png"
                nameOfTheDish="Spaghetti Bolognese"
                clock="/clock31.svg"
                time="45 min"
                by="By EatExplore"
                group3="/group-339.svg"
                bookmark="/bookmark26.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card1
                image="/image32@2x.png"
                nameOfTheDish="Flavorful Ramen"
                clock="/clock31.svg"
                time="1 h"
                by="By SpiceStreetEats"
                group3="/group-340.svg"
                bookmark="/bookmark26.svg"
                propJustifyContent="flex-start"
                propDisplay="unset"
              />
              <Card5 image="/image33@2x.png" clock="/clock31.svg" group3="/group-341.svg" bookmark="/bookmark26.svg" />
              <img className={styles.gifIcon} alt="" src="/gif@2x.png" />
            </div>
          </div>
          <div className={styles.phoneHeadermenu}>
            <div className={styles.brandNameWrapper}></div>

            <div className={styles.menuheading}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
