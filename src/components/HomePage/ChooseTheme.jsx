import styles from "./ChooseTheme.module.css";
import { useTheme, THEME_CUSTOM, THEME_DARK, THEME_LIGHT } from '../../context/ThemeProvider';
import lightThemeImg from '../../styles/img/ligth-theme.jpg';
import darkThemeImg from "../../styles/img/dark-side.jpg";
import customThemeImg from "../../styles/img/custom-theme.png";


const ChooseThemeItem = ({ theme, text, img }) => {
  const isTheme = useTheme();

  return (
    <div className={styles.item} onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} alt={text} src={img} />
    </div>
  );
  
}

const ChooseTheme = () => {

  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light',
      img: lightThemeImg
    }, {
      theme: THEME_DARK,
          text:"Dark",
          img: darkThemeImg
    },
    {
      theme: THEME_CUSTOM,
          text:"Custom",
          img: customThemeImg
    }
  ]

  return (
    <>
      <div className={styles.container}>
        {elements.map((element, index) => (
          <ChooseThemeItem
            key={index}
            theme={element.theme}
            text={element.text}
            img={element.img}
          />
        ))}
      </div>
    </>
  );
}

export default ChooseTheme;

