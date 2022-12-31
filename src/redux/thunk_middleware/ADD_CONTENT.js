import { addANewBlog } from "../action/blogActionFunc";

const ADD_CONTENT_THUNK = (blog) => {
   return async (dispatch, getState) => {
      const res = await fetch("http://localhost:8000/api/addBlog", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(blog),
      });
      const result = await res.json();

      if (result.success) {
         dispatch(addANewBlog(result?.result));
      } else {
         // common ekta error show korte hbe
      }
   };
};

export default ADD_CONTENT_THUNK;
