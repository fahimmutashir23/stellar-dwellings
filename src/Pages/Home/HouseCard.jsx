
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const HouseCard = ({ house }) => {


  const {
    name,
    city,
    available_date,
    rent_price,
    image,
    _id
  } = house;


  return (
    <div >
      <div className="flex max-w-2xl mx-auto h-36 overflow-hidden border-2 bg-slate-100 border-slate-400 mb-5">
        <div className="overflow-hidden w-72 h-36 ">
          <img className="hover:scale-105 transition-all duration-100 h-full w-full object-fill" src={image} />
        </div>
        <div className="flex justify-between flex-1 mb-2 p-2">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{name}</h1>
              <p className="text-sm"> {city} </p>
            </div>
            <div className="flex gap-10">
              <p className="text-xs uppercase flex flex-col">
                <span className="font-semibold text-sm -mb-1">date : {available_date}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-green-800 text-end">
                {rent_price}$
              </h1>
            </div>
            <div className="flex justify-end">
             <Link to={`/bookingsPage/${_id}`}>
             <button
              className="bg-[#E36252] text-white rounded-sm h-9 text-base px-2 hover:bg-red-500">
                Book now
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
