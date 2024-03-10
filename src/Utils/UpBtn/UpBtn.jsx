import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { animateScroll as scroll } from 'react-scroll';
import "./animate.css"

const UpBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 50) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);

    const scrollToTop = () => {
        scroll.scrollToTop({
          duration: 600,
          smooth: 'easeInOutQuad'
        });
      };

  return (
    <div className={`flex justify-end fixed right-10 transition-all duration-500 z-50 ${isVisible? 'bottom-2': '-bottom-16'}`}>
      <button onClick={scrollToTop} className="bg-[#e33226] p-3 rounded-full hover:bg-transparent border-2 border-green-800 transition-all duration-300 group">
        <MdKeyboardDoubleArrowUp className="text-3xl text-white group-hover:text-[#e33226] animate-bounce transition-all duration-300" />
      </button>
    </div>
  );
};

export default UpBtn;
