import { useLocation } from "react-router";
import img from "../../styles/img/404img.png";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <img className={styles.notfound__img} src={img} alt="notfound" />
      <p className={styles.pathname}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
