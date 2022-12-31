import { combineReducers } from "redux";
import blogFormReducer from "../blogFromReducer";
import blogReducer from "../blogReducer";
import filterReducer from "../filterReducer";
import manageBlogReducer from "../manageBlogReducer";

const rootReducer = combineReducers({
   blogs: blogReducer,
   filter: filterReducer,
   form: blogFormReducer,
   manage: manageBlogReducer,
});

export default rootReducer;
