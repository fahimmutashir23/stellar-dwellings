
const Reviews = () => {
  return (
    <div>
    <div>
      <h3 className="poppins-font text-[24px] font-semibold my-6">
        Reviews
      </h3>
      <div>
        <div className="flex gap-5">
          <div className="min-w-[100px]">
            <img
              className="rounded-full w-[100px] h-[100px]"
              src="https://ifingerstudio.com/landiox/wp-content/uploads/2022/11/insta-07.jpg"
              alt="Reviewer image"
            />
          </div>
          <div>
            <div className="flex flex-col  md:flex-row items-center justify-between">
              <h3 className="poppins-font text-xs md:text-[18px] font-semibold">
                review?.reviewerName
              </h3>
              
              <div>
                rating
              </div>
            </div>
            <div>
              <p className="text-[14px] text-[#666666] mt-[12px] mb-[8px]">
                review?.date
              </p>
              <p className="text-[#666666]">review?.reviewText</p>
            </div>
            <div className="flex gap-5 mt-6">
              <div>
                <img
                  className="rounded-md w-[275px]"
                  src="https://ifingerstudio.com/landiox/wp-content/uploads/2022/11/insta-07.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
      </div>
    </div></div>
  )
}

export default Reviews