import { FILTER_BY_TAG, TOGGLE_OPTION } from "../actionTypes/allActionTypes";

export const filterByOption = () => {
   return {
      type: TOGGLE_OPTION,
   };
};

export const filterByTags = (tag) => {
   return {
      type: FILTER_BY_TAG,
      payload: tag,
   };
};
