import PageTitle from "../../../Utils/PageTitle/PageTitle";
import findHouse from "../../../assets/Lottie/houseLottie.json";
import meeting from "../../../assets/Lottie/meetingLottie.json";
import deal from "../../../assets/Lottie/dealLottie.json";
import arrow from "../../../assets/Lottie/arrowLottie.json";
import Lottie from "lottie-react";



const HowItWork = () => {
  return (
    <div>
      <PageTitle title="How It Work" />
      <div className="flex justify-evenly mt-10">
        <div className="flex flex-col justify-between">
          <p className="text-xl font-medium italic border-l-4 px-2 border-l-violet-400">
            Found Property
          </p>
          <div className="w-52 mb-7">
            <Lottie animationData={findHouse} loop={true} autoplay={true} />
          </div>
        </div>
        <div className="w-16 md:mt-16">
          <Lottie animationData={arrow} loop={true} autoplay={true} />
        </div>
        <div>
          <p className="text-xl font-medium italic border-l-4 px-2 border-l-violet-400">
            Meeting with Client
          </p>
          <div className="w-52">
            <Lottie animationData={meeting} loop={true} autoplay={true} />
          </div>
        </div>
        <div className="w-16 md:mt-16">
          <Lottie animationData={arrow} loop={true} autoplay={true} />
        </div>
        <div>
          <p className="text-xl font-medium italic border-l-4 px-2 border-l-violet-400">
            Handover Property
          </p>
          <div className="w-52">
            <Lottie animationData={deal} loop={true} autoplay={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
