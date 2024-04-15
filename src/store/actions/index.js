import { ADD_PERSON, REMOVE_PERSON } from "../constant/actiontypes";

export const setPersonToFavorite = person => ({
  type: ADD_PERSON,
  payload: person,
});

export const removePersonFromFavorite = (personId) => ({
  type: REMOVE_PERSON,
  payload: personId,
});
