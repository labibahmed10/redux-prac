import React from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../redux/action/manageBlogActionFunc";
import DeleteModal from "../../Components/DeleteModal";

const ManageAllBlogs = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const blogs = useSelector((state) => state?.blogs?.blogs);
   const manage = useSelector((state) => state.manage);
   console.log(manage);

   let date;

   return (
      <div className="overflow-auto shadow-md rounded-lg">
         <table className="w-full text-sm text-left text-white">
            <thead className="uppercase bg-[#445045]">
               <tr>
                  <th scope="col" className="py-5 px-6">
                     Blog Title
                  </th>
                  <th scope="col" className="py-5 px-6">
                     Uploaded day
                  </th>
                  <th scope="col" className="py-5 px-6">
                     Make Actions
                  </th>
               </tr>
            </thead>
            <tbody>
               {blogs.map((blog) => (
                  <tr
                     key={blog._id}
                     className="bg-[#9ED5CB] text-[#445045] text-lg font-semibold"
                  >
                     <td className="py-5 px-6">{blog?.title.slice(0, 25) + "..."}</td>
                     <td className="py-5 px-6">
                        {(date = new Date(blog.seen).toDateString())}
                     </td>
                     <td className="py-5 px-6 flex items-center gap-5 text-3xl text-[#445045] ">
                        <RiDeleteBin6Line
                           className="cursor-pointer"
                           onClick={() => dispatch(openModal(blog))}
                        />

                        <GrDocumentUpdate className="cursor-pointer" />
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         {manage.modalOpen && <DeleteModal />}
      </div>
   );
};

export default ManageAllBlogs;
