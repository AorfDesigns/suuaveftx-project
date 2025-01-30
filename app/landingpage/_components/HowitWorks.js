import { Image } from "@heroui/react";

const HowItWorks = () => {
  return (
    <div className="px-14 bg-customWhite py-5">
      {/* Grouped Section */}
      <div className="">
        {/* Disabled Button */}
        <button className="bg-[#EAF9FF] text-[#035A7A] px-6 py-3 cursor-default rounded-full text-lg  flex items-center gap-2">
          <Image
            src="/dev-images/Microphone.png" // Replace with your icon's path
            alt="Icon"
            width={20}
            draggable={false}
          />
          How it works
        </button>

        {/* Supporting Text */}
        <p className="mt-6 text-[32px] md:text-4xl text-customTextBlack font-semibold">
          Let&apos;s help you achieve your goals.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-6">
        {/* Mobile Image */}
        <Image
          src="/dev-images/Yimages.png" // Replace with your image path
          alt="How It Works Illustration"
          layout="responsive"
          className="mx-auto sm:hidden" // Hide on larger screens
        />

        {/* Desktop Image */}
        <Image
          src="/dev-images/Youtube.png" // Replace with your image path
          alt="How It Works Illustration"
          className="w-full hidden sm:block" // Show only on larger screens
        />
      </div>
    </div>
  );
};

export default HowItWorks;
