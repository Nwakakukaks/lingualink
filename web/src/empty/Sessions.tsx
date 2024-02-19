import { StarIcon } from "@chakra-ui/icons";
import { Text, Button, Divider } from "@chakra-ui/react";
import React from "react";
import { RateSessionDialog } from "../dialogs/RateSession";

const tutors = [
  {
    id: "1",
    imageUrl: "/matchtutor.svg",
    address: "0x997..457A35",
    rating: 4.5,
    subject: "French",
    price: "$20",
  },
  {
    id: "2",
    imageUrl: "/matchtutor.svg",
    address: "0x997..457A35",
    rating: 4.5,
    subject: "Spanish",
    price: "$20",
  },
];

export const ActiveSessionStudent = () => {
  return (
    <div className=" bg-white py-6 px-3 rounded-md border-2 border-gray-200 text-black">
      <p className="font-semibold text-3xl ml-2">Session Requests</p>
      <div className="flex flex-col justify-center items-center space-y-4 mt-1">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            onClick={() => {}}
            className="flex flex-col space-y-2 text-sm py-2 px-4 border-2 border-gray-200 rounded-md mt-2 bg-lightcyan cursor-pointer"
          >
            <div className="flex space-x-3">
              <img src={tutor.imageUrl} className="" alt="Tutor" />
              <div className="space-y-1">
                <Text color="black" fontWeight={500}>
                  {tutor.address}
                  <span className="font-light ml-2 text-gray1-100 text-nowrap">
                    rating
                    <span className="text-blue font-normal ml-1">
                      {tutor.rating}
                    </span>{" "}
                    <StarIcon
                      color="#F0BD22"
                      w={4}
                      h={4}
                      className="mb-1"
                    ></StarIcon>
                  </span>
                </Text>
                <Text className="text-gray1-100 font-light">
                  {tutor.subject}
                  <span className="ml-2 ">
                    {" "}
                    <span className="text-darkolivegreen font-medium">
                      {tutor.price}
                    </span>
                    /Session
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex space-x-2 justify-between items-center mb-1">
              <Button className="w-full px-6 rounded-smi bg-black text-white h-10 text-sm font-medium font-body-2-body-2  hover:bg-black1 mx-auto ">
                Details
              </Button>
              <Button
                variant="outline"
                borderColor="black"
                className="w-full px-6 rounded-smi border-gray-900 text-black h-10 text-sm font-medium font-body-2-body-2  mx-auto "
              >
                Decline
              </Button>
            </div>
            {/* <Divider className="my-3 bg-gray-300 " orientation="horizontal" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
