import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PageTitle from "../../../Utils/PageTitle/PageTitle";
import Loader from "../../../Utils/Loader/Loader";
import BrokerCard from "./BrokerCard";

const PropertyBroker = () => {
    const axiosPublic = useAxiosPublic();

    const {data, isLoading} = useQuery({
        queryKey: ["brokers"],
        queryFn: async () => {
            const res = await axiosPublic('/brokers');
            return res.data
        }
    })

    if(isLoading){
        return <Loader />
    }
    return (
        <div>
            <PageTitle title='Property Broker' />      
            <div className="flex gap-4 justify-evenly">
                {
                    data.map(broker => <BrokerCard key={broker._id} broker={broker} />)
                }
            </div>      
        </div>
    );
};

export default PropertyBroker;