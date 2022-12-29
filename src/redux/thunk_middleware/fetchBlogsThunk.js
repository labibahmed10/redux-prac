import { getAllBlogs } from "../action/blogActionFunc";

const fetchBlogsThunk = (any) => {
   return async (dispatch, getState) => {
      const response = await fetch("http://localhost:8000/api/all");
      const blogs = await response.json();
      dispatch(getAllBlogs(blogs.result));
   };
};

export default fetchBlogsThunk;
