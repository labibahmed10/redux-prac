import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Main from "../Pages/Main/Main";
import ReadingHistory from "../Pages/ReadingHistory/ReadingHistory";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Main />,
         },
         {
            path: "home",
            element: <Main />,
         },
         {
            path: "blog/:id",
            element: <BlogDetails />,
         },
         {
            path: "readingHistory",
            element: <ReadingHistory />,
         },
      ],
   },
]);

export default routes;
