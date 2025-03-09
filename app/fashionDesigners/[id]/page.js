"use client";

import {
  Button,
  Card,
  CardBody,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Image,
} from "@heroui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { SvgCautionIcon } from "../../utils/SvgIcons";
import CustomButton from "../../../components/CustomButton";

// const fetchProductDetails = async (id) => {
//   // Replace this with your actual API endpoint
//   const response = await fetch(`/api/products/${id}`);
//   return response.json();
// };

const ProductDetails = () => {
  // const router = useRouter();
  // const { id } = router.query; // Get product ID from the URL
  // const [product, setProduct] = useState(null);

  //   useEffect(() => {
  //     if (id) {
  //       fetchProductDetails(id).then((data) => setProduct(data));
  //     }
  //   }, [id]);

  //   if (!product) return <p>Loading...</p>;
  const product = {
    title: "Modern Fashion Attire Illustration",
    price: "$35,000.00",
    license: "Exclusive Right",
    images: [
      "/images/dress1.jpg",
      "/images/dress2.jpg",
      "/images/dress3.jpg",
      "/images/dress4.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    tags: ["Fashion", "Illustration", "Luxury"],
    artist: {
      name: "@Ocean",
      role: "Fashion Artist",
      location: "Lagos, Nigeria",
      avatar: "/images/artist.jpg",
      rating: 4.8,
      reviews: 5,
      workCompleted: 14,
      designSold: 10,
    },
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.5fr] gap-14 p-6 max-w-[1500px] mx-auto ">
      {/* Left Section: Images */}
      <div className="w-full ">
        <div className=" p-4 bg-white rounded-lg grid grid-cols-[0.2fr_1fr] gap-4 w-full">
          <div className="flex flex-col gap-3 ">
            {product.images.map((img, index) => (
              <Button key={index} onPress={() => setSelectedImage(img)}>
                <Image
                  src={img}
                  alt="thumbnail"
                  className={`rounded-md border cursor-pointer ${
                    selectedImage === img
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                />
              </Button>
            ))}
          </div>
          <div className="w-full  rounded-lg">
            <Image
              src={selectedImage}
              alt={product.title}
              isLoading
              sizes=""
              // removeWrapper={true}
              className="w-[900px] h-[490px]"
            />
          </div>
        </div>

        <div className="relative w-full ">
          {/* <Image
            src={selectedImage}
            alt={product.title}
            // width={600}
            // height={600}
            isLoading
            className=" object-cover w-full h-[500px]"
          /> */}
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold">{product.price}</p>
          <p className="text-sm text-gray-500">{product.license}</p>
          <Button className="bg-blue-500 text-white w-full py-3 rounded-lg">
            Buy Collection
          </Button>
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="space-y-6">
        <Card>
          <CardBody className="flex flex-col items-center gap-4 py-8">
            <p className="text-3xl font-semibold text-[#3A98BB]">
              {product.price}
            </p>
            <div className="flex gap-2 p-2 border w-fit items-center">
              <p>Exclusive Right</p>
              <Popover showArrow={true}>
                <PopoverTrigger>
                  <div className="cursor-pointer">
                    <SvgCautionIcon className="size-5" />
                  </div>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Popover Content</div>
                    <div className="text-tiny">This is the popover content</div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <CustomButton
              text="Buy Collection"
              className="font-semibold w-52 h-12 mt-6"
            />
          </CardBody>
        </Card>
        {/* Artist Info */}
        <div className="p-4 border rounded-lg bg-gray-100">
          <div className="flex items-center space-x-4">
            <Image
              src={product.artist.avatar}
              alt={product.artist.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-bold">{product.artist.name}</p>
              <p className="text-sm text-gray-500">{product.artist.role}</p>
              <p className="text-sm text-gray-500">{product.artist.location}</p>
            </div>
          </div>
          <div className="mt-2 flex items-center space-x-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < product.artist.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-600">
              ({product.artist.reviews} Reviews)
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-700">
            <p>Work Completed: {product.artist.workCompleted}</p>
            <p>Design Sold: {product.artist.designSold}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
