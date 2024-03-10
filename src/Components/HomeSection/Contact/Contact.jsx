import Lottie from "lottie-react";
import contactLottie from "../../../assets/Lottie/contactLottie.json";
import pattern from "../../../assets/Background/subtle_dots.png";
import { AwesomeButton } from "react-awesome-button";
// import { BeakerIcon, TrashIcon } from "@primer/octicons-react";
import "react-awesome-button/dist/styles.css";
import { Link,} from "react-router-dom";


const Contact = () => {
  return (
    <div className="">
      <div className="" style={{
        backgroundImage: "url(https://i.ibb.co/sgWv0Bd/breadcrumb-1.jpg)",
      }}>
        <div className=" bg-[#000000B2]">
          <div className=" max-w-screen-2xl mx-auto py-24">
            <h2 className="md:text-6xl text-2xl font-bold text-white font-serif px-14">Contact With Us</h2>
            <div className="mt-2 px-14">
              <p className="text-white">
                <Link to="/" className="hover:text-[#ec3323] cursor-pointer">
                  Home{" "}
                </Link>
                / <span className="text-[#ec3323]">Contact Us</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${pattern})` }}
        className="flex gap-4 items-center"
      >
        <div className="flex-1">
          <Lottie animationData={contactLottie} loop={true} autoplay={true} />
        </div>
        <div className="flex-1">
          <h1 className="text-center mb-10 text-4xl font-semibold text-[#e33226]">
            {"let's Talk"}
            <p className="h-1.5 w-16 bg-black rounded-full mx-auto mt-2"></p>
          </h1>
          <form className="max-w-sm mx-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 block w-full ps-10 p-2.5"
                placeholder="Your Name"
              />
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 block w-full ps-10 p-2.5"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-0 focus:border-none"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="mt-5">
              <AwesomeButton type="secondary" className="w-full bg-[#e33226]">
                Submit
              </AwesomeButton>
            </div>
          </form>
        </div>
      </div>
      <div className="">
            <div
                className="items-center relative overflow-hidden px-10 pb-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white my-6 before:absolute before:right-0 before:w-[300px] before:bg-[#e33226] before:h-full max-md:before:hidden">
                <div>
                    <ul  style={{ cursor: 'pointer' }} className="mt-8 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
                       
                    </ul>
                </div>

                {/* Google Map  */}
                <div className="relative h-full">
                    <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="left-0 top-0 h-[500px] w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        allowfullscreen></iframe>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Contact;
