import { combineReducers } from "redux";
import blogFormReducer from "../blogFromReducer";
import blogReducer from "../blogReducer";
import filterReducer from "../filterReducer";

const rootReducer = combineReducers({
   blogs: blogReducer,
   filter: filterReducer,
   form: blogFormReducer,
});

export default rootReducer;
