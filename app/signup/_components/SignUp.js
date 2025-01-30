'use client'
// import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreeToTerms: e.target.checked });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 rounded-lg gap-x-0  pt-4">
      {/* Left Section */}
      <div className="hidden sm:flex justify-center items-start">
    <Image
      src="/dev-images/bg.png"
      alt="Background Image"
      layout="intrinsic"
      width={474}
      height={582}
      className="rounded-lg object-contain"
    />
  </div>

      {/* Right Section */}
      <div className="p-6 h-auto flex flex-col justify-center bg-[#FAFAFA] shadow-md rounded-2xl mb-20">
        <h1 className="text-3xl font-semibold text-gray-700 mt-[42px] text-center">
          Create New Account
        </h1>

        <button className="w-full flex items-center justify-center gap-2 text-base font-medium text-gray-600 border border-gray-300 rounded-lg px-4 py-2 mt-8 hover:bg-gray-100">
          <Image
            src="/dev-images/Google.png"
            alt="Google Logo"
            width={20}
            height={20}
          />
          Continue with Google
        </button>

        <div className="flex items-center justify-between mt-8">
          <hr className="w-full border-gray-300" />
          <span className="text-base text-gray-500 mx-2">Or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <label
                htmlFor="firstName"
                className="block text-base font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-base font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="username"
              className="block text-base font-medium text-gray-700 "
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div className="mt-8">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div className="relative mt-8">
            <label
              htmlFor="password"
              className="block text-base font-medium text-gray-700"
            >
              Create Password <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full mt-1 border rounded-md px-3 py-2 text-sm"
            />
             <p>*Password must contain at least 8 characters</p>
            <div
              className="absolute right-3 top-9 cursor-pointer"
              onClick={handlePasswordToggle}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} className="text-gray-500" />
              ) : (
                <AiOutlineEye size={20} className="text-gray-500" />
              )}
            </div>
          </div>

          <div className="flex items-center mt-8">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-base text-gray-600">
              By creating account.I agree to Suaave{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms and Conditions
              </a>
              .
            </label>
          </div>
          <div className="flex justify-center items-center mt-8">
  <button
    type="submit"
    className="w-4/5 bg-blue-500 text-white text-base rounded-full flex justify-center items-center pl-[24px] pr-[24px] pt-[16px] pb-[16px] mt-8 hover:bg-blue-600"
  >
    Create Account
  </button>
</div>

        </form>

        <p className=" mt-8 text-base text-center text-gray-600 mb-[42px]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#9FD2E5] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
