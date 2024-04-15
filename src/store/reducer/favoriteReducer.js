import { omit } from 'lodash';
import { ADD_PERSON, REMOVE_PERSON } from "../constant/actiontypes";
import { getLocalStorage } from '../../utiles/localStorage';

const initialState = getLocalStorage('store');

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        ...action.payload,
      }
    case REMOVE_PERSON:

      return omit(state, [action.payload])
    
    default:
      return state;
  }
}
