import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../Utils/PageTitle/PageTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import HouseCard from "./HouseCard";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import bgVdo from "../../assets/Background/homeVdo.mp4";
import { TypeAnimation } from "react-type-animation";
import HowItWork from "../../Components/HomeSection/HowItWork/HowItWork";
import WhyChooseUs from "../../Components/HomeSection/WhyChooseUs/WhyChooseUs";
import PropertyBroker from "../../Components/HomeSection/PropertyBroker/PropertyBroker";
import ClientSays from "../../Components/HomeSection/ClientSays/ClientSays";
import Contact from "../../Components/HomeSection/Contact/Contact";
import Award from "../../Components/HomeSection/Award/Award";
import { Link } from "react-router-dom";
import About from "./About/About";
import HouseLooks from "../../Components/HomeSection/HouseLooks/HouseLooks";
import ResidentialApartment from "../../Components/HomeSection/Residential/ResidentialApartment";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(0);
  const limit = 4;
  const [value, setValue] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allHouse"],
    queryFn: async () => {
      const res = await axiosPublic(
        `/houses?page=${page}&limit=${limit}&price=${value}&search=${searchValue}`
      );
      return res.data;
    },
  });

  const totalPage = Math.ceil(parseInt(totalData) / limit);
  const paginateBtn = [...Array(totalPage).keys()];

  useEffect(() => {
    axiosPublic("/totalHouse").then((res) => {
      setTotalData(res.data.count);
    });
  }, [axiosPublic]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearchValue(searchValue);
  };

  const handleChange = (event, value) => {
    setPage(value - 1);
    refetch();
  };

  const handleSetPrice = (value) => {
    setValue(value);
    setSearchValue("");
  };

  useEffect(() => {
    refetch();
  }, [value, searchValue]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="relative">
        <div className="rounded-b-md hero overflow-hidden h-[500px] text-white relative mb-24">
          <video
            src={bgVdo}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay bg-gray-900 bg-opacity-60"></div>
          <div
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos="fade-right"
            className="absolute left-10 bottom-44"
          >
            <h1 className="text-5xl font-medium">
              We will try to find your <br />
              <TypeAnimation
                sequence={[
                  "Dream",
                  2000,
                  "Wonder",
                  2000,
                  "Suitable",
                  2000,
                  "Haven",
                  2000,
                ]}
                speed={20}
                style={{ display: "inline-block", color: "#e33226" }}
                repeat={Infinity}
              />
              place
            </h1>
          </div>
        </div>
        <div className="h-24 w-10/12 bg-white shadow-md absolute -bottom-10 left-[50%] -translate-x-[50%] skew-x-12 skew-y-1 rounded-bl-xl rounded-tr-xl">
        </div>
          <div className="flex justify-between items-center mt-2 absolute w-9/12 -bottom-6 left-[50%] -translate-x-[50%]">
            <div className="flex-1">
              <form onSubmit={handleSearch}>
                <div className="w-full">
                  <div className="relative w-full">
                    <input
                      type="search"
                      name="search"
                      className="block p-2.5 text-sm w-full text-black rounded-sm border-[#e33226] border focus:none focus:none"
                      placeholder="Search house, city, bedrooms, bathrooms, room size, availability"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-[#e33226] rounded-e-sm border border-[#e33226] hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="h-16 flex-1 flex flex-col justify-center items-center">
              <p className="-mb-2">price range</p>
              <div className="w-2/3">
                <input
                  type="range"
                  onChange={(e) => handleSetPrice(e.target.value)}
                  min="0"
                  max="2500"
                  value={value}
                  className="h-2 range"
                  step="500"
                />
                <div className="w-full flex justify-between text-xs px-2">
                  <span>00</span>
                  <span>500</span>
                  <span>1000</span>
                  <span>1500</span>
                  <span>2000</span>
                  <span>2500</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <h1 className="text-xl font-semibold bg-[#e33226] max-w-fit px-5 py-2 rounded-md text-white">
                House Found : <span>{data.length}</span>
              </h1>
            </div>
          </div>
      </div>

      <PageTitle title="Featured House" />

      <div className="grid grid-cols-2 gap-4">
        {data.map((house) => (
          <HouseCard key={house._id} house={house} />
        ))}
      </div>
      <div className="flex justify-end mb-10 mt-5 mr-[120px]">
        <Pagination
          shape="rounded"
          variant="outlined"
          count={paginateBtn.length}
          page={page + 1}
          onChange={handleChange}
        />
        <Link to='/allHouse'>all house</Link>
      </div>
      <HowItWork />
      <About/>
      <HouseLooks/>
      <Award />
      <WhyChooseUs />
      <ResidentialApartment/>
      <PropertyBroker />
      <ClientSays />
      <Contact />
    </div>
  );
};

export default Home;
