/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const BookingsTable = ({ booking, refetch }) => {
const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log('click');
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/bookings/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
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
          {booking.name}
        </th>
        <td className="px-6 py-4">{booking.email}</td>
        <td className="px-6 py-4">{booking.houseName}</td>
        {/* <td className="px-6 py-4">
          <button
            onClick={() => document.getElementById("modal_2").showModal()}
            className="text-white font-medium bg-green-500 px-4 py-0.5 rounded-sm"
          >
            Edit
          </button>
        </td> */}
        <td className="px-6 py-4">
          <button
            onClick={() => handleDelete(booking._id)}
            className="text-white font-medium bg-red-500 px-3 py-0.5 rounded-sm"
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default BookingsTable;
