import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import BtnLoader from "../../Utils/BtnLoader/BtnLoader";
import ProgressBar from "@ramonak/react-progress-bar";

const AllHouse = () => {
  const axiosPublic = useAxiosPublic();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);


  const { data, isLoading, refetch } = useQuery({
    queryKey: ["homeImg"],
    queryFn: async () => {
      const res = await axiosPublic("/fileUpload");
      return res.data;
    },
  });

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const img = e.target.image.files[0];
  //   const formData = new FormData();
  //   formData.append("video", img);

  //   axiosPublic
  //     .post(
  //       "/fileUpload",
  //       formData,
  //       {
  //         onUploadProgress: (data) => {
  //           setProgress(Math.round((data.loaded / data.total) * 100));
  //         },
  //       },
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     )
  //     .then((res) => {
  //       if (res.data.insertedId) {
  //         refetch();
  //         setMessage("Upload Successful");
  //         setLoading(false);
  //         setProgress(0);
  //       }
  //     });
  // };


const handleSendOTP = () => {
  axiosPublic.post('/sendOTP', {email : 'taslimit23@gmail.com'})
  .then(res => {
    setMessage(res.data);
  })
}

const handleOtpSubmit = (e) => {
  e.preventDefault()
  const otp1 = e.target.otp1.value
  const otp2 = e.target.otp2.value
  const otp3 = e.target.otp3.value
  const otp4 = e.target.otp4.value
  const otp = parseInt(otp1 + otp2 + otp3 +otp4)

  const info = {
    email : 'taslimit23@gmail.com',
    otp
  }
  axiosPublic.post('/getOTP', info)
  .then(res => {
    setMessage(res.data);
  })
  e.target.reset()
}

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="min-h-[calc(100vh-386px)]">
      {/* <form onSubmit={handleClick} className="flex flex-col gap-3">
        <input
          type="file"
          name="image"
          multiple
          className="border py-3 bg-slate-200 max-w-fit"
        />
        <button className="btn w-24" type="submit">
          {loading ? <BtnLoader /> : "Submit"}
        </button>
      </form> */}
      {/* {progress > 0 && (
        <ProgressBar
          completed={progress}
          maxCompleted={100}
          width="50%"
          height="15px"
          bgColor="blue"
          transitionTimingFunction="ease"
          labelColor="yellow"
        />
      )} */}
      {/* <p>{message}</p> */}

      {/* <div className="mt-10 flex flex-wrap gap-3">
        {data?.map((item) => (
          <div key={item._id}>
            <img src={item.filename} alt="" />
            <div className="w-52 h-full overflow-hidden">
              <img
                src={item.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col justify-items-center items-center">
        <button onClick={handleSendOTP} className="btn bg-blue-500 text-white mt-16 hover:bg-blue-700">Generate OTP</button>
        {message.beforeOtpMessage ? <p className="text-red-500 text-sm mb-5 mt-2">{message.beforeOtpMessage}</p> : ""}
        <form onSubmit={handleOtpSubmit} className="border p-3 mt-3 max-w-fit flex flex-col border-blue-400 rounded-md shadow-lg">
          <div className="space-x-3">
          <input type="text" maxLength={1} name="otp1" id="" className="border px-5 py-5 w-14 rounded-md bg-slate-200 border-blue-600 text-2xl" />
          <input type="text" maxLength={1} name="otp2" id="" className="border px-5 py-5 w-14 rounded-md bg-slate-200 border-blue-600 text-2xl" />
          <input type="text" maxLength={1} name="otp3" id="" className="border px-5 py-5 w-14 rounded-md bg-slate-200 border-blue-600 text-2xl" />
          <input type="text" maxLength={1} name="otp4" id="" className="border px-5 py-5 w-14 rounded-md bg-slate-200 border-blue-600 text-2xl" />
          </div>
          <button type="submit" className="p-3 border mt-4 bg-blue-500 text-white rounded-md text-lg">Submit</button>
          {message.afterOtpMessage? <p className="text-red-500 text-sm mb-5 mt-2">{message.afterOtpMessage}</p> : ""}
        </form>
      </div>
    </div>
  );
};

export default AllHouse;
