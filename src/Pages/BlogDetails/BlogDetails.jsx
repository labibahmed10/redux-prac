import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchByIdThunk from "../../redux/thunk_middleware/fetchByIdThunk";

const BlogDetails = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const blog = useSelector((state) => state?.blogs?.blog);
   const date = new Date(blog?.seen).toDateString();

   useEffect(() => {
      dispatch(fetchByIdThunk(id));
   }, []);

   return (
      <article className="max-w-5xl mx-auto mt-10 mb-32">
         <img
            className="max-w-3xl mx-auto rounded-lg"
            src={blog?.image}
            alt="Contains important pics"
         />

         <h1 className="text-3xl pt-3">{blog?.title}</h1>

         <div className="py-3 px-2 flex justify-between items-center">
            <ul className="flex items-center gap-3">
               {blog?.tags?.map((tag, i) => (
                  <li key={i} className="px-4 py-2 text-lg rounded-full bg-[#445045] text-white">
                     {tag}
                  </li>
               ))}
            </ul>

            <p className="px-4 py-2 text-lg rounded-full bg-[#445045] text-white">{date}</p>
         </div>

         <h2 className="text-xl mt-10">{blog?.text}</h2>
      </article>
   );
};

export default BlogDetails;
