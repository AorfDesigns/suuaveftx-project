import Image from "next/image";
import {
  FaLock,
  FaCopyright,
  FaUserCheck,
  FaExchangeAlt,
  FaGavel,
  FaBullseye,
} from "react-icons/fa";
import { homePageCardData } from "../../utils/utils";
import WhySuuaveCard from "../../../components/WhySuuaveCard";
import CustomButton from "../../../components/CustomButton";

const WhySuaave = () => {
  return (
    <div className="py-8  bg-customWhite">
      <div className="text-center mb-4 font-semibold font-proximanova text-lg uppercase p-2 mx-auto text-customWhiteBgText bg-customPrimary w-fit rounded-md">
        Why Suuave ?
      </div>

      {/* Description */}
      <p className="text-center text-md text-[40px] text-gray-700 mb-10 font-[500] ">
        Enjoy unlimited advantages of easy and <br /> smooth collaboration
        process.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-14 gap-y-12">
        {homePageCardData.map((card, index) => (
          <WhySuuaveCard
            key={index}
            title={card.title}
            text={card.text}
            svgIcon={card.image}
          />
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="text-center w-full mt-8">
        <CustomButton
          text="Join 5000+ Members"
          className="shadow-md h-12 mx-auto"
        />
      </div>
      {/* <div className="text-center mt-[8px] md:mt-[-250px]">
        <button
          className="text-[#035A7A] font-bold px-8 py-3 rounded-full text-lg hover:opacity-90 transition"
          style={{
            background: "radial-gradient(circle, #EAF9FF 19%, #CCE7F2 100%)",
          }}
        >
          Join 5000+ Members
        </button>
      </div> */}
    </div>
  );
};

export default WhySuaave;
