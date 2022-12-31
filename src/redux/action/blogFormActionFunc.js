import { ADD_CONTENT, ADD_TAGS, TEXT_INPUT } from "../actionTypes/allActionTypes";

export const postANewBlog = (data) => {
   return {
      type: ADD_CONTENT,
      payload: data,
   };
};

export const textInputs = (name, value) => {
//    console.log(name, value);
   return {
      type: TEXT_INPUT,
      payload: { name, value },
   };
};

export const addTagsInput = (tags) => {
//    console.log(tags);
   return {
      type: ADD_TAGS,
      payload: tags,
   };
};
