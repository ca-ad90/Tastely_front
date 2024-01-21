import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section1LandingPage1 from "../components/Section1LandingPage1";
import Section4LandingPage from "../components/Section4LandingPage";
import styles from "./LandingPage1.module.css";
const LandingPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onP2Button1Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onP3SIgnInButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonBackArrowTabletClick = useCallback(() => {
    navigate("/main-page-tablet");
  }, [navigate]);

  const onButtonBackArrowTablet1Click = useCallback(() => {
    navigate("/main-page-tablet");
  }, [navigate]);

  return (
    <div className={styles.landingPageMobile}>
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
            From classic comfort food to exotic cuisines, we offer a wide range of culinary delights to tantalize your
            tastebuds.
          </div>
        </div>
      </div>
      <div className={styles.p2Button}>
        <div className={styles.h1BrandName}>
          <div className={styles.p3Already}>Join 27546 chefs, creators and foodies!</div>
        </div>
        <div className={styles.registerButton}>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.registerButton} onClick={onButtonContainerClick}>
              <Link to="/signup" className={styles.button}>
                <div className={styles.button1}>Sign Up</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.shape1Icon} alt="" src="/shape-1.svg" />
      <img className={styles.shape2Icon} alt="" src="/shape-21.svg" />
      <img className={styles.vectorPlate} alt="" src="/vector--plate@2x.png" />
      <div className={styles.p3SignInButton}>
        <div className={styles.h1BrandName}>
          <div className={styles.p3Already}>Already a foodie?</div>
        </div>
        <div className={styles.signUpButton}>
          <div className={styles.button2}>
            <div className={styles.signUpButton} onClick={onP3SIgnInButton1Click}>
              <Link to="/login" className={styles.button2}>
                <div className={styles.button1}>Log In</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.landingPageSections}>
        <Section1LandingPage1
          image3="/image-31@2x.png"
          h3SeamlessSharing="Seamless sharing"
          easilyShareYourFavoriteRe="Easily share your favorite recipes with friends, family or the entire Tastely community."
        />
        <Section1LandingPage1
          image3="/image-41@2x.png"
          h3SeamlessSharing="Cook together, miles apart"
          easilyShareYourFavoriteRe="Enter the virtual kitchen, join creators cooking their favorite meals. Watch realtime videos, follow along fellow foodies guiding you through each stepe. Cook along and share tips with the community!"
          propBackgroundColor="rgba(241, 110, 0, 0.08)"
          propWidth="270px"
          propAlignItems="flex-start"
          propJustifyContent="flex-start"
        />
        <div className={styles.section3LandingPage}>
          <div className={styles.pexelsPhotoByFauxelsParent}>
            <img className={styles.pexelsPhotoByFauxels} alt="" src="/pexels-photo-by-fauxels1@2x.png" />
            <div className={styles.groupChild} />
          </div>
          <div className={styles.h3Parent}>
            <div className={styles.h32}>
              <b className={styles.h3Seamless}>Show off your masterpieces</b>
            </div>
            <div className={styles.captureMouthwateringPicturesWrapper}>
              <div
                className={styles.captureMouthwateringPictures}
              >{`Capture mouthwatering pictures of your culinary creations. Recieve feedback, appreciation and encouragement from fellow food enthusiasts! `}</div>
            </div>
          </div>
        </div>
        <div className={styles.phoneBackgroundMeetOur}>
          <img className={styles.dotsMeetOurCreators} alt="" src="/dots--meet-our-creators.svg" />
          <div className={styles.h3MeetOurCreators}>
            <b className={styles.meetOurCreators}>Meet Our Creators</b>
            <div className={styles.meetOurCommunity}>
              Meet our community of food enthusiasts, from kitchen newbies to passionate home cooks from across the
              globe.
            </div>
          </div>
        </div>
        <Section4LandingPage
          looptroopAHappyRobotLooki="/looptroop-a-happy-robot-looking-at-the-screen-of-a-computer-wit-c744e00e0d7b4f0797989bd4dc4300c6-11@2x.png"
          propAlignItems="flex-start"
          propWidth="270px"
          propHeight="199.73px"
          propAlignItems1="flex-start"
          propTextAlign="left"
          propWidth1="270px"
        />
      </div>
      <div className={styles.joinTastelyToday}>
        <b className={styles.joinTastelyToday1}>{`Join Tastely today! `}</b>
        <div className={styles.section5LandingPage}>
          <div className={styles.section5LandingPageInner}>
            <div className={styles.signUpNowAndEmbarkOnACuWrapper}>
              <div className={styles.captureMouthwateringPictures}>
                Sign up now and embark on a culinary adventure like no other. Discover new flavors, connect with
                inspiring individuals, and unleash your inner chef!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skrmbild202305161433462Parent}>
        <img className={styles.skrmbild202305161433462} alt="" src="/skrmbild-20230516-143346-21@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-71@2x.png" />
      </div>
      <img className={styles.landingPageMobileChild} alt="" src="/group-191.svg" />
      <div className={styles.p2Button1} onClick={onP2Button1Click}>
        <div className={styles.registerButton1}>
          <div className={styles.button4}>
            <div className={styles.registerButton} onClick={onButtonContainerClick}>
              <Link to="/signup" className={styles.button}>
                <div className={styles.button1}>Sign Up</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.p3SignInButton1} onClick={onP3SIgnInButton1Click}>
        <div className={styles.registerButton1}>
          <div className={styles.button2}>
            <div className={styles.signUpButton} onClick={onP3SIgnInButton1Click}>
              <Link to="/login" className={styles.button2}>
                <div className={styles.button1}>Log In</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.meetourcreatorsCards}>
        <div className={styles.kitchenexplorermalik}>
          <div className={styles.kitchenexplorermalikInner}>
            <div className={styles.pexelsPhotoByAnnaTarazevicParent}>
              <img
                className={styles.pexelsPhotoByAnnaTarazevic}
                alt=""
                src="/pexels-photo-by-anna-tarazevich1@2x.png"
              />
              <div className={styles.groupItem} />
            </div>
          </div>
          <div className={styles.kitchenexplorermalikWrapper}>
            <b className={styles.p3Already}>KitchenExplorerMalik</b>
          </div>
          <div
            className={styles.heyThereIm}
          >{`Hey there, I'm Malik! Join me on a culinary adventure, let's explore flavors, create delicious recipes, and unlock the wonders of the culinary world together. `}</div>
          <img
            className={styles.buttonBackArrowTablet}
            alt=""
            src="/button-back-arrow--tablet2.svg"
            onClick={onButtonBackArrowTabletClick}
          />
        </div>
        <div className={styles.savorysciencemark}>
          <div className={styles.markParent}>
            <img className={styles.markIcon} alt="" src="/mark1@2x.png" />
            <div className={styles.groupItem} />
          </div>
          <div className={styles.savorysciencemark1}>
            <div className={styles.section5LandingPageInner}>
              <b className={styles.p3Already}>SavoryScienceMark</b>
            </div>
            <div className={styles.welcomeToThe}>
              Welcome to the savory side of cooking! I'm Mark, your flavor and technique guide. Let's unravel culinary
              secrets and dive into food science!
            </div>
          </div>
        </div>
        <div className={styles.filippoon}>
          <div className={styles.pexelsPhotoByAnnaTarazevicParent}>
            <img className={styles.pexelsPhotoByAnnaTarazevic} alt="" src="/filippoon1@2x.png" />
            <div className={styles.groupItem} />
          </div>
          <div className={styles.savorysciencemark1}>
            <div className={styles.section5LandingPageInner}>
              <b className={styles.p3Already}>FilipPoon</b>
            </div>
            <div className={styles.welcomeToThe}>
              I´m Filip, a foodfluencer from Youtube and TikTok. Happy to be a part of the Tastely Community, where
              future chefs are born!
            </div>
          </div>
        </div>
        <div className={styles.wholesomechefemily}>
          <div className={styles.savorysciencemark1}>
            <div className={styles.markParent}>
              <img className={styles.markIcon} alt="" src="/pexels-photo-by-karolina-grabowska1@2x.png" />
              <div className={styles.groupItem} />
            </div>
            <div className={styles.section5LandingPageInner}>
              <b className={styles.p3Already}>WholesomeChefEmily</b>
            </div>
            <div className={styles.welcomeToThe}>
              Hey, foodies! I'm Emily, join me on a journey of mindful eating and wholesome ingredients. Let's create a
              healthier version of ourselves through food!
            </div>
          </div>
        </div>
        <div className={styles.grillmastercarlos}>
          <div className={styles.pexelsPhotoByAnnaTarazevicParent}>
            <img
              className={styles.pexelsPhotoByAnnaTarazevic}
              alt=""
              src="/pexels-photo-by-rdne-stock-project1@2x.png"
            />
            <div className={styles.groupChild2} />
          </div>
          <div className={styles.section5LandingPageInner}>
            <b className={styles.p3Already}>GrillMasterCarlos</b>
          </div>
          <div className={styles.welcomeToThe}>
            Fire up those grills with grill master Carlos! Join me as we sizzle through lots of BBQ recipes, from juicy
            steaks to smoky ribs.
          </div>
        </div>
        <div className={styles.sweettoothmia}>
          <div className={styles.pexelsPhotoByAnnaTarazevicParent}>
            <img
              className={styles.pexelsPhotoByAnnaTarazevic}
              alt=""
              src="/pexels-photo-by-polina-tankilevitch1@2x.png"
            />
            <div className={styles.groupItem} />
          </div>
          <div className={styles.section5LandingPageInner}>
            <b className={styles.p3Already}>SweetToothMia</b>
          </div>
          <div className={styles.welcomeToThe}>
            Calling all dessert lovers! I'm Mia, let's indulge in homemade treats and spread the joy of sweets!
          </div>
        </div>
        <img
          className={styles.buttonBackArrowTablet1}
          alt=""
          src="/button-back-arrow--tablet3.svg"
          onClick={onButtonBackArrowTablet1Click}
        />
      </div>
    </div>
  );
};

export default LandingPage1;
