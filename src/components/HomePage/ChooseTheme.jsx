import cn from "classnames";
import {
  useTheme,
  THEME_CUSTOM,
  THEME_DARK,
  THEME_LIGHT,
} from "../../context/ThemeProvider";
import lightThemeImg from "../../styles/img/light-side.jpg";
import darkThemeImg from "../../styles/img/dark-side.jpg";
import customThemeImg from "../../styles/img/custom-theme.jpg";

import styles from "./ChooseTheme.module.css";

const ChooseThemeItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} alt={text} src={img} />
    </div>
  );
};

const ChooseTheme = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light",
      img: lightThemeImg,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark",
      img: darkThemeImg,
      classes: styles.item__dark,
    },
    {
      theme: THEME_CUSTOM,
      text: "Custom",
      img: customThemeImg,
      classes: styles.item__neitral,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        {elements.map((element, index) => (
          <ChooseThemeItem
            key={index}
            theme={element.theme}
            text={element.text}
            img={element.img}
            classes={element.classes}
          />
        ))}
      </div>
    </>
  );
};

export default ChooseTheme;
