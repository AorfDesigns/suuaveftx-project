import React from "react";
import { fashionDsignRightSection } from "../../utils/utils";
import FashionDesignSectionCard from "../../../components/FashionDesignSectionCard";

const ImageDesigners = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-96">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url('/dev-images/imagedesigners.png')`,
        }}
      />
      {/* Right section */}
      <div className="bg-[#124456] px-14  pt-8 pb-14">
        <p className="text-[#049AD1] font-medium text-2xl">
          FOR FASHION DESIGNERS/BRANDS
        </p>
        <p className="font-medium text-[50px] text-white mt-3 leading-[54px]">
          Access Africa’s top fashion{" "}
          <span className="italic font-thin">artists</span> in few steps.
        </p>

        <div className="flex flex-col gap-5 mt-6">
          {fashionDsignRightSection.map((item, idx) => (
            <FashionDesignSectionCard
              key={idx}
              title={item.title}
              btnText={item.btnText}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageDesigners;
