import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import BtnLoader from "../../Utils/BtnLoader/BtnLoader";
import axios from "axios";
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

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const img = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", img);

    axiosPublic
      .post(
        "/fileUpload",
        formData,
        {
          onUploadProgress: (data) => {
            setProgress(Math.round((data.loaded / data.total) * 100));
          },
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((res) => {
        if (res.data.insertedId) {
          refetch();
          setMessage("Upload Successful");
          setLoading(false);
          setProgress(0)
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="min-h-[calc(100vh-386px)]">
      <form onSubmit={handleClick} className="flex flex-col gap-3">
        <input
          type="file"
          name="image"
          multiple
          className="border py-3 bg-slate-200 max-w-fit"
        />
        <button className="btn w-24" type="submit">
          {loading ? <BtnLoader /> : "Submit"}
        </button>
      </form>
      {progress > 0 && <ProgressBar
        completed={progress}
        maxCompleted={100}
        width="50%"
        height="15px"
        bgColor="blue"
        transitionTimingFunction="ease"
        labelColor="yellow"
      />}
      <p>{message}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        {data.map((item) => (
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
      </div>
    </div>
  );
};

export default AllHouse;
