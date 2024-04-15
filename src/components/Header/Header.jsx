import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "../Favorite/Favorite";
import {
  useTheme,
  THEME_CUSTOM,
  THEME_DARK,
  THEME_LIGHT,
} from "../../context/ThemeProvider";

import custom_icon from "../../styles/img/icon-1.png";
import light_icon from "../../styles/img/icon-2.png";
import dark_icon from "../../styles/img/icon-3.png";

import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(custom_icon);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(light_icon);
        break;
      case THEME_DARK:
        setIcon(dark_icon);
        break;
      case THEME_CUSTOM:
        setIcon(custom_icon);
        break;

      default:
        break;
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img alt="icon" className={styles.logo} src={icon} />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/404">Not Found</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
