import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions";
import iconFavorite from "../../../styles/img/favorite.png";
import iconFAvoriteColored from "../../../styles/img/favorite-colored.png";

import styles from "./PersonImage.module.css";

const PersonImage = ({
  personImage,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {

  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personImage,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.person__img}>
        <img src={personImage} alt={personName} />
        <img
          onClick={dispatchFavoritePeople}
          src={personFavorite ? iconFAvoriteColored : iconFavorite}
          className={styles.icon_favorite}
          alt="icon"
        />
      </div>
    </>
  );
};

export default PersonImage;
