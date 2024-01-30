import Lottie from "lottie-react";
import error from "../../assets/Animations/errorPage.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative">
        <Lottie animationData={error} autoPlay={true} loop={false} />
        <p className="text-2xl font-bold absolute bottom-20 left-56">House not found</p>
        <Link to='/' className="absolute bottom-16 left-56 hover:text-blue-400">Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
