import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getApiResourse } from "../../utiles/network";
import { getPeopleImg } from "../../services/getPeopleData";

import { API_PERSON } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import styles from "./PersonPage.module.css";
import PersonImage from "../../components/PersonPage/PersonImage/PersonImage";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";

const PersonPage = ({ id, setErrorApi }) => {
  const idNum = useParams().id;
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personImage, setPersonImage] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getApiResourse(`${API_PERSON}/${idNum}/`);
      console.log(res);

      if (res) {
        setPersonInfo([
          { title: "Eye-color", data: res.eye_color },
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
        ]);
        setPersonName(res.name);
        setPersonImage(getPeopleImg(idNum));
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonImage personName={personName} personImage={personImage} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
        </div>
      </div>
    </>
  );
};

export default withErrorApi(PersonPage);
