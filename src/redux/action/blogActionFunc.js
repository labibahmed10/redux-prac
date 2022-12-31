import {
   ADD_CONTENT,
   DELETE_CONTENT,
   GET_CONTENT,
   READING_HISTORY,
   UPDATE_CONTENT,
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
      type: DELETE_CONTENT,
      payload: blog,
   };
};

export const updateABlog = (blog) => {
   return {
      type: UPDATE_CONTENT,
      payload: blog,
   };
};

export const showByReadingHistory = (blog) => {
   return {
      type: READING_HISTORY,
      payload: blog,
   };
};
