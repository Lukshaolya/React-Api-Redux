import styles from "./PersonImage.module.css";

const PersonImage = ({personImage, personName}) => {
  return (
    <>
      <div className={styles.person__img}>
        <img src={personImage} alt={personName} />
      </div>
    </>
  );
}

export default PersonImage;