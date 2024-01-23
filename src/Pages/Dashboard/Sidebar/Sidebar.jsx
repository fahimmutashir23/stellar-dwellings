import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const role = 'owner'

  return (
    <div>
      <div className="py-4 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-center mt-2 text-xl font-semibold">User Name</h2>
          <h2 className="text-center mt-1">{role === 'owner'? 'Owner' : "Renter"}</h2>
        </div>
      </div>
      <div>
        {role === 'owner' ? 
        <ul className="space-y-1">
          <li className="bg-gray-700 ">
            <NavLink to='allBookings' className="p-4 block hover:translate-x-2 transition-all duration-300">
              All Bookings
            </NavLink>
          </li>
          <li className="bg-gray-700">
            <NavLink to='/addHouse' className="p-4 block hover:translate-x-2 transition-all duration-300">
              Add New House
            </NavLink>
          </li>
        </ul>
        :
        <ul className="space-y-1">
          <li className="bg-gray-700 ">
            <NavLink to='/myBookings' className="p-4 block hover:translate-x-2 transition-all duration-300">
              My Bookings
            </NavLink>
          </li>
        </ul>}
      </div>
    </div>
  );
};

export default Sidebar;
