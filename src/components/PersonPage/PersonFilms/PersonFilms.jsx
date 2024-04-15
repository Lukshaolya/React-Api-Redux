import { useEffect, useState } from "react";
import { makeCurrentRequest } from "../../../utiles/network";
import { changeHTTP } from "../../../utiles/network";
import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personMovies }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personMovies.map((url) => changeHTTP(url));
      const response = await makeCurrentRequest(filmsHTTPS);

      setFilmsName(response);
      console.log(response);
    })();
  }, []);

    console.log('get', filmsName);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.item__episide}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PersonFilms;
