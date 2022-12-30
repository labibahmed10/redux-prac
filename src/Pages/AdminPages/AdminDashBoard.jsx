import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";

const AdminDashBoard = () => {
   return (
      <>
         <ul className="flex flex-col">
            <h1 className="text-3xl p-1 text-[#445045] font-serif font-semibold border-b border-b-sky-800 text-center">
               Admin Dashboard
            </h1>
            <li className="flex items-center gap-3 text-2xl w-full font-mono font-medium rounded-md p-3 my-2 bg-[#9ED5CB]">
               Add a new blog <AiOutlineAppstoreAdd />
            </li>
            <li className="flex items-center gap-3 text-2xl w-full font-mono font-medium rounded-md p-3 my-2 bg-[#9ED5CB]">
               Manage Blogs <MdManageSearch />
            </li>
         </ul>
      </>
   );
};

export default AdminDashBoard;
