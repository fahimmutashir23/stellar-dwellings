import { Link } from "react-router-dom";
import bg from "../../assets/Background/signUp3.jpg";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignIn = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await axiosPublic(`/auth?email=${email}&password=${password}`);
    console.log(res.data);
    if (res.data.message === 'success') {
      e.target.reset();
      setErrorMsg("");
      toast.success(`Login Successfully`, {
        style: {
          backgroundColor: "#00c04b",
          color: "white",
          borderRadius: "4px",
          padding: "4px 2rem",
        },
      });

      axiosPublic.post('/jwt', {email: email})
      .then(res => {
          if(res.data.token){
              localStorage.setItem('access', res.data.token)
          } else{
              localStorage.removeItem('access')
          }
      })
    }
    if(res.data.message === 'failed'){
        setErrorMsg("Email and Password are incorrect.")
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }}
      className="min-h-[calc(100vh-64px)] flex items-center"
    >
      <div className="h-full w-full bg-white fixed top-[64px] bg-opacity-90"></div>
      <form onSubmit={handleSubmit} className="w-1/3 mx-auto border-4 p-2 bg-white shadow-lg z-30">
        <div className="text-center my-4">
          <h1 className="text-2xl uppercase font-bold text-blue-600">
            sign In
          </h1>
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
            type="password"
            name="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </button>
        </div>
        <p className="mt-3 text-red-500">{errorMsg}</p>
        <p className="mt-5">
          {"Don't have an account? Please"}{" "}
          <Link to="/signUp" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
