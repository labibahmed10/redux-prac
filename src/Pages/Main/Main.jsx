import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPostCard from "../../Components/BlogPostCard";
import { filterByOption, filterByTags } from "../../redux/action/filterActionFunc";

const Main = () => {
   const dispatch = useDispatch();

   const blogs = useSelector((state) => state?.blogs?.blogs);
   const state = useSelector((state) => state?.filter);

   // active css
   const webdev = `px-3 py-1 rounded-full text-white ${
      state?.filterBy.includes("Web Development") ? "bg-[#445045]" : "bg-[#9ED5CB]"
   }`;
   const programming = `px-3 py-1 rounded-full text-white ${
      state?.filterBy.includes("Programming") ? "bg-[#445045]" : "bg-[#9ED5CB]"
   }`;
   const resume = `px-3 py-1 rounded-full text-white ${
      state?.filterBy.includes("Resume") ? "bg-[#445045]" : "bg-[#9ED5CB]"
   }`;
   const github = `px-3 py-1 rounded-full text-white ${
      state?.filterBy.includes("Github") ? "bg-[#445045]" : "bg-[#9ED5CB]"
   }`;

   return (
      <>
         <section>
            <div className="flex justify-end items-center gap-10 pt-5">
               <select
                  className="focus:outline-0 bg-gray-100 border border-gray-300 rounded-lg p-2"
                  name="Newest"
                  id="new"
                  onChange={() => dispatch(filterByOption())}
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
                     onClick={() => dispatch(filterByTags("Web Development"))}
                     className={webdev}
                  >
                     Web Development
                  </button>
                  <button
                     onClick={() => dispatch(filterByTags("Programming"))}
                     className={programming}
                  >
                     Programming
                  </button>
                  <button
                     onClick={() => dispatch(filterByTags("Resume"))}
                     className={resume}
                  >
                     Resume
                  </button>
                  <button
                     onClick={() => dispatch(filterByTags("Github"))}
                     className={github}
                  >
                     Github
                  </button>
               </div>
            </div>
         </section>

         <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-10 my-20">
            {blogs
               .filter((blog) =>
                  state?.filterBy.length > 0
                     ? state?.filterBy?.includes(...blog?.tags)
                     : blog,
               )
               .sort((a, b) => state?.status && new Date(b?.seen) - new Date(a?.seen))
               .map((blog) => (
                  <BlogPostCard key={blog?._id} blog={blog} />
               ))}
         </section>
      </>
   );
};

export default Main;
