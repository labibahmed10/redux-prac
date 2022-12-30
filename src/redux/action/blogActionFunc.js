import { GET_CONTENT, READING_HISTORY } from "../actionTypes/allActionTypes";

export const getAllBlogs = (blogs) => {
   return {
      type: GET_CONTENT,
      payload: blogs,
   };
};

export const showByReadingHistory = (blog) => {
   return {
      type: READING_HISTORY,
      payload: blog,
   };
};
