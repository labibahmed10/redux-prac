import { Outlet } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";

function App() {
   return (
      <main className="max-w-7xl mx-auto m-2">
         <Navbar />
         <Outlet />
      </main>
   );
}

export default App;
