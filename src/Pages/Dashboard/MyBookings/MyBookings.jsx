import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PageTitle from "../../../Utils/PageTitle/PageTitle";
import useIsLogIn from "../../../Hooks/useIsLogIn";
import Loader from "../../../Utils/Loader/Loader";
import MyBookingsTable from "./MyBookingsTable";

const MyBookings = () => {
    const user = useIsLogIn()
    const axiosSecure = useAxiosSecure();

    const {data: myBookings = [], isLoading, refetch} = useQuery({
        queryKey: ['myBookings'],
        queryFn: async() => {
            const res = await axiosSecure(`/bookings?email=${user?.email}`)
            return res.data
        }
    })

    if(isLoading){
        return <Loader/>
    }
  return (
    <div>
      <PageTitle title="My Bookings" />
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
              {myBookings.map((booking) => (
                <MyBookingsTable
                  key={booking._id}
                  booking={booking}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
          <p className="text-black text-xl mt-5 text-center">{myBookings.length === 0 && 'No Bookings found.'}</p>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
