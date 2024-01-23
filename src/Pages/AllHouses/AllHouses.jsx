import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PageTitle from "../../Utils/PageTitle/PageTitle";
import Loader from "../../Utils/Loader/Loader";
import HouseTable from "./HouseTable";

const AllHouses = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["AllHousesForAdmin"],
    queryFn: async () => {
      const res = await axiosSecure("/houses");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <PageTitle title="All Houses" />
      <div>
        <div>
          <table className="w-full text-sm text-left text-gray-200">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((house) => (
                <HouseTable
                  key={house._id}
                  house={house}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllHouses;
