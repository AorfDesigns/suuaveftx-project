'use client'
// import Image from "next/image";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../../../components/CustomButton";
import { Checkbox, Form, Input} from "@heroui/react";

export default function SignUpForm() {
  const [errors, setErrors] = useState({});
 const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setSubmitted(data);
  };
 
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreeToTerms: e.target.checked });
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
  <div className="lg:hidden flex justify-center items-center">
    <Image
      src="/dev-images/logo.png"
      alt="Background Image"
      layout="intrinsic"
      width={70}
      height={60}
      className="rounded-lg object-contain"
    />
  </div>
  

      {/* Right Section */}
      <div className="p-6 h-auto flex flex-col justify-center bg-[#FAFAFA] shadow-md rounded-2xl mt-8">
        <h1 className="text-3xl font-semibold text-gray-700 mt-[42px] text-center">
          Create New Account
        </h1>

        <button className="w-full lg:w-full flex items-center justify-center gap-2 text-base font-medium text-gray-600 border border-gray-300 rounded-lg px-4 py-2 mt-8 hover:bg-gray-100">
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

        <Form onSubmit={onSubmit} validationBehavior="native" className="w-full text-center">
          <div className="flex gap-4 mt-4">
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="First Name"
        labelPlacement="outside"
        name="firstname"
        placeholder="First Name"
        type="name"
        className="w-44 lg:w-64 border-1 border-[#D1D1D1] rounded-[8px]"
      />
       <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Last Name"
        labelPlacement="outside"
        name="firstname"
        placeholder="Last Name"
        type="name"
        className="w-44 lg:w-64  border-1 border-[#D1D1D1] rounded-[8px]"
      />
    </div>
    <div className="mt-4 w-full">
    <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="ocean"
        type="name"
        className="w-full block border-1 border-[#D1D1D1] rounded-[8px]"
      />
      </div>
      <div className="mt-4 w-full">
    <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="ocean"
        type="email"
        className="w-full block border-1 border-[#D1D1D1] rounded-[8px]"
      />
      </div>
      <div className=" w-full mt-4">
  <Input
    isRequired
    errorMessage="Please enter a valid username"
    label="Create Password"
    labelPlacement="outside"
    name="username"
    placeholder="Enter a password"
    type="password"
    className="w-full block border border-[#D1D1D1] rounded-[8px] "
  />
</div>
<p className="text-sm text-gray-500 mt-1 ml-2">Password must contain at least 8 characters</p>
 <div className="mt-4 flex items-start gap-2 text-left">
 <Checkbox
          isRequired
          classNames={{
            label: "text-small",
          }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          value="true"
          onValueChange={() => setErrors((prev) => ({...prev, terms: undefined}))}
        >
         By creating account, I agree to Suuave <span className="text-[#0D2FA8]">Terms and conditions</span> 
        </Checkbox>
        {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

 </div>
 <div className="w-96 flex justify-center items-center mt-4 mx-auto">
  <CustomButton text="Create Account" href="/otp" className="w-96" />
</div>


    </Form>

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
