import { GET_BY_ID, GET_CONTENT } from "../actionTypes/blogActionTypes";

export const getAllBlogs = (blogs) => {
   return {
      type: GET_CONTENT,
      payload: blogs,
   };
};

export const getABlogById = (blog) => {
   return {
      type: GET_BY_ID,
      payload: blog,
   };
};
