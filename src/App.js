import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import fetchBlogsThunk from "./redux/thunk_middleware/GET_CONTENT";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchBlogsThunk());
   }, [dispatch]);

   return (
      <main className="max-w-screen-xl mx-auto m-2">
         <Navbar />
         <Outlet />
      </main>
   );
}

export default App;
