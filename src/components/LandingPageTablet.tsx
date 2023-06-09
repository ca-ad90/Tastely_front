import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import BackgroundMeetOurCreators from "../components/BackgroundMeetOurCreators";
import styles from "./LandingPageTablet.module.css";

const LandingPageTablet: FunctionComponent = () => {
  return (
    <div className={styles.landingPageTablet}>
      {/* <img className={styles.shape2Icon} alt="" src="/shape-211.svg" /> */}
      <img className={styles.landingPageTabletChild} alt="" src="/group-201.svg" />
      <img className={styles.vectorPlate} alt="" src="/Vector - Squiggly 2.png" />
      <div className={styles.h1H2}>
        <div className={styles.h1}>
          <div className={styles.h1BrandName}>
            <div className={styles.tastely}>Tastely</div>
          </div>
        </div>
      </div>
      <div className={styles.h2}>
        <b className={styles.h21}>A growing library of mouthwatering recipes</b>
      </div>
      <div className={styles.h3}>
        From classic comfort food to exotic cuisines, we offer a wide range of culinary delights to tantalize your
        tastebuds.
      </div>
      <div className={styles.registerButton}>
        <div className={styles.button}>
          <Link to="/signup" className={styles.button}>
            <div className={styles.button1}>Sign Up</div>
          </Link>
        </div>
      </div>
      <div className={styles.p2}>Join 27546 chefs, creators and foodies!</div>
      <div className={styles.h3Parent}>
        <div className={styles.h1BrandName}>
          <b className={styles.h3Seamless}>Seamless sharing</b>
        </div>
        <div className={styles.easilyShareYourFavoriteRecWrapper}>
          <div className={styles.easilyShareYour}>
            Easily share your favorite recipes with friends, family or the entire Tastely community.
          </div>
        </div>
      </div>
      <div className={styles.h3Group}>
        <div className={styles.h32}>
          <b className={styles.h3Seamless}>Cook together, miles apart</b>
        </div>
        <div className={styles.easilyShareYourFavoriteRecWrapper}>
          <div
            className={styles.easilyShareYour}
          >{`Step into the virtual kitchen and join your favourite creators as they prepare their meals. With realtime video sharing, follow along fellow foodies guiding you through each step. Or start a cookalong yourself and share your tips and tricks with the community! `}</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.pexelsPhotoByFauxelsParent}>
          <img className={styles.pexelsPhotoByFauxels} alt="" src="/pexels-photo-by-fauxels2@2x.png" />
          <div className={styles.groupChild} />
        </div>
        <div className={styles.pexelsPhotoByFauxelsParent}>
          <img className={styles.image4Icon} alt="" src="/image-42@2x.png" />
          <div className={styles.groupChild} />
        </div>
      </div>
      <img className={styles.skrmbild202305161433461} alt="" src="/skrmbild-20230516-143346-1@2x.png" />
      <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
      <img className={styles.image7Icon} alt="" src="/image-6@2x.png" />
      <div className={styles.groupContainer}>
        <div className={styles.pexelsPhotoByFauxelsParent}>
          <img className={styles.pexelsPhotoByFauxels} alt="" src="/pexels-photo-by-antonius-ferret@2x.png" />
          <div className={styles.groupChild} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.h3Container}>
            <div className={styles.h1BrandName}>
              <b className={styles.h3Seamless}>Show off your masterpieces</b>
            </div>
            <div className={styles.easilyShareYourFavoriteRecWrapper}>
              <div
                className={styles.easilyShareYour}
              >{`Capture mouthwatering pictures of your culinary creations. Recieve feedback, appreciation and encouragement from fellow food enthusiasts! `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.p3SignInButton}>
        <div className={styles.signUpButton}>
          <div className={styles.button2}>
            <Link to="/login" className={styles.button1}>
              <div className={styles.button4}>Log In</div>
            </Link>
          </div>
        </div>
      </div>
      <BackgroundMeetOurCreators />
      <div className={styles.looptroopAHappyRobotLookinParent}>
        <img
          className={styles.looptroopAHappyRobotLookinIcon}
          alt=""
          src="/looptroop-a-happy-robot-looking-at-the-screen-of-a-computer-wit-c744e00e0d7b4f0797989bd4dc4300c6-12@2x.png"
        />
        <div className={styles.frameDiv}>
          <div className={styles.h1BrandName}>
            <b className={styles.h3Seamless}>{`Privacy and security `}</b>
          </div>
          <div className={styles.easilyShareYourFavoriteRecWrapper}>
            <div className={styles.ourAiSystem}>
              Our AI system utilizes advanced image recognition algorithms to identify and flag inappropriate or
              offensive uploads, covering a wide range of content. It offers real-time monitoring, scanning
              contributions to promptly detect potential violations, ensuring users can browse and share recipes without
              encountering offensive content. We also value community input through our ticket system, allowing users to
              report objectionable content and contribute to further AI training, fostering a safe community for all.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.registerButton1}>
        <div className={styles.button}>
          <Link to="/signup" className={styles.button}>
            <div className={styles.button1}>Sign Up</div>
          </Link>
        </div>
      </div>
      <div className={styles.p3SignInButton1}>
        <div className={styles.signUpButton}>
          <div className={styles.button2}>
            <Link to="/login" className={styles.button1}>
              <div className={styles.button4}>Log In</div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.joinTastelyTodayParent}>
        <b className={styles.joinTastelyToday}>{`Join Tastely today! `}</b>
        <div className={styles.signUpNowAndEmbarkOnACuWrapper}>
          <div className={styles.signUpNow}>
            Sign up now and embark on a culinary adventure like no other. Discover new flavors, connect with inspiring
            individuals, and unleash your inner chef!
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageTablet;
