import { getAllBlogs } from "../action/blogActionFunc";

const GET_CONTENT = () => {
   return async (dispatch, getState) => {
      const response = await fetch("https://blog-manage-redux.onrender.com/api/all");
      const blogs = await response.json();

      dispatch(getAllBlogs(blogs.result));
   };
};

export default GET_CONTENT;
