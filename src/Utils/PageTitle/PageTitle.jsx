/* eslint-disable react/prop-types */


const PageTitle = ({title}) => {
    
    const divide = title?.split(' ')
    const greenText = divide[divide.length-1]
    const blackText = divide.slice(0 , -1)

    return (
         <div className="flex justify-center my-3">
      <div>
        <h1 className="text-3xl font-bold border-b-4 border-r-4 border-black pr-2 uppercase">
          {blackText.map(text => (
            <span className="text-gray-600" key={text}> {text} </span>
          ))} <span className="text-violet-600 ">{greenText}</span>
        </h1>
      </div>
    </div>
    );
};

export default PageTitle;