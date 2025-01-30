"use client";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from "@heroui/react";
import React from "react";
import CustomButton from "./CustomButton";

const CustomNavbar = () => {
  const [textStyle, setTextStyle] = React.useState("text-white");
  return (
    <Navbar
      shouldHideOnScroll
      className="w-full items-center justify-between px-4 font-satoshi"
      classNames={{ wrapper: "max-w-[1700px] mx-auto" }}
      onScrollPositionChange={(position) => {
        if (position > 600) {
          setTextStyle("text-yellow-500");
        } else {
          setTextStyle("text-white");
        }
      }}
    >
      <NavbarBrand>
        <Image
          src="/dev-images/navLogo.png"
          alt="Logo"
          className="w-44 py-4" // Reduced space between the logo and form
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-14 " justify="center">
        <NavbarItem>
          <Link href="#" className={`${textStyle} transition duration-300`}>
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={`${textStyle} transition duration-300`}>
            How it works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={`${textStyle} transition duration-300`}>
            FAQs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className={`${textStyle} transition duration-300`}>
            About us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="space-x-8">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className={`${textStyle} transition duration-300`}>
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <CustomButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
