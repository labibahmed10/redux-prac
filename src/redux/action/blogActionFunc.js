import { GET_CONTENT } from "../actionTypes/blogActionTypes";

export const getAllBlogs = (blogs) => {
   return {
      type: GET_CONTENT,
      payload: blogs,
   };
};
