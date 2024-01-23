import { useState } from "react";

const HomeNav = () => {
    const [value, setValue] = useState(0)
  
  
  return (
    <div className="h-16 bg-gray-300">
      <p className="-mb-2">price range</p>
      <div className="w-1/2">
        <input
          type="range"
          onChange={(e)=>setValue(e.target.value)}
          min="0"
          max="2500"
          value={value}
          className="h-2 range"
          step='500'
        />
        <div className="w-full flex justify-between text-xs px-2">
            <span>00</span>
            <span>500</span>
            <span>1000</span>
            <span>1500</span>
            <span>2000</span>
            <span>2500</span>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
