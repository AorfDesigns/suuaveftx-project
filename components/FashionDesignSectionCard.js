import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const FashionDesignSectionCard = ({ text, title, btnText }) => {
  return (
    <Card className="bg-[#0B3443] px-3 pt-3 hover:bg-[#eeeeee] group ">
      <CardHeader className=" text-[#049AD1] text-2xl font-medium">
        {title}
      </CardHeader>
      <CardBody className="text-customGray  group-hover:text-black flex flex-col text-lg break-text">
        {`${text}`}
      </CardBody>
      <CardFooter className="justify-end">
        <Button
          variant="light"
          className="text-white text-base group-hover:text-black"
          endContent={<IoArrowForwardOutline />}
        >
          {btnText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FashionDesignSectionCard;
