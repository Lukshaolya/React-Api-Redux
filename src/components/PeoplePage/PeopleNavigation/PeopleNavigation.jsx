import UIButton from "../../UI/UIButton/UIButton";
import styles from "./PeopleNavigation.module.css";
import { Link } from "react-router-dom";

const PeopleNavigation = ({ getResourse, prevPage, nextPage, counterPage }) => {
  const handleOnNext = () => getResourse(nextPage);
  const handleOnPrev = () => getResourse(prevPage);

  return (
    <>
      <h2>Chactrise</h2>
      <div className={styles.btn_container}>
        <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
          <UIButton
            text="Previous"
            onClick={handleOnPrev}
            disabled={!prevPage}
            theme="dark"
          />
        </Link>
        <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
          <UIButton
            text="Next"
            onClick={handleOnNext}
            disabled={!nextPage}
            theme="dark"
          />
        </Link>
      </div>
    </>
  );
};

export default PeopleNavigation;
