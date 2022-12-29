import { getABlogById } from "../action/blogActionFunc";

const fetchByIdThunk = (id) => {
   console.log(id);
   return async (dispatch, getState) => {
      const res = await fetch(`http://localhost:8000/api/blog/${id}`);
      const result = await res.json();

      dispatch(getABlogById(result?.result));
   };
};

export default fetchByIdThunk;
