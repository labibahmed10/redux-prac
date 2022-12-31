import {
   ADD_CONTENT,
   DELETE_A_BLOG,
   GET_CONTENT,
   READING_HISTORY,
} from "../actionTypes/allActionTypes";

export const getAllBlogs = (blogs) => {
   return {
      type: GET_CONTENT,
      payload: blogs,
   };
};

export const addANewBlog = (data) => {
   return {
      type: ADD_CONTENT,
      payload: data,
   };
};

export const deleteABlog = (blog) => {
   return {
      type: DELETE_A_BLOG,
      payload: blog,
   };
};

export const showByReadingHistory = (blog) => {
   return {
      type: READING_HISTORY,
      payload: blog,
   };
};
