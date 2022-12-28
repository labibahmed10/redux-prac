import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Pages/Main/Main";
import ReadingHistory from "../Pages/ReadingHistory/ReadingHistory";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "home",
            element: <Main />,
         },
         {
            path: "readingHistory",
            element: <ReadingHistory />,
         },
      ],
   },
]);

export default routes;
