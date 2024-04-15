import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const arr = Object.entries(storeData);
    if (arr.length) {
      const res = arr.map(
        item => {
          return {
            id: item[0],
            ...item[1],
          }
        }
      )
      setPeople(res);
    }
}, [])

  console.log(storeData);
  return (
    <>
      {people.length ?
        <PeopleList people={people} /> :
        <h2 className={styles.comment}> No Favorite</h2>
      }
      </>
  );
}

export default FavoritePage;