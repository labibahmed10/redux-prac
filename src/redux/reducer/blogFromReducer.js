import { ADD_TAGS, TEXT_INPUT } from "../actionTypes/allActionTypes";

const initialState = {
   title: "",
   text: "",
   tags: [],
};

const blogFormReducer = (state = initialState, action) => {
   switch (action.type) {
      case TEXT_INPUT:
         if (action.payload.name === "title") {
            return {
               ...state,
               title: action.payload.value,
            };
         }
         return {
            ...state,
            text: action.payload.value,
         };

      case ADD_TAGS:
         if (state.tags.includes(action.payload)) {
            return {
               ...state,
               tags: [...state.tags],
            };
         }

         return {
            ...state,
            tags: [action.payload, ...state.tags],
         };

      default:
         return state;
   }
};

export default blogFormReducer;
