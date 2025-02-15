import React from "react";
import { BackgroundBeams } from "../../../components/BackgroundBeam";
import { Image } from "@heroui/react";
import CustomButton from "../../../components/CustomButton";
import HeroSlimCard from "../../../components/HeroSlimCard";
import {
  SvgCollabIcon,
  SvgCopyRightIcon,
  SvgCUserIcon,
  SvgProtectIcon,
} from "../../utils/SvgIcons";
import { ScrollParallax } from "react-just-parallax";

const HeroSection = () => {
  return (
    <div className="relative ">
      <BackgroundBeams />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 min-h- bg-customNavBg pb-8 ">
        <div className="col-span-2 h-6"></div>
        <div className="space-y-8 place-self-center w-[87%]">
          <div className="grid grid-cols-2 grid-rows-2 text-white w-fit ml-4  ">
            <Image
              src="/dev-images/userImages.png" // Replace with your mobile image path
              alt="African Fashion Artist"
              className="row-span-2 place-self-end mr-2"
              width={140}
              // height={80}
              disableSkeleton
              draggable={false}
            />
            <Image
              src="/dev-images/rating.png" // Replace with your mobile image path
              alt="African Fashion Artist"
              className="w-[120px] "
              width={120}
              // height={120}
              disableSkeleton
              draggable={false}
            />
            <p className="text-white z-20">Over 5000 Fashion Artists</p>
          </div>
          <p className="font-medium text-[48px] text-white pl-14 leading-[60px] z-30">
            Find and Collaborate with the Ideal{" "}
            <span className="italic font-[40]">African</span> Fashion Artists.
          </p>
          <p className="text-customGray pl-14 w-[90%] text-[17px] z-30">
            Unlock the potential of fashion collaboration and merge creativity,
            culture and expertise to create groundbreaking culturally-rich
            designs.
          </p>
          <CustomButton className="ml-14 w-40 text-lg h-[52px]" />
        </div>
        <div className="pr-14 py-14 relative">
          <ScrollParallax isAbsolutelyPositioned strength={0.2} zIndex={30}>
            <HeroSlimCard
              text="Streamlined Collaboration"
              svg={<SvgCollabIcon className="size-5" />}
              className="absolute top-12"
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned strength={0.44} zIndex={30}>
            <HeroSlimCard
              text="Community Development"
              svg={<SvgCUserIcon className="size-5" />}
              className="absolute right-8"
            />
          </ScrollParallax>
          <Image
            alt="hero_right"
            src="/dev-images/heroRight.png"
            className="w-[84%] place-self-end"
            disableSkeleton
          />
          <ScrollParallax isAbsolutelyPositioned strength={0.05} zIndex={30}>
            <HeroSlimCard
              text="Copyright Protection"
              svg={<SvgCopyRightIcon className="size-5" />}
              className="absolute bottom-4"
            />
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned strength={0.14} zIndex={30}>
            <HeroSlimCard
              text="Secure Payment"
              svg={<SvgProtectIcon className="size-5" />}
              className="absolute right-20 bottom-20"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
