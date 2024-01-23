import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
        <div className="max-w-7xl mx-auto">
          <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
