import toast from "../../Components/toast";
import { addANewBlog } from "../action/blogActionFunc";

const ADD_CONTENT = (blog) => {
   return async (dispatch, getState) => {
      const res = await fetch("https://blog-manage-redux.onrender.com/api/addBlog", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(blog),
      });
      const result = await res.json();
      console.log(result);

      if (result.success) {
         dispatch(addANewBlog(result?.result));
         toast(true, result.message);
      }
      if (!result.success) {
         toast(false, result.error);
      }
   };
};

export default ADD_CONTENT;
