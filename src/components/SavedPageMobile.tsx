import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SavedPageMobile.module.css";
const SavedPageMobile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onOcticonplus16Click = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/mainpage");
  }, [navigate]);

  return (
    <div className={styles.savedPageMobile}>
      <div className={styles.myProfilePicturedefault}>
        <img className={styles.profilePictureIcon} alt="" src="/profile-picture@2x.png" />
        <img className={styles.followAnimationIcon} alt="" src="/follow-animation.svg" />
      </div>
      <b className={styles.hugobergstrm}>HugoBergström</b>
      <div className={styles.searchInputField}>
        <div className={styles.iconText}>
          <img className={styles.magnifyingGlassIcon} alt="" src="/magnifying-glass-icon.svg" />
          <div className={styles.searchForA}>{`Search among your categories  `}</div>
        </div>
        <div className={styles.filterIcon}>
          <div className={styles.filterIconChild} />
          <img className={styles.filterIcon1} alt="" src="/filter-icon.svg" />
        </div>
      </div>
      <div className={styles.savedPageMobileChild} />
      <img className={styles.octiconplus16} alt="" src="/octiconplus16.svg" onClick={onOcticonplus16Click} />
      <div className={styles.cardSavePage}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-46@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>142 Recipes</div>
        <div className={styles.allRecipes}>All recipes</div>
      </div>
      <div className={styles.cardSavePage1}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-461@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>17 Recipes</div>
        <div className={styles.allRecipes}>Breakfast</div>
      </div>
      <div className={styles.cardSavePage2}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-462@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>34 Recipes</div>
        <div className={styles.allRecipes}>Pasta</div>
      </div>
      <div className={styles.cardSavePage3}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-463@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>26 Recipes</div>
        <div className={styles.allRecipes}>Tapas</div>
      </div>
      <div className={styles.cardSavePage4}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-464@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>12 Recipes</div>
        <div className={styles.allRecipes}>Asian food</div>
      </div>
      <div className={styles.cardSavePage5}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-465@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>24 Recipes</div>
        <div className={styles.allRecipes}>Drinks</div>
      </div>
      <div className={styles.cardSavePage6}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-466@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>22 Recipes</div>
        <div className={styles.allRecipes}>Mexican food</div>
      </div>
      <div className={styles.cardSavePage7}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-467@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>3 Recipes</div>
        <div className={styles.allRecipes}>Salad</div>
      </div>
      <div className={styles.cardSavePage8}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-468@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>18 Recipes</div>
        <div className={styles.allRecipes}>Pizza</div>
      </div>
      <div className={styles.cardSavePage9}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-469@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>8 Recipes</div>
        <div className={styles.allRecipes}>Meat </div>
      </div>
      <div className={styles.cardSavePage10}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-4610@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>56 Recipes</div>
        <div className={styles.allRecipes}>Dessert</div>
      </div>
      <div className={styles.cardSavePage11}>
        <img className={styles.cardSavePageChild} alt="" src="/rectangle-4611@2x.png" />
        <div className={styles.cardSavePageItem} />
        <div className={styles.recipes}>5 Recipes</div>
        <div className={styles.allRecipes}>Vegan food</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.saved}>{`Saved `}</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.created}>Created</div>
        </div>
      </div>
      <img className={styles.savedPageMobileItem} alt="" src="/group-19.svg" />
      <div className={styles.headerUploadRecipe}>
        <div className={styles.backArrowParent} onClick={onFrameContainerClick}>
          <img className={styles.backArrowIcon} alt="" src="/back-arrow.svg" />
          <b className={styles.h1My}>{`Saved Recipes `}</b>
        </div>
      </div>
    </div>
  );
};

export default SavedPageMobile;
