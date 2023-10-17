import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const Root = () => {
  return (
    <div>
      <div className="bg-white drop-shadow-md">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
