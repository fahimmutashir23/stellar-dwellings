
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


    <div className="max-w-lg w-[512px] p-4 shadow-[0_0_50px_#EBE8E8] rounded-sm dark:bg-gray-900 dark:text-gray-100">
    <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
            <p className="mb-0 capitalize dark:text-gray-100 font-medium">{city}</p>
        </div>

    </div>
    <div className="space-y-4">
        <div className="space-y-2">
            <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="flex justify-between items-center text-md">
                <span className="font-medium">Available Till : {available_date}</span>
                <p>Rent Per Month : {rent_price}</p>
            </div>
        </div>
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium dark:text-violet-400">{name}</h3>
                <p className="font-medium dark:text-gray-400">Room Size : item.roomSize sqf</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-medium">No. Of Bathrooms : item.bathrooms</p>
                <p className="font-medium">No Of Bedrooms : item.bedrooms</p>
            </div>
            <div className="justify-between items-baseline flex">
                <p className="font-medium">item.address</p>
                <Link className="text-main font-semibold bg-[#e33226] px-5 py-2 text-white rounded-md" to={`/houseDetail/${_id}`}>View Detail</Link>
            </div>
        </div>
    </div>
</div>

    // <div >
    //   <div className="flex max-w-2xl mx-auto h-44 overflow-hidden border-2 bg-slate-100 border-slate-400 mb-5 hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 rounded-tl-xl rounded-br-xl group">
    //     <div className="overflow-hidden w-72 h-44 ">
    //       <img className="group-hover:scale-105 transition-all duration-500 h-full w-full object-fill" src={image} />
    //     </div>
    //     <div className="flex justify-between flex-1 mb-2 p-2">
    //       <div className="flex flex-col justify-between">
    //         <div>
    //           <h1 className="text-2xl font-semibold">{name}</h1>
    //           <p className="text-sm"> {city} </p>
    //         </div>
    //         <div className="flex gap-10">
    //           <p className="text-xs uppercase flex flex-col">
    //             <span className="font-semibold text-sm -mb-1">date : {available_date}</span>
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col justify-between">
    //         <div>
    //           <h1 className="text-2xl font-bold text-green-800 text-end">
    //             {rent_price}$
    //           </h1>
    //         </div>
    //         <div className="flex justify-end">
    //          <Link to={`/bookingsPage/${_id}`}>
    //          <button
    //           className="bg-violet-500 text-white rounded-sm h-7 text-sm px-2 hover:bg-gray-500 hover:rounded-2xl transition-all duration-300">
    //             Book now
    //           </button>
    //          </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HouseCard;
