
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import moment from "moment";

/* eslint-disable react/prop-types */
const BookingsModal = ({ info }) => {
    const axiosSecure = useAxiosSecure()
    const time = moment().format('DD/MM/YYYY');

  const handleBookings = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const bookingsInfo = {
        name,
        email,
        phone,
        houseName : info.name,
        city : info.city,
        ownerEmail : info.ownerEmail,
        bookingsDate: time
    }

    const res = await axiosSecure.post('/bookings', bookingsInfo);
    console.log(res.data);
    if(res.data.insertedId){
        toast.success('Bookings Successful')
        e.target.reset()
    }
  };

  return (
    <div>
      <dialog id="modal_1" className="modal">
        <div className="modal-box rounded-sm p-2 max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex gap-1">
            <div className="flex-1">
              <h1 className="font-bold ">
                Descriptions :{" "}
                <span className="font-medium text-gray-500 text-sm">
                  {info.description}
                </span>
              </h1>
              <p>
                <span className="font-bold">Room Size : </span> {info.room_size}
              </p>
              <p>
                <span className="font-bold">Bedrooms : </span> {info.bedroom}
              </p>
              <p>
                <span className="font-bold">Bathrooms : </span> {info.bathroom}
              </p>
              <p>
                <span className="font-bold">Address : </span> {info.address}
              </p>
              <p>
                <span className="font-bold">Contact : </span>{" "}
                {info.phone_number}
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
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    // pattern="[+880]"
                    name="phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Phone number (123-456-7890)
                  </label>
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
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BookingsModal;
