import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogUploadForm from "../Components/BlogUploadEditForm";
import AdminPage from "../Layout/Admin/AdminPage";
import ManageAllBlogs from "../Pages/AdminPages/ManageAllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Home from "../Pages/Home/Home";
import ReadingHistory from "../Pages/ReadingHistory/ReadingHistory";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/home",
            element: <Home />,
         },
         {
            path: "/blog/:id",
            element: <BlogDetails />,
         },
         {
            path: "/readingHistory",
            element: <ReadingHistory />,
         },
         {
            path: "/admin",
            element: <AdminPage />,
            children: [
               {
                  path: "/admin",
                  element: <BlogUploadForm />,
               },
               {
                  path: "addNew",
                  element: <BlogUploadForm />,
               },
               {
                  path: "manageBlogs",
                  element: <ManageAllBlogs />,
               },
               {
                  path: "manageBlogs/:id",
               },
            ],
         },
      ],
   },
]);

export default routes;
