import { SWAPI_PEOPLE, SWAPI_ROOT, HTTPS, GUIDE_EXTENTION_IMG, URL_IMG_PERSON} from "../constants/api";

const getId = (url, category) => {
  console.log(url);
  const id = url
    .replace(HTTPS + SWAPI_ROOT + category, "")
    .replace(/\//g, '');
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImg = id => `${URL_IMG_PERSON}/${id+GUIDE_EXTENTION_IMG}`;
