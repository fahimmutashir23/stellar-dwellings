import Lottie from "lottie-react";
import loadIcon from "../../assets/Animations/loader.json";
const Loader = () => {
  return (
    <div className="flex justify-center mt-4">
      <Lottie
        animationData={loadIcon}
        loop={true}
        autoplay={true}
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  );
};

export default Loader;
