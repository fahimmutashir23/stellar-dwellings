import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const HouseCard = ({ house }) => {
  const { name, rent_price, image, _id } = house;

  return (
    <div className=" p-4 shadow-[0_0_30px_#EBE8E8] rounded-sm group">
      <div className="space-y-4">
        <div className="space-y-2 overflow-hidden rounded-md relative">
            <div className="absolute w-full h-0 bg-black opacity-60 group-hover:h-full group-hover:z-10 transition-all duration-500"></div>
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full h-72"
          />
          <h1 className="text-2xl text-black z-20 absolute -top-10 left-[50%] translate-x-[-50%] font-bold bg-white px-6 rounded-b-md group-hover:top-0 transition-all duration-500 ease-in-out">{rent_price}$</h1>
          <div className="absolute -top-14 group-hover:top-[50%] left-[50%] translate-x-[-50%] group-hover:translate-y-[-50%] z-20 transition-all duration-700 ease-in-out">
            <Link
              className="text-main font-semibold bg-gradient-to-r from-[#e33226] to-[#e38126] px-5 py-2 text-white rounded-md flex items-center hover:scale-110 gap-2 transition-all duration-300"
              to={`/houseDetail/${_id}`}
            >
              <span>View Detail</span>{" "}
              <FaArrowRight className="group-hover:translate-x-2 transition-all duration-500 ease-in-out" />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl mx-auto font-bold text-[#e33226]">{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
