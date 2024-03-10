import PageTitle from "../../../Utils/PageTitle/PageTitle";

const HouseLooks = () => {
  return (
    <div>
      <div className="flex justify-center  md:mb-20 lg:mb-32 mb-2  ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
            <div className="flex flex-col  mb-5 md:mb-10  md:items-start items-center justify-center  space-y-3 px-8 text-center ">
              <PageTitle title="Our House Looks" />
            </div>
            <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-[90vw] items-center justify-center ">
              <div className="lg:w-40  w-64 h-40 hover:shadow-gray-400 shadow-[0_0_50px_#00000028] duration-300 overflow-hidden hover:scale-105 rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?bedrooms"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="w-32 lg:w-40 h-32 hover:shadow-gray-400 shadow-[0_0_50px_#00000028] duration-300 hover:scale-105 overflow-hidden rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?beds"
                    alt=""
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-48  hover:shadow-gray-400 shadow-[0_0_50px_#00000028] duration-300  overflow-hidden hover:scale-105 rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?room"
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="lg:w-60 w-64 h-96 hover:shadow-gray-400 shadow-[0_0_50px_#00000028] duration-300   overflow-hidden hover:scale-105 rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?house"
                  alt=""
                  className=""
                />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div className="w-32 lg:w-40 h-48 hover:shadow-gray-400 shadow-[0_0_50px_#00000028] duration-300  overflow-hidden hover:scale-105 rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?bedrooms"
                    alt=""
                    className=""
                  />
                </div>
                <div className="w-32 lg:w-40 h-32 hover:shadow-gray-400 shadow-[0_0_50px_#00000028] duration-300  overflow-hidden hover:scale-105 rounded-xl ">
                  <img
                    src="https://source.unsplash.com/random/300x500/?bedroom"
                    alt=""
                    className=""
                  />
                </div>
              </div>
              <div className="lg:w-40 w-64 h-40 hover:shadow-gray-400 shadow-[0_0_50px_#00000028] duration-300  overflow-hidden hover:scale-105 rounded-xl ">
                <img
                  src="https://source.unsplash.com/random/300x500/?house"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  );
};

export default HouseLooks;