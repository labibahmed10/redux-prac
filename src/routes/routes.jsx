import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogUploadForm from "../Components/BlogUploadForm";
import AdminPage from "../Layout/Admin/AdminPage";
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
            ],
         },
      ],
   },
]);

export default routes;
