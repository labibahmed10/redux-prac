import React from "react";
import { useNavigate } from "react-router-dom";

const BlogPostCard = ({ blog }) => {
   const location = useNavigate();
   const date = new Date(blog?.seen).toDateString();

   return (
      <div className="shadow-xl rounded-3xl flex flex-col text-[#445045] bg-[#c5e0dc]">
         <div className="w-full">
            <img
               src={blog.image}
               alt="The pic contains some information"
               className="object-fill rounded-t-3xl"
            />
         </div>

         <h1 className="font-bold px-3 py-2">{blog.title}</h1>

         <div className="border-y border-y-[#445045] py-3 px-2">
            <ul className="flex items-center gap-3">
               {blog.tags.slice(0, 4).map((tag, i) => (
                  <li key={i} className="px-3 py-1 rounded-full bg-[#445045] text-white">
                     {tag}
                  </li>
               ))}
            </ul>
         </div>

         <p className="text-justify font-semibold px-3 py-1">
            {`${blog?.text?.slice(0, 200)}....`}
            <span
               onClick={() => location(`/blog/${blog?._id}`)}
               className="px-4 py-1 rounded-full leading-8 bg-[#445045] text-white cursor-pointer inline-block mt-3"
            >
               Read More
            </span>
         </p>

         <ul className="flex justify-between items-center px-3 py-2">
            <li className="text-[18px] font-bold">Written by me</li>
            <li className="text-[18px] font-bold">{date}</li>
         </ul>
      </div>
   );
};

export default BlogPostCard;
