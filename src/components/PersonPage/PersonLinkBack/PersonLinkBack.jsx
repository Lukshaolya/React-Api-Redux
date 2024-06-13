import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
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
      <NavLink href="#" onClick={handleGoBack} className={styles.link}>
        <img src={icon} alt="icon" className={styles.icon} />
        <span>Go back</span>
      </NavLink>
    </>
  );
};

export default PersonLinkBack;
