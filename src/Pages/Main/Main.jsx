import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPostCard from "../../Components/BlogPostCard";
import { filterByOption, filterByTags } from "../../redux/action/filterActionFunc";

const Main = () => {
   const blogs = useSelector((state) => state.blogs.blogs);
   const state = useSelector((state) => state.filter);
   console.log(state);
   const dispatch = useDispatch();

   // active css
   const webdev = `px-3 py-1 rounded-full text-white ${
      state.filterBy.includes("webdev") ? "bg-[#445045]" : "bg-[#9ED5CB]"
   }`;
   const programming = `px-3 py-1 rounded-full text-white ${
      state.filterBy.includes("programming") ? "bg-[#445045]" : "bg-[#9ED5CB]"
   }`;
   const resume = `px-3 py-1 rounded-full text-white ${
      state.filterBy.includes("resume") ? "bg-[#445045]" : "bg-[#9ED5CB]"
   }`;
   const github = `px-3 py-1 rounded-full text-white ${
      state.filterBy.includes("github") ? "bg-[#445045]" : "bg-[#9ED5CB]"
   }`;

   return (
      <>
         <section>
            <div className="flex justify-end items-center gap-10 pt-5">
               <select
                  className="focus:outline-0 bg-gray-100 border border-gray-300 rounded-lg p-2"
                  name="Newest"
                  id="new"
                  onChange={(e) => dispatch(filterByOption())}
               >
                  <option className="text-lg mx-5" value="Newest">
                     Newest First
                  </option>
                  <option className="text-lg my-5" value="Oldest">
                     Oldest First
                  </option>
               </select>

               <div className="flex justify-center items-center gap-3">
                  <p className="text-lg font-semibold">Filter By :</p>
                  <button
                     onClick={() => dispatch(filterByTags("webdev"))}
                     className={webdev}
                  >
                     Web Development
                  </button>
                  <button
                     onClick={() => dispatch(filterByTags("programming"))}
                     className={programming}
                  >
                     Programming
                  </button>
                  <button
                     onClick={() => dispatch(filterByTags("resume"))}
                     className={resume}
                  >
                     Resume
                  </button>
                  <button
                     onClick={() => dispatch(filterByTags("github"))}
                     className={github}
                  >
                     Github
                  </button>
               </div>
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
