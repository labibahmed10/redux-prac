import { OPEN_MODAL } from "../actionTypes/allActionTypes";

const initalState = {
   modalOpen: false,
   blog: {},
};

const manageBlogReducer = (state = initalState, action) => {
   switch (action.type) {
      case OPEN_MODAL:
         return {
            ...state,
            modalOpen: !state.modalOpen,
            blog: action.payload,
         };

      default:
         return state;
   }
};

export default manageBlogReducer;
