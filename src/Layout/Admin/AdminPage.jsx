import React from "react";
import { Outlet } from "react-router-dom";
import AdminDashBoard from "../../Pages/AdminPages/AdminDashBoard";

const AdminPage = () => {
   return (
      <section className="grid grid-cols-12 px-3 mt-20 h-[650px] rounded-lg">
         <aside className="col-span-3 bg-slate-50 p-5">
            <AdminDashBoard />
         </aside>
         <section className="col-span-9 bg-slate-100 p-5">
            <Outlet />
         </section>
      </section>
   );
};

export default AdminPage;
