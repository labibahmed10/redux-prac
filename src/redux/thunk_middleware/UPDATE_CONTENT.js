import { updateABlog } from "../action/blogActionFunc";

const UPDATE_CONTENT = (blog) => {
   return async (dispatch, getState) => {
      const res = await fetch(`http://localhost:8000/api/update/${blog?._id}`, {
         method: "PATCH",
         body: JSON.stringify(blog),
         headers: {
            "Content-type": "application/json",
         },
      });
      const data = await res.json();

      if (data.success) {
         dispatch(updateABlog(blog));
      }
   };
};

export default UPDATE_CONTENT;
