import { ADD_TAGS, REMOVE_TAG, TEXT_INPUT } from "../actionTypes/allActionTypes";

export const textInputs = (name, value) => {
   return {
      type: TEXT_INPUT,
      payload: { name, value },
   };
};

export const addTagsInput = (tags) => {
   return {
      type: ADD_TAGS,
      payload: tags,
   };
};

export const removeATag = (tag) => {
   return {
      type: REMOVE_TAG,
      payload: tag,
   };
};

