import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import icon from '../../styles/img/FavoritePAge.png';
import styles from "./Favorite.module.css";

const Favorite = () => {
  const [count, setCount] = useState();

  const storeData = useSelector(state => state.favoriteReducer)

  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ?  setCount('...') :setCount(length)
}, [storeData])

  return (
    <>
      <div className={styles.container}>
        <Link to="/favorite">
          <span className={styles.counter}>{count}</span>
          <img className={styles.icon}  src={icon} alt="icon" />
        </Link>
      </div>
    </>
  );
}

export default Favorite;