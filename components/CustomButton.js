import { Button } from "@heroui/react";
import React from "react";

const CustomButton = ({ text = "Get Started", className }) => {
  return (
    <Button
      className={`font-proximanova bg-[radial-gradient(circle,#FFFFFF,#CCE7F2)] text-[#0A4A66] font-medium px-6 py-3 rounded-full shadow-md ${className}`}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
