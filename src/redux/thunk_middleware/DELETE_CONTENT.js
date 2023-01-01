import toast from "../../Components/toast";
import { deleteABlog } from "../action/blogActionFunc";

const DELETE_CONTENT = (blog) => {
   return async (dispatch, getState) => {
      const res = await fetch(`http://localhost:8000/api/delete/${blog?._id}`, {
         method: "DELETE",
      });
      const result = await res.json();

      if (result.deletedCount > 0) {
         dispatch(deleteABlog(blog));
      }
      if (!result.success) {
         toast(false, result.error);
      }
   };
};

export default DELETE_CONTENT;
