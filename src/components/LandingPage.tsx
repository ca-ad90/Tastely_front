import React, { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section1LandingPage from "../components/Section1LandingPage";
import Section4LandingPage from "../components/Section4LandingPage";
import JoinTastelyToday from "../components/JoinTastelyToday";
import ImageCarousel from "../components/ImageCarousel";
import styles from "./LandingPage.module.css";
import LandingPageTablet from "./LandingPageTablet";
import tabletStyles from "./LandingPageTablet.module.css";

const LandingPage: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.landingPage}>
      {windowWidth > 1024 ? (
        <LandingPageTablet />
      ) : (
        <>
          <div className={styles.registerButton}>
            <div className={styles.button}>
              <Link to="/signup" className={styles.button}>
                <div className={styles.button1}>Sign Up</div>
              </Link>
            </div>
          </div>
          <div className={styles.h1H2H3P2}>
            <div className={styles.h1H2}>
              <div className={styles.h1}>
                <div className={styles.h1BrandName}>
                  <div className={styles.tastely}>Tastely</div>
                </div>
              </div>
              <div className={styles.h2}>
                <div className={styles.h21}>A growing library of mouthwatering recipes</div>
              </div>
            </div>
            <div className={styles.h3}>
              <div className={styles.h31}>
                From classic comfort food to exotic cuisines, we offer a wide range of culinary delights to tantalize
                your tastebuds.
              </div>
            </div>
          </div>
          <div className={styles.p2Button}>
            <div className={styles.h1BrandName}>
              <div className={styles.p3Already}>Join 27546 chefs, creators and foodies!</div>
            </div>
            <div className={styles.registerButton1}>
              <div className={styles.button}>
                <Link to="/signup" className={styles.button}>
                  <div className={styles.button1}>Sign Up</div>
                </Link>
              </div>
            </div>
          </div>
          <img className={styles.shape1Icon} alt="" src="/shape-1.svg" />
          <img className={styles.shape2Icon} alt="" src="/shape-2.svg" />
          <img className={styles.vectorPlate} alt="" src="/vector--plate@2x.png" />
          <div className={styles.p3SignInButton}>
            <div className={styles.h1BrandName}>
              <div className={styles.p3Already}>Already a foodie?</div>
            </div>
            <div className={styles.signUpButton}>
              <div className={styles.button4}>
                <Link to="/login" className={styles.button1}>
                  <div className={styles.button4}>Log In</div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.p3SignInButton1}>
            <div className={styles.signUpButton1}>
              <div className={styles.button4}>
                <Link to="/login" className={styles.button4}>
                  <div className={styles.button4}>Log In</div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.landingPageSections}>
            <div className={styles.importedComponentWrapper}>
              <Section1LandingPage
                image3="/image-3@2x.png"
                h3SeamlessSharing="Seamless sharing"
                easilyShareYourFavoriteRe="Easily share your favorite recipes with friends, family or the entire Tastely community."
                propBackgroundColor="rgba(241, 110, 0, 0.05)"
                propTextAlign="left"
              />
            </div>
            <div className={styles.importedComponentWrapper}>
              <Section1LandingPage
                image3="/image-4@2x.png"
                h3SeamlessSharing="Cook together, miles apart"
                easilyShareYourFavoriteRe="Step into the virtual kitchen and join your favourite creators as they prepare their meals. With realtime video sharing, follow along fellow foodies guiding you through each step. Or start a cookalong yourself and share your tips and tricks with the community! "
                propBackgroundColor="rgba(241, 110, 0, 0.08)"
                propTextAlign="center"
              />
            </div>
            <div className={styles.section3LandingPage}>
              <div className={styles.pexelsPhotoByFauxelsParent}>
                <img className={styles.pexelsPhotoByFauxels} alt="" src="/pexels-photo-by-fauxels@2x.png" />
                <div className={styles.groupChild} />
              </div>
              <div className={styles.h3Parent}>
                <div className={styles.h1BrandName}>
                  <b className={styles.h3Seamless}>Show off your masterpieces</b>
                </div>
                <div className={styles.captureMouthwateringPicturesWrapper}>
                  <div className={styles.captureMouthwateringPictures}>
                    Capture mouthwatering pictures of your culinary creations. Receive feedback, appreciation, and
                    encouragement from fellow food enthusiasts!
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.importedComponentWrapper}>
              <ImageCarousel />
            </div>
            <div className={styles.importedComponentWrapper}>
              <Section4LandingPage looptroopAHappyRobotLooki="/looptroop-a-happy-robot-looking-at-the-screen-of-a-computer-wit-c744e00e0d7b4f0797989bd4dc4300c6-1@2x.png" />
            </div>
            <div className={styles.importedComponentWrapper}>
              <JoinTastelyToday />
            </div>
          </div>
          <img className={styles.landingPageChild} alt="" src="/group-19.svg" />
          <div className={styles.p2Button1}>
            <div className={styles.signUpButton1}>
              <div className={styles.button}>
                <Link to="/signup" className={styles.button}>
                  <div className={styles.button1}>Sign Up</div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.p3SignInButton2}>
            <div className={styles.signUpButton1}>
              <div className={styles.button4}>
                <Link to="/login" className={styles.button1}>
                  <div className={styles.button4}>Log In</div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
