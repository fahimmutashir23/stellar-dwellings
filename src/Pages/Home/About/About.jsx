import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./About.css";
import PageTitle from "../../../Utils/PageTitle/PageTitle";
const About = () => {
  return (
    <div>
      <PageTitle title="About Us" />
      <div className="pt-[100px] pb-[100px] lg:pb-[150px] px-8 xl:px-0">
        <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row lg:justify-center xl:justify-between gap-[170px]">
          <div data-aos="fade-right" data-aos-duration="2000" className="relative px-3 md:px-8 lg:px-0">
            <img
              className="lg:max-w-[361px] md:min-w-[574px] lg:min-w-[324px] xl:min-w-[504px] xl:min-h-[504px] rounded-[5px] z-10"
              src="https://i.ibb.co/sgQWNHX/download.jpg"
              alt=""
            />
            <div className="absolute left-[100px] top-[250px] md:left-[325px] md:top-[380px] lg:left-[200px] lg:top-[250px] xl:left-[225px]  xl:top-[305px] min-w-[160px] lg:min-w-[300px] xl:min-w-[400px] min-h-[350px]">
              <img
                className="min-w-full min-h-full border-[10px] border-white"
                src="https://i.ibb.co/CPXqSN1/download.jpg"
                alt=""
              />
            </div>
            <div className="absolute md:left-16 -bottom-38">
              <img
                className="rotate-anim w-24 md:w-44 text-blue-900"
                src="https://i.ibb.co/THwCWwB/shape-1-1.png"
                alt="Red cube png for rotating animation"
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <p className="text-[17px] text-[#666666] my-6">
              Welcome to Stellar Dwellings, your premier destination for finding
              the perfect home for rent. At Stellar Dwellings, we understand
              that finding the right place to live is more than just a search
              for a house – its about discovering a place that truly feels like
              home.
            </p>
            <h1 className="text-[#e33226] font-semibold text-xl">
              Our Mission
            </h1>
            <br />
            <p>
              Our mission is to simplify the process of finding a rental
              property by providing a user-friendly platform that connects
              landlords and tenants. We believe in creating a seamless and
              enjoyable experience for both property owners and those seeking a
              place to call home.
            </p>

            <ul className="text-black font-semibold flex flex-col gap-4 mt-6">
              <li className="flex items-center gap-2 text-[16px]">
                <IoMdCheckmarkCircleOutline className="text-[#e33226]" />
                We have a strong customer support in 24/7 days
              </li>
              <li className="flex items-center gap-2 text-[16px]">
                <IoMdCheckmarkCircleOutline className="text-[#e33226]" />
                We offer wonderful homes with furnitures.
              </li>
              <li className="flex items-center gap-2 text-[16px]">
                <IoMdCheckmarkCircleOutline className="text-[#e33226]" />
                Extensive Listings
              </li>
              <li className="flex items-center gap-2 text-[16px]">
                <IoMdCheckmarkCircleOutline className="text-[#e33226]" />
                Smart Home Design & Beautiful Scene Around
              </li>
            </ul>
            <div className="mt-8">
              <button className="bg-[#e33226] text-white px-5 py-2 font-semibold rounded-md">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
