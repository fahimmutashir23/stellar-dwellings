import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PageTitle from "../../../Utils/PageTitle/PageTitle";
import Loader from "../../../Utils/Loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import quote from "../../../assets/Lottie/quoteLottie.json";
import Lottie from "lottie-react";
import { Rating, ThinStar } from "@smastrom/react-rating";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#D4D925',
  inactiveFillColor: '#a8a8a8'
}

const ClientSays = () => {
  const axiosPublic = useAxiosPublic();

  const { data: clients = [], isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const res = await axiosPublic("/clients");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-14">
      <PageTitle title="Clients Says" />
      <div className="mt-10">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client._id}>
              <div className="border border-gray-500 bg-gray-50 p-3 rounded-xl rounded-tl-none group">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="h-20 w-20 rounded-full overflow-hidden group-hover:shadow-lg group-hover:shadow-gray-500 transition-all duration-300">
                      <img
                        src={client.profileImage}
                        alt=""
                        className=" w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-medium hover:text-violet-400">
                        {client.name}
                      </h1>
                      <p className="text-sm -mt-1">{client.occupation}</p>
                      <p className="text-xs text-violet-400">{client.email}</p>
                    </div>
                  </div>
                  <div className="w-20">
                    <Lottie animationData={quote} />
                  </div>
                </div>

                <div>
                  <p className="italic text-gray-400 min-h-44">{client.testimonial}</p>
                  <div className="mb-3">
                    <Rating style={{ maxWidth: 120 }} value={client.rating} itemStyles={myStyles} readOnly  />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSays;
