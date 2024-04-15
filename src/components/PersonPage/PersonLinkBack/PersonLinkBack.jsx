import { useNavigate } from "react-router";
import icon from "../../../styles/img/light-saber.png";
import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <a href="#" onClick={handleGoBack} className={styles.link}>
        <img src={icon} alt="icon" className={styles.icon} />
        <span>Go baack</span>
      </a>
    </>
  );
};

export default PersonLinkBack;
