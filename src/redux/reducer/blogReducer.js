import {
   ADD_CONTENT,
   DELETE_CONTENT,
   GET_CONTENT,
   READING_HISTORY,
   UPDATE_CONTENT,
} from "../actionTypes/allActionTypes";

const initialState = {
   loading: false,
   blogs: [],
   history: [],
   deleteBlog: {},
};

const blogReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_CONTENT:
         return {
            ...state,
            blogs: [...action.payload],
         };

      case ADD_CONTENT:
         return {
            ...state,
            blogs: [action.payload, ...state.blogs],
         };

      case DELETE_CONTENT:
         return {
            ...state,
            blogs: [...state.blogs.filter((blog) => blog._id !== action.payload._id)],
         };

      case UPDATE_CONTENT:
         return {
            ...state,
            blogs: [
               action.payload,
               ...state.blogs.filter((blog) => blog._id !== action.payload._id),
            ],
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
