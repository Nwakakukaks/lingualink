import React from "react";
import { IconButton, Button, Link } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { PersonIcon } from "@radix-ui/react-icons";
import { RateSessionDialog } from "../dialogs/RateSession";

export const UserSessionInfo = () => {
  return (
    <div className="border-2 border-gray-200 px-6 py-4 rounded-md text-black">
      <p className="font-extrabold text-3xl mb-2">Session</p>
      <div className="flex flex-col ">
        <div className="flex justify-between items-center">
          <p className="font-medium">Tutor</p>
          <p>
            0xhabwehvb......eth{" "}
            <span>
              {" "}
              <IconButton
                className="mb-2"
                aria-label="copy address"
                variant="unstyled"
                icon={<CopyIcon />}
              ></IconButton>
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Language</p>
          <p className="mr-2">French</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Twitter handle</p>
          <p className="mr-2">@sampto</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Started</p>
          <p className="mr-2">Feb 6th, 2024</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Duration</p>
          <p className="mr-2">2 weeks</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium">Session end</p>
          <p className="mr-2">Feb 20th, 2024</p>
        </div>
      </div>
      {/* Buttons and confirmations */}
      <div>
        <div className="flex space-x-2 items-center justify-end text-sm font-medium mb-3">
          <p>Tutor</p>
          <div className="flex space-x-1 bg-beige py-1 px-6 rounded-lg text-green-2">
            <img src="/profiletick.svg" />
            <p className="">Confirmed</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center justify-end text-sm font-medium mb-6">
          <p>Student</p>
          <div className="flex space-x-1 bg-bisque py-1 px-6 rounded-lg text-red">
            <img src="/profiletickred.svg" />
            <p className="">Not confirm</p>
          </div>
        </div>
        <div>
          <Link href="/session">
            <Button className="w-full mt-1 mb-2 rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto ">
              Start session
            </Button>
          </Link>

          <RateSessionDialog />
        </div>
      </div>
    </div>
  );
};
