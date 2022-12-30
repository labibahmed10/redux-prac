import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assests/logo.png";

const Navbar = () => {
   return (
      <nav className="h-16 flex justify-between items-center bg-[#71beb0fa] rounded-full px-5">
         <img src={logo} alt="site logo" className="object-fill w-36" />

         <ul className="flex items-center gap-8">
            <li>
               <NavLink
                  to="/home"
                  className={({ isActive }) =>
                     isActive
                        ? "bg-[#9ED5CB] px-3 py-2 rounded-2xl text-[#445045] font-bold"
                        : "font-bold text-[#445045]"
                  }
               >
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/readingHistory"
                  className={({ isActive }) =>
                     isActive
                        ? "bg-[#9ED5CB] px-3 py-2 rounded-2xl text-[#445045] font-bold"
                        : "font-bold text-[#445045]"
                  }
               >
                  Reading History
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                     isActive
                        ? "bg-[#9ED5CB] px-3 py-2 rounded-2xl text-[#445045] font-bold"
                        : "font-bold text-[#445045]"
                  }
               >
                  Admin Dashboard
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
