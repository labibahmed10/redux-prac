import { GET_BY_ID, GET_CONTENT } from "../actionTypes/blogActionTypes";

const initialState = {
   loading: false,
   blogs: [],
   blog: "",
};

const blogReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_CONTENT:
         return {
            ...state,
            blogs: [...action.payload],
         };

      case GET_BY_ID:
         return {
            ...state,
            blog: action.payload,
         };

      default:
         return state;
   }
};

export default blogReducer;
