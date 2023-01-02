import toast from "../../Components/toast";
import { updateABlog } from "../action/blogActionFunc";

const UPDATE_CONTENT = (blog) => {
   return async (dispatch, getState) => {
      const res = await fetch(
         `https://blog-manage-redux.onrender.com/api/update/${blog?._id}`,
         {
            method: "PATCH",
            body: JSON.stringify(blog),
            headers: {
               "Content-type": "application/json",
            },
         },
      );
      const data = await res.json();

      if (data.success) {
         dispatch(updateABlog(blog));
         toast(true, data.message);
      }
      if (!data.success) {
         toast(false, data.error);
      }
   };
};

export default UPDATE_CONTENT;
