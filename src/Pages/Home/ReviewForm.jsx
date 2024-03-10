


const ReviewForm = () => {



  return (
    <>
      <div className="shadow-xl h-auto w-fit p-10 bg-[#F9F9F9]">
        <form >
          {/* div for rating and image upload */}
          <div className="flex-1 gap-6 mb-5">
            <div className="text-[#666666] flex flex-col">
              <p className="text-xs mb-2">Your ratings for this property</p>
              <input
                type="number"
                min={0}
                max={5}
               
                className="p-2 rounded-md w-full"
                required
              />
            </div>
            <div className="text-black">
              <label className="text-xs mb-4">
                Upload Image
                <input
                  type="file"
                  required
                  className=""
                />
              </label>
              
            </div>
          </div>
          
          <textarea
       
            className="textarea h-40 w-full mt-3 mb-4"
            placeholder="Please enter your review"
            required
          ></textarea>
          <div className=" my-3 flex justify-start items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <p className=" text-sm text-gray-400">
              Save my name, email, website address in this browser for the next
              time I comment.
            </p>
          </div>
          <input
            type="submit"
            value="Submit Review"
            className=" rounded px-8 py-4 mt-3 bg-[#EC3323] hover:bg-[#002172] text-white mb-4"
          />
        </form>
      </div>
    </>
  );
};
export default ReviewForm;