import { Card, CardBody, CardFooter, CardHeader, Button } from "@chakra-ui/react";
import React from "react";

export const NoActiveSessionStudent = () => {
  return (
    <div className=" bg-lightcyan p-6 rounded-md border-2 border-gray-200 text-black">
      <p className="font-bold text-3xl ">Session</p>
      <div className="flex flex-col justify-center items-center space-y-4 mt-4">
        <img src="/student.svg" className="w-40 h-40" />
        <p className="font-medium">🍃 No active session</p>
      </div>
      <Button className="mt-6  w-full rounded-smi bg-gray-900 px-4 py-6 text-white h-10 text-md font-body-2-body-2 font-thin hover:bg-black mx-auto ">
        Match tutor
      </Button>
    </div>
  );
};
