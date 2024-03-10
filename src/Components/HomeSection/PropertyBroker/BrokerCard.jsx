/* eslint-disable react/prop-types */
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const BrokerCard = ({ broker }) => {
  const { name, image, contact, experience, socialMedia } = broker;

  return (
    <div className="w-56
     h-64 rounded-tl-2xl rounded-br-2xl border-2 border-[#e33226] overflow-hidden group mt-10">
      <div className="bg-white h-40 w-44 overflow-hidden rounded-tl-2xl rounded-br-2xl relative">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-gray-800 w-full h-0 group-hover:h-2/3 transition-all duration-500">
          <div className="flex gap-3 absolute -bottom-7 group-hover:bottom-1 transition-all duration-500 left-[50%] -translate-x-[50%]">
            <a
              href={socialMedia.linkedin}
              className="text-white bg-[#e33226] h-7 w-7 rounded-full flex items-center justify-center"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialMedia.twitter}
              className="text-white bg-[#e33226] h-7 w-7 rounded-full flex items-center justify-center"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-medium mt-1 hover:text-[#e33226]">
          {name}
        </h3>
        <p className="text-xs text-center -mt-1 text-[#e33226]">{contact.email}</p>
        <p className="text-xs text-center -mt-1 text-[#e33226]">{contact.experience}</p>
      </div>
    </div>
  );
};

export default BrokerCard;
