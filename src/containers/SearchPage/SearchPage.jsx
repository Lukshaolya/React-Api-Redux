import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { getApiResourse } from "../../utiles/network";
import { API_SEARCH } from "../../constants/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import SearchPageInfo from "../../components/SearchPageInfo/SearchPageInfo";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputValue, setInputValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResourse(API_SEARCH + param);
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
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse('')
  }, []);

  const debounceGetResponse = useCallback(
    debounce((value) => getResponse(value), 300), []
  );
    
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    debounceGetResponse(value);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter characters name"
        className={styles.search__input}
      />
      <div>
        <SearchPageInfo people={people} />
      </div>
    </>
  );
};

export default withErrorApi(SearchPage);
