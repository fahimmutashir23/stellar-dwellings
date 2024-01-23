/* eslint-disable react/prop-types */
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import PageTitle from "../PageTitle/PageTitle";
import { useParams } from "react-router-dom";

const UpdateHouse = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [bedroom, setBedroom] = useState(0);
  const [bathroom, setBathroom] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const city = form.city.value;
    const address = form.address.value;
    const date = form.date.value;
    const room_size = form.room_size.value;
    const description = form.description.value;
    const phone = form.phone.value;
    const image = form.image.value;
    const bedrooms = bedroom;
    const bathrooms = bathroom;
    const prices = form.price.value;

    const houseInfo = {
      name,
      ownerEmail: "taslimit23@gmail.com",
      city,
      address,
      bathroom: bathrooms,
      bedroom: bedrooms,
      room_size,
      available_date: date,
      rent_price: prices,
      phone_number: phone,
      description,
      image,
    };

    const res = await axiosSecure.put(`/houses/${id}`, houseInfo);

    if (res.data.modifiedCount > 0) {
      e.target.reset();
      toast.success("Room Update successfully", {
        style: {
          backgroundColor: "#00c04b",
          color: "white",
          borderRadius: "4px",
          padding: "4px 2rem",
        },
      });
    }
  };

  return (
    <div>
      <div>
        <div>
          <PageTitle title="Update House" />
        </div>
        <form
          onSubmit={handleSubmit}
          className=" mx-auto border-4 p-2 bg-white shadow-lg text-black space-y-8"
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                // defaultValue={name}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                House Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                // defaultValue={address}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Address
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="city"
                // defaultValue={city}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                City
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="room_size"
                // defaultValue={room_size}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Room Size
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                // pattern="[+880]"
                name="phone"
                // defaultValue={phone_number}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="image"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                House Image
              </label>
            </div>
          </div>
          <div className="flex justify-between md:gap-6">
            <div className="">
              <span>Bedroom</span>
              <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
                <button
                  onClick={() => setBedroom(bedroom + 1)}
                  className="text-2xl border-r-[2px] pr-4"
                >
                  +
                </button>
                <span className="text-lg">{bedroom}</span>
                <button
                  onClick={() => setBedroom(bedroom - 1)}
                  className={`text-2xl border-l-[2px] pl-4 ${
                    bedroom <= 0 && "btn-disabled"
                  }`}
                >
                  -
                </button>
              </div>
            </div>
            <div className="">
              <span>Bathroom</span>
              <div className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2">
                <button
                  onClick={() => setBathroom(bathroom + 1)}
                  className="text-2xl border-r-[2px] pr-4"
                >
                  +
                </button>
                <span className="text-lg">{bathroom}</span>
                <button
                  onClick={() => setBathroom(bathroom - 1)}
                  className={`text-2xl border-l-[2px] pl-4 ${
                    bathroom <= 0 && "btn-disabled"
                  }`}
                >
                  -
                </button>
              </div>
            </div>
            <div className="">
              <span>Rent Price</span>
              <div className="py-2 rounded-md flex items-center gap-5 border-[2px] mt-2">
                <input
                  type="number"
                  name="price"
                  //   defaultValue={rent_price}
                  id=""
                  className="w-32 focus:ring-0 focus:outline-none px-2"
                />
              </div>
            </div>
            <div>
              <span>Date</span>
              <input
                type="date"
                name="date"
                className="px-4 py-1 rounded-md flex items-center gap-5 border-[2px] max-w-fit mt-2"
              />
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              id="message"
              name="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-0 focus:outline-none"
              placeholder="Write Descriptions here..."
            ></textarea>
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update House
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateHouse;
