import { GET_CONTENT } from "../actionTypes/allActionTypes";

export const getAllBlogs = (blogs) => {
   return {
      type: GET_CONTENT,
      payload: blogs,
   };
};
