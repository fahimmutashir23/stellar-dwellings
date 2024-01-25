import { useQuery } from "@tanstack/react-query";
import useIsLogIn from "./useIsLogIn";
import useAxiosPublic from "./useAxiosPublic";


const useIsOwner = () => {
    const user = useIsLogIn();
    const axiosPublic = useAxiosPublic()

    const {data: isOwner, isLoading: ownerLoading, refetch: ownerFetch} = useQuery({
        queryKey: ['isOwner'],
        queryFn: async() => {
            const res = await axiosPublic(`/users?email=${user?.email}`)
            return res.data[0]
        }
    })
    return [isOwner, ownerLoading, ownerFetch]
};

export default useIsOwner;