import cn from 'classnames';
import styles from "./UIButton.module.css";

const UIButton = ({text, onClick,disabled, theme="dark"}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(styles.button, styles[theme])}
      >
        {text}
      </button>
    </>
  );
}

export default UIButton;