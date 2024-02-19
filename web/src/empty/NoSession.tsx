import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import React from "react";

export const NoActiveSession = () => {
  return (
    <div className=" bg-lightcyan p-6 rounded-md border-2 border-gray-200 text-black">
      <p className="font-bold text-3xl ">Session</p>
      <div className="flex flex-col justify-center items-center space-y-4 mt-4">
        <img src="/student.svg" className="w-40 h-40" />
        <p className="font-medium">🍃 No active session</p>
      </div>
    </div>
  );
};
