import { FILTER_BY_TAG, TOGGLE_OPTION } from "../actionTypes/allActionTypes";

const initialState = {
   status: true,
   filterBy: [],
};

const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_OPTION:
         return {
            ...state,
            status: !state.status,
         };

      case FILTER_BY_TAG:
         if (state?.filterBy.includes(action.payload)) {
            return {
               ...state,
               filterBy: state.filterBy.filter((t) => t !== action.payload),
            };
         }

         return {
            ...state,
            filterBy: [...state.filterBy, action.payload],
         };

      default:
         return state;
   }
};

export default filterReducer;
