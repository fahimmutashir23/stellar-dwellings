

const ResidentialApartment = () => {
  return (
    <div>


      <div className="relative mt-24">

        <div
          className="h-[calc(100vh-300px)] border-2 w-full"
          style={{
            backgroundImage: `url(https://themes.pixelstrap.com/sheltos/assets/images/others/subscribe-bg.jpg
)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
          }}
        ></div>

        <div className="absolute -top-4 inset-0 bg-white h-6"></div>
        <div className="absolute -bottom-4 w-full bg-white h-6"></div>
        <div className="absolute -right-4 -top-2 w-6 bg-white h-[calc(100%+50px)]"></div>
        <div className="absolute -left-4 -top-1 w-6 bg-white h-[calc(100%+50px)]"></div>

        <div className="absolute inset-0 flex items-center justify-center mx-auto rounded-xl ">
          <div className=" w-6/12 bg-white bg-opacity-80 flex shadow-xl shadow-black rounded-xl">
            <div className="flex-1 relative">
              <img
                src="https://themes.pixelstrap.com/sheltos/assets/images/blog/4.jpg
"
                alt=""
                className="rounded-r-2xl h-[310px] w-[350px] object-cover"
              />
            </div>

            <div className="w-6/12 h-full my-auto px-6">
              <div className="py-2">
                <h2 className="text-xl uppercase font-bold text-black mb-5">
                  Residential Apartment
                  <div className="mt-1 h-1 w-10 bg-[#e33226] rounded-full mx-auto"></div>
                </h2>

                <div className="">
                  Explore a variety of Modern, Stylish, Safe & Comfortable Furnished homes without leaving yours.
                </div>

                <button className='bg-[#e33226] px-5 py-2 text-white rounded-lg font-semibold mt-5'>Explore More</button>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResidentialApartment