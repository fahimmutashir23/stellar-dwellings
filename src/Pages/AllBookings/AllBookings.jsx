import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PageTitle from "../../Utils/PageTitle/PageTitle";
import Loader from "../../Utils/Loader/Loader";
import BookingsTable from "./BookingsTable";

const AllBookings = () => {
  const axiosSecure = useAxiosSecure()

  const {data, isLoading, refetch} = useQuery({
    queryKey: ['bookings'],
    queryFn: async() => {
      const res = await axiosSecure('/bookings')
      return res.data
    }
  })

  if(isLoading){
    return <Loader />
  }

  return (
    <div>
        <PageTitle title='All Bookings' />
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  House Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
             {
              data.map(booking => <BookingsTable key={booking._id} booking={booking} refetch={refetch} />)
             }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBookings;
