import { GET_CONTENT, READING_HISTORY } from "../actionTypes/allActionTypes";

const initialState = {
   loading: false,
   blogs: [],
   history: [],
};

const blogReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_CONTENT:
         return {
            ...state,
            blogs: [...action.payload],
         };

      case READING_HISTORY:
         const existing = state.history.includes(action.payload);

         if (existing) {
            return {
               ...state,
               history: [
                  action.payload,
                  ...state?.history?.filter((blog) => blog?._id !== action?.payload?._id),
               ],
            };
         }

         return {
            ...state,
            history: [action.payload, ...state.history],
         };

      default:
         return state;
   }
};

export default blogReducer;
