import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const CustomButton = ({ text = "Get Started", href, className, onPress }) => {
  return (
    <Button
      className={`font-proximanova bg-[radial-gradient(circle,#FFFFFF,#CCE7F2)] text-[#0A4A66] font-medium px-6 py-3 rounded-full shadow-md ${className}`}
      onClick={onPress}
    >
      {href ? <Link href={href}>{text}</Link> : text}
    </Button>
  );
};

export default CustomButton;
