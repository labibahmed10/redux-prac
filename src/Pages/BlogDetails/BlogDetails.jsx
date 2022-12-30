import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const blog = useSelector((state) => state?.blogs?.blogs).find((blo) => blo._id === id);
   const date = new Date(blog?.seen).toDateString();

   return (
      <article className="max-w-5xl mx-auto mt-10 mb-32">
         <img
            className="max-w-3xl mx-auto rounded-lg"
            src={blog?.image}
            alt="Contains important pics"
         />

         <h1 className="text-3xl pt-3">{blog?.title}</h1>

         <div className="py-3 flex justify-between items-center">
            <ul className="flex items-center gap-3">
               <p className="text-2xl font-semibold">Tags: </p>{" "}
               {blog?.tags?.map((tag, i) => (
                  <li
                     key={i}
                     className="px-4 py-2 text-lg rounded-full bg-[#445045] text-white"
                  >
                     {tag}
                  </li>
               ))}
            </ul>
            <p className="px-4 py-2 text-lg rounded-full bg-[#445045] text-white">
               {date}
            </p>
         </div>

         <h2 className="text-xl mt-6">{blog?.text}</h2>

         <button
            onClick={() => navigate("/home")}
            className="px-5 py-3 bg-[#445045] text-white rounded-full font-semibold mt-4"
         >
            Back to Home
         </button>
      </article>
   );
};

export default BlogDetails;
