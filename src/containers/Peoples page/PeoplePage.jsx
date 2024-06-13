import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation/PeopleNavigation";

import { getApiResourse, changeHTTP } from "../../utiles/network";

import { API_PEOPLE } from "../../constants/api";
import {
  getPeopleId,
  getPeopleImg,
  getPeoplaPageId,
} from "../../services/getPeopleData";
import { useQueryParams } from "../../hooks/useQueryParams";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(null);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResouse = async (url) => {
    const res = await getApiResourse(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
      setCounterPage(getPeoplaPageId(url));
      setNextPage(changeHTTP(res.next));
      setPrevPage(changeHTTP(res.previous));
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResouse(API_PEOPLE + queryPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryPage]);

  return (
    <>
      <PeopleNavigation
        getResourse={getResouse}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
