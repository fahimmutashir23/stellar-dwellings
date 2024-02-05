import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
// import bg from '../assets/Background/bluryBG.svg'

const MainLayout = () => {
  return (
     <div
     // style={{backgroundImage: `url(${bg})`}}
     className="bg-cover bg-center bg-fixed">
       <Navbar />
         <div className="max-w-7xl mx-auto">
           <Outlet />
       </div>
       <Footer />
     </div>
  );
};

export default MainLayout;
