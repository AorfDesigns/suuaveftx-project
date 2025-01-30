import React from "react";
import CustomButton from "../../../components/CustomButton";

const ExploreComponent = () => {
  return (
    <div className="p-14  bg-[#fafafa] pb-36 ">
      <div className="p-3 py-2 bg-customPrimary w-fit text-customWhiteBgText  font-medium">
        FIND TALENTED FASHION ARTISTS
      </div>
      <p className="mt-1 font-semibold text-[40px] text-[#404040] lg:w-[38%]">
        Explore and get license to our top-rated designs.
      </p>
      <div className="grid gap-3 grid-cols-[1fr_1fr_1.3fr]">
        <div
          className="bg-cover object-top  col-span-2 min-h-96 rounded-lg bg-top"
          style={{
            backgroundImage: `url('/dev-images/fashiondesigner.png')`,
          }}
        />
        <div
          className="bg-cover bg-no-repeat bg-center object-top row-span-2 w-full h-full min-h-96 rounded-lg pb-24 flex items-end justify-center"
          style={{
            backgroundImage: `url('/dev-images/fashiondesigner3.png')`,
          }}
        >
          <div className="bg-black/30 rounded-lg p-4 text-white w-80 flex items-center flex-col text-center">
            <p>All designs are licensable and available for collaborations.</p>
            <p>
              You are just a step away from owning the right to use these
              designs
            </p>
            <CustomButton text="Expplore More" className="mt-8" />
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat object-top w-full h-full min-h-96 rounded-lg bg-center"
          style={{
            backgroundImage: `url('/dev-images/Gropie2.png')`,
          }}
        />

        <div
          className="bg-cover object-top w-full h-full min-h-96 rounded-lg bg-center"
          style={{
            backgroundImage: `url('/dev-images/fashiondesigner2.png')`,
          }}
        />
      </div>
    </div>
  );
};

export default ExploreComponent;
