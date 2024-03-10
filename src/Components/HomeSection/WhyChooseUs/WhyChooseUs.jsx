import PageTitle from "../../../Utils/PageTitle/PageTitle";
import handshakeIcon from "../../../assets/whyChoose/handshake.png";
import clockIcon from "../../../assets/whyChoose/Clock.png";
import homeIcon from "../../../assets/whyChoose/home.png";
import searchIcon from "../../../assets/whyChoose/search.png";
import secureIcon from "../../../assets/whyChoose/securePay.png";
import thumbsUpIcon from "../../../assets/whyChoose/thumbsup.png";

const content = [
  {
    icon: homeIcon,
    title: "Wide Range of Properties",
    description:
      "Explore a diverse portfolio of rental properties, from cozy apartments to spacious houses, tailored to meet your unique preferences and lifestyle.",
  },
  {
    icon: searchIcon,
    title: "Intuitive Search",
    description:
      "Our user-friendly interface and advanced search options make finding your dream home a breeze. Filter properties based on location, budget, and amenities with ease.",
  },
  {
    icon: handshakeIcon,
    title: "Professional Guidance",
    description:
      "Receive expert guidance from our experienced team of real estate professionals. We're here to assist you at every step, ensuring a smooth and informed decision-making process.",
  },
  {
    icon: clockIcon,
    title: "Time-Saving Efficiency",
    description:
      "Save time with our efficient platform. Quick property searches, streamlined processes, and responsive customer support mean you can find and secure your ideal rental property swiftly.",
  },
  {
    icon: secureIcon,
    title: "Secure Transactions",
    description:
      "Ensure secure and transparent transactions. Our platform prioritizes your safety and privacy, providing a trustworthy environment for all your rental transactions.",
  },
  {
    icon: thumbsUpIcon,
    title: "Client Satisfaction",
    description:
      "Join a community of satisfied clients who have found their perfect homes through our platform. Your satisfaction is our priority, and we strive to exceed your expectations.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="mt-14">
      <PageTitle title="Why Choose Us" />
      <div className="grid grid-cols-3 gap-5 mt-10">
        {content?.map((item, idx) => ( 
          <div
            key={idx}
            className="rounded-2xl border-4 border-[#e33226] p-3 bg-white flex flex-col justify-center items-center gap-3 group hover:shadow-xl transition-all duration-500 hover:bg-white hover:text-black hover:scale-110"
          >
            <div className="h-24 w-24 rounded-lg bg-gray-100 overflow-hidden p-3 group-hover:rounded-full transition-all duration-500">
              <img src={item.icon} alt="" className=""/>
            </div>
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <p className="text-gray-600 text-center group-hover:text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
