import PageTitle from "../../../Utils/PageTitle/PageTitle";
import findHouse from "../../../assets/Lottie/house.json";
import meeting from "../../../assets/Lottie/meeting.json";
import deal from "../../../assets/Lottie/deal.json";
import arrow from "../../../assets/Lottie/arrow.json";
import Lottie from "lottie-react";



const HowItWork = () => {
  return (
    <div>
      <PageTitle title="How It Work" />
      <div className="flex justify-evenly mt-10">
        <div className="flex flex-col justify-between">
          <p className="text-xl font-medium italic border-l-4 px-2 border-l-[#e33226] mb-5">
            Found Property
          </p>
          <div className="w-72 mb-[59px] ">
            <Lottie animationData={findHouse} loop={true} autoplay={true} />
          </div>
        </div>
        <div className="w-16 md:mt-28">
          <Lottie animationData={arrow} loop={true} autoplay={true} />
        </div>
        <div>
          <p className="text-xl font-medium italic border-l-4 px-2 border-[#e33226]">
            Meeting with Client
          </p>
          <div className="w-44 mt-10">
            <Lottie animationData={meeting} loop={true} autoplay={true} />
          </div>
        </div>
        <div className="w-16 md:mt-24">
          <Lottie animationData={arrow} loop={true} autoplay={true} />
        </div>
        <div>
          <p className="text-xl font-medium italic border-l-4 px-2 border-l-[#e33226]">
            Handover Property
          </p>
          <div className="w-64 mt-5">
            <Lottie animationData={deal} loop={true} autoplay={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
