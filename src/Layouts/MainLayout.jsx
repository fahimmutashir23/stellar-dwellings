import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
        <div className="max-w-7xl mx-auto">
          <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
