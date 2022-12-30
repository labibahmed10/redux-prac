import React from "react";
import { useSelector } from "react-redux";
import BlogPostCard from "../../Components/BlogPostCard";

const ReadingHistory = () => {
   const sortedBlogs = useSelector((state) => state?.blogs?.history);

   return (
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-10 my-20">
         {sortedBlogs.map((blog) => (
            <BlogPostCard key={blog?._id} blog={blog} />
         ))}
      </section>
   );
};

export default ReadingHistory;
