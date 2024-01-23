import { NavLink } from "react-router-dom";
import useIsLogIn from "../../../Hooks/useIsLogIn";
import useIsOwner from "../../../Hooks/useIsOwner";
import Loader from "../../../Utils/Loader/Loader";
import { useEffect } from "react";

const Sidebar = () => {
    const [isOwner, ownerLoading, ownerFetch] = useIsOwner()

    useEffect(() => {
      ownerFetch()
    }, [ownerFetch])

    if(ownerLoading){
      return <Loader/>
    }

  return (
    <div>
      <div className="py-4 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-center mt-2 text-xl font-semibold">User Name</h2>
          <h2 className="text-center mt-1">{isOwner === 'owner'? 'Owner' : "Renter"}</h2>
        </div>
      </div>
      <div>
        {isOwner === 'owner' ? 
        <ul className="space-y-1">
          <li className="bg-gray-700 ">
            <NavLink to='/dashboard/allBookings' className="p-4 block hover:translate-x-2 transition-all duration-300">
              All Bookings
            </NavLink>
          </li>
          <li className="bg-gray-700 ">
            <NavLink to='/dashboard/allHouses' className="p-4 block hover:translate-x-2 transition-all duration-300">
              All Houses
            </NavLink>
          </li>
          <li className="bg-gray-700">
            <NavLink to='/dashboard/addHouse' className="p-4 block hover:translate-x-2 transition-all duration-300">
              Add New House
            </NavLink>
          </li>
        </ul>
        :
        <ul className="space-y-1">
          <li className="bg-gray-700 ">
            <NavLink to='/dashboard/myBookings' className="p-4 block hover:translate-x-2 transition-all duration-300">
              My Bookings
            </NavLink>
          </li>
        </ul>}
      </div>
    </div>
  );
};

export default Sidebar;
