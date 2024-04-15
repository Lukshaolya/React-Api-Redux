import { useParams } from "react-router";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector} from 'react-redux';
import { getApiResourse } from "../../utiles/network";
import { getPeopleImg } from "../../services/getPeopleData";


import { API_PERSON } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import styles from "./PersonPage.module.css";
import PersonImage from "../../components/PersonPage/PersonImage/PersonImage";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";

const PersonFilms = React.lazy(
  () => import("../../components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ id, setErrorApi }) => {
  const idNum = useParams().id;
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personImage, setPersonImage] = useState(null);
  const [personMovies, setPersonMovies] = useState([]);
  const [personFavorite, setPersonToFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const res = await getApiResourse(`${API_PERSON}/${idNum}/`);

      storeData[idNum] ? setPersonToFavorite(true): setPersonToFavorite(false);

      if (res) {
        setPersonInfo([
          { title: "Eye-color", data: res.eye_color },
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
        ]);

        if (res.films.length > 0) {
          setPersonMovies(res.films);
        }
        console.log(personMovies, "begin");
        setPersonName(res.name);
        setPersonImage(getPeopleImg(idNum));
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);
  console.log(personMovies, "set");

  return (
    <>
      <div className={styles.person__link}>
        <PersonLinkBack />
      </div>
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonImage
            personName={personName}
            personImage={personImage}
            personId={idNum}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonToFavorite}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personMovies && (
            <Suspense fallback={<h1>Loading</h1>}>
              <PersonFilms personMovies={personMovies} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default withErrorApi(PersonPage);
