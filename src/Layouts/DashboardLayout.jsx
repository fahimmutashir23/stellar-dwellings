import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";
import Navbar from "../Components/Shared/Navbar";

const DashboardLayout = () => {
  return (
    <div>
        <Navbar />
      <div className="flex gap-4">
        <div className="w-2/12 bg-gray-800 text-white p-4">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
