import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPostCard from "../../Components/BlogPostCard";
import { getAllBlogs } from "../../redux/action/blogActionFunc";
import fetchBlogsThunk from "../../redux/thunk_middleware/fetchBlogsThunk";

const Main = () => {
   const { blogs } = useSelector((state) => state.blogs);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchBlogsThunk());
   }, []);

   return (
      <>
         <section>
            <div>
               <select name="Newest" id="new">
                  <option value="Newest">Newest First</option>
                  <option value="Oldest">Oldest First</option>
               </select>

               <div></div>
            </div>
         </section>

         <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-10 my-20">
            {blogs.map((blog) => (
               <BlogPostCard key={blog?._id} blog={blog} />
            ))}
         </section>
      </>
   );
};

export default Main;
