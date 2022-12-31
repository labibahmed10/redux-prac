import { OPEN_MODAL } from "../actionTypes/allActionTypes";

export const openModal = (blog) => {
   return {
      type: OPEN_MODAL,
      payload:blog
   };
};
