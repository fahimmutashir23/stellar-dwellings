/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const HouseTable = ({ house, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log("click");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/houses/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {house.name}
        </th>
        <td className="px-6 py-4">{house.rent_price}</td>
        <td className="px-6 py-4">{house.city}</td>
        <td className="px-6 py-4">
          <Link to={`/dashboard/updateHouse/${house._id}`}>
            <button className="text-white font-medium bg-green-500 px-4 py-0.5 rounded-sm">
              Edit
            </button>
          </Link>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => handleDelete(house._id)}
            className="text-white font-medium bg-red-500 px-3 py-0.5 rounded-sm"
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default HouseTable;
