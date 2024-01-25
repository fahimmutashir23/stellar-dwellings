import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import moment from "moment";
import toast from "react-hot-toast";
import PageTitle from "../../Utils/PageTitle/PageTitle";
import useIsLogIn from "../../Hooks/useIsLogIn";
import PhoneInput from "react-phone-input-2";

const BookingPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const axiosSecure = useAxiosSecure();
  const time = moment().format("DD/MM/YYYY");
  const user = useIsLogIn();
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  useEffect(() => {
    axiosSecure(`/singleHouse/${id}`).then((res) => setData(res.data));
  }, [axiosSecure, id]);

  const checkValid = (number) => {
    const checkCountry = number.slice(0, 3);

    if (checkCountry !== "880") {
      setPhoneErr("You can select only Bangladesh's number");
    } else if (number.length !== 13) {
      setPhoneErr("");
      setPhoneErr("Enter valid number");
    } else {
      setPhoneErr("");
      return number;
    }
  };

  const handlePhone = (e) => {
    setPhone(checkValid(e));
  };

  const handleBookings = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const bookingsInfo = {
      name,
      email,
      phone,
      houseName: data.name,
      city: data.city,
      ownerEmail: data.ownerEmail,
      bookingsDate: time,
    };

    const res = await axiosSecure.post("/bookings", bookingsInfo);
    console.log(res.data);
    if (res.data.insertedId) {
      toast.success("Bookings Successful");
      e.target.reset();
    }
  };

  return (
    <div className="max-w-4xl mx-auto min-h-screen mt-10">
      <PageTitle title="Bookings Page" />
      {user?.email === data?.ownerEmail ? <p className="text-center mt-6 text-xl font-medium">You are not Booking this house</p> :
      <div className="flex gap-1 items-center justify-center border-4 rounded-md bg-white shadow-lg p-4">
        <div className="flex-1">
          <h1 className="font-bold text-black text-xl text-center mb-3">
            {data?.name}
          </h1>
          <h1 className="font-bold ">
            Descriptions :{" "}
            <span className="font-medium text-gray-500 text-sm">
              {data?.description}
            </span>
          </h1>
          <p>
            <span className="font-bold">Room Size : </span> {data?.room_size}
          </p>
          <p>
            <span className="font-bold">Bedrooms : </span> {data?.bedroom}
          </p>
          <p>
            <span className="font-bold">Bathrooms : </span> {data?.bathroom}
          </p>
          <p>
            <span className="font-bold">Address : </span> {data?.address}
          </p>
          <p>
            <span className="font-bold">Contact : </span> {data?.phone_number}
          </p>
        </div>
        <div className="divider lg:divider-horizontal divider-primary"></div>
        <div className="flex-1">
          <h1 className="text-center font-bold text-xl text-green-900 border-b-2 max-w-fit mx-auto border-slate-600 mb-4">
            Booking Form
          </h1>
          <form onSubmit={handleBookings}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                defaultValue={user?.name}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Last name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-10 w-full mb-5 group">
              <PhoneInput
                country={"bd"}
                value={phone}
                onChange={handlePhone}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
              />
              <p className="text-red-600 text-xs">{phoneErr}</p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-slate-600 hover:bg-blue-800 focus:outline-none font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2 text-center"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>}
    </div>
  );
};

export default BookingPage;
