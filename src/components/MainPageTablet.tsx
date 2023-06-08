import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainPageTablet.module.css";
// import HamburgerMenu from "./HamburgerMenu";
const MainPageTablet: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDiscoverContainerClick = useCallback(() => {
    navigate("/discover");
  }, [navigate]);

  const onMyProfileContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCardClick = useCallback(() => {
    navigate("/recipe/1");
  }, [navigate]);

  return (
    <div className={styles.mainPageTablet}>
      <div className={styles.tabletHeadermenu}>
        {/*}   <HamburgerMenu /> */}
        <div className={styles.uploadParent}>
          <div className={styles.upload}>
            <div className={styles.h2}>Upload</div>
            <img className={styles.uploadIcon} alt="" src="/upload-icon.svg" />
          </div>
          <div className={styles.discover} onClick={onDiscoverContainerClick}>
            <div className={styles.h2}>Discover</div>
          </div>
          <div className={styles.saved}>
            <div className={styles.h2}>Saved</div>
          </div>
          <div className={styles.myProfile} onClick={onMyProfileContainerClick}>
            <div className={styles.h23}>My Profile</div>
          </div>
          <div className={styles.logOut}>
            <div className={styles.h2}>Log out</div>
          </div>
        </div>
        <div className={styles.brandNameWrapper}>
          <div className={styles.brandName}>Tastely</div>
        </div>
      </div>
      <div className={styles.profileCarousel}>
        <div className={styles.frameParent}>
          <div className={styles.whosCookingRightNowWrapper}>
            <b className={styles.whosCookingRight}>{`Who’s cooking right now? `}</b>
          </div>
          <div className={styles.userCarousel}>
            <div className={styles.tabletMyProfilePictureParent}>
              <div className={styles.tabletMyProfilePicture}>
                <img className={styles.profilePictureIcon} alt="" src="/profile-picture@2x.png" />
                <img className={styles.plusIcon} alt="" src="/plus-icon.svg" />
              </div>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="/group-351.svg" />
                <div className={styles.aya}>Aya</div>
                <div className={styles.liveIcon}>
                  <div className={styles.live}>LIVE</div>
                </div>
              </div>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="/group-41.svg" />
                <div className={styles.aya}>Magnus</div>
                <div className={styles.liveIcon1}>
                  <div className={styles.live}>LIVE</div>
                </div>
              </div>
              <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="/group-3124.svg" />
                <div className={styles.aya}>Aarav</div>
                <div className={styles.liveIcon2}>
                  <div className={styles.live}>LIVE</div>
                </div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-3210.svg" />
                <div className={styles.leila}>Leila</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-3310.svg" />
                <div className={styles.leila}>Mika</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-3410.svg" />
                <div className={styles.leila}>Aisha</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-352.svg" />
                <div className={styles.leila}>Amir</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-361.svg" />
                <div className={styles.leila}>Isaac</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-371.svg" />
                <div className={styles.leila}>Liam</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-381.svg" />
                <div className={styles.leila}>Bob</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-391.svg" />
                <div className={styles.leila}>Sofia</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-31010.svg" />
                <div className={styles.leila}>Chester</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-31110.svg" />
                <div className={styles.leila}>Anna</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.groupIcon} alt="" src="/group-3125.svg" />
                <div className={styles.leila}>Vadim</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.frameChild11} alt="" src="/group-3131.svg" />
                <div className={styles.leila}>Bella</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.frameChild12} alt="" src="/group-3141.svg" />
                <div className={styles.leila}>Jon</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.frameChild13} alt="" src="/group-3151.svg" />
                <div className={styles.leila}>Phil</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.frameChild13} alt="" src="/group-3161.svg" />
                <div className={styles.leila}>Emmett</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.frameChild13} alt="" src="/group-3171.svg" />
                <div className={styles.leila}>Roshan</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.frameChild13} alt="" src="/group-3181.svg" />
                <div className={styles.leila}>Ivy</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.frameChild13} alt="" src="/group-3191.svg" />
                <div className={styles.leila}>Henry</div>
              </div>
              <div className={styles.groupParent1}>
                <img className={styles.frameChild13} alt="" src="/group-3201.svg" />
                <div className={styles.leila}>Marcus</div>
              </div>
            </div>
            <img className={styles.goLiveButton} alt="" src="/go-live-button.svg" />
          </div>
        </div>
      </div>
      <div className={styles.cardParent} onClick={onCardClick}>
        <div className={styles.card} onClick={onCardClick}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" onClick={onCardClick}/>
          <div className={styles.cardDetails}>
            <div className={styles.heading}>
              <b className={styles.nameOfThe}>Salmon Poké Bowl</b>
              <div className={styles.time}>
                <img className={styles.clockIcon} alt="" src="/clock3.svg" />
                <div className={styles.time1}>30 min</div>
              </div>
            </div>
            <div className={styles.by}>By Dr.ChefPhil</div>
            <img className={styles.cardDetailsChild} alt="" src="/group-3211.svg" />
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark.svg" />
        </div>
        <div className={styles.card1} onClick={onCardClick}>
          <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
          <div className={styles.cardDetails}>
            <div className={styles.heading}>
              <b className={styles.nameOfThe}>Chicken Burger</b>
              <div className={styles.time}>
                <img className={styles.clockIcon} alt="" src="/clock4.svg" />
                <div className={styles.time1}>45 min</div>
              </div>
            </div>
            <div className={styles.by}>By Jonathandrim</div>
            <img className={styles.cardDetailsChild} alt="" src="/group-3221.svg" />
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark1.svg" />
        </div>
        <div className={styles.card}>
          <img className={styles.imageIcon} alt="" src="/image2@2x.png" />
          <div className={styles.cardDetails}>
            <div className={styles.heading}>
              <b className={styles.nameOfThe}>Crunchy Tacos</b>
              <div className={styles.time}>
                <img className={styles.clockIcon} alt="" src="/clock5.svg" />
                <div className={styles.time1}>50 min</div>
              </div>
            </div>
            <div className={styles.by}>By Sahrakjellin</div>
            <img className={styles.cardDetailsChild} alt="" src="/group-3231.svg" />
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark2.svg" />
        </div>
        <div className={styles.card}>
          <img className={styles.imageIcon} alt="" src="/image3@2x.png" />
          <div className={styles.cardDetails}>
            <div className={styles.heading}>
              <b className={styles.nameOfThe}>Vattenmelon och äggröra</b>
              <div className={styles.time}>
                <img className={styles.clockIcon} alt="" src="/clock6.svg" />
                <div className={styles.time1}>15 min</div>
              </div>
            </div>
            <div className={styles.by}>By Gunnarsöderhage</div>
            <img className={styles.cardDetailsChild} alt="" src="/group-3241.svg" />
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark3.svg" />
        </div>
      </div>
      <div className={styles.cardGroup}>
        <div className={styles.card} onClick={onCardClick}>
          <img className={styles.imageIcon} alt="" src="/image4@2x.png" />
          <div className={styles.cardDetails}>
            <div className={styles.heading}>
              <b className={styles.nameOfThe}>American Pancakes </b>
              <div className={styles.time} >
                <img className={styles.clockIcon} alt="" src="/clock3.svg" />
                <div className={styles.time1}>30 min</div>
              </div>
            </div>
            <div className={styles.by}>By Hugobergström</div>
            <img className={styles.cardDetailsChild} alt="" src="/group-3251.svg" />
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark.svg" />
        </div>
        <div className={styles.card} onClick={onCardClick}>
          <img className={styles.imageIcon} alt="" src="/image5@2x.png" />
          <div className={styles.cardDetails}>
            <div className={styles.heading}>
              <b className={styles.nameOfThe}>Dragon Maki</b>
              <div className={styles.time}>
                <img className={styles.clockIcon} alt="" src="/clock4.svg" />
                <div className={styles.time1}>55 min</div>
              </div>
            </div>
            <div className={styles.by}>By Pietroyari</div>
            <img className={styles.cardDetailsChild} alt="" src="/group-3261.svg" />
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark1.svg" />
        </div>
        <div className={styles.card} onClick={onCardClick}>
          <img className={styles.imageIcon} alt="" src="/image6@2x.png" />
          <div className={styles.cardDetails}>
            <div className={styles.heading}>
              <b className={styles.nameOfThe}>The Best Waffles</b>
              <div className={styles.time}>
                <img className={styles.clockIcon} alt="" src="/clock5.svg" />
                <div className={styles.time1}>30 min</div>
              </div>
            </div>
            <div className={styles.by}>By SamTheChef</div>
            <img className={styles.cardDetailsChild} alt="" src="/group-3271.svg" />
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark2.svg" />
        </div>
        <div className={styles.card} onClick={onCardClick}>
          <img className={styles.imageIcon} alt="" src="/image7@2x.png" />
          <div className={styles.cardDetails}>
            <div className={styles.heading}>
              <b className={styles.nameOfThe}>Filled Puffs</b>
              <div className={styles.time}>
                <img className={styles.clockIcon} alt="" src="/clock6.svg" />
                <div className={styles.time1}>2 hrs</div>
              </div>
            </div>
            <div className={styles.by}>By Harold_55</div>
            <img className={styles.cardDetailsChild} alt="" src="/group-3281.svg" />
          </div>
          <img className={styles.bookmarkIcon} alt="" src="/bookmark3.svg" />
        </div>
      </div>
    </div>
  );
};

export default MainPageTablet;
