import { ArrowRightIcon, CopyIcon } from "@chakra-ui/icons";
import { IconButton, Link } from "@chakra-ui/react";
import React from "react";

export const ProfileCard = () => {
  return (
    <div className="border-2 border-gray-200 py-8 px-6 rounded-md flex justify-between items-center font-body-2-body-2">
      <div className="space-y-6 flex flex-col text-black ">
        <p className="font-extrabold text-9xl">Profile</p>
        <div>
          <div className="flex space-x-2 items-center">
            <p className="font-extrabold text-9xl">0xhabwehvb......eth</p>
            <IconButton
              aria-label="copy address"
              variant="unstyled"
              icon={<CopyIcon />}
            ></IconButton>
          </div>

          <p className="text-green-2 font-medium">Tutor</p>
        </div>
        <div className="space-y-2">
          <div className="flex space-x-2 items-center text-sm">
            {" "}
            <img src="/clock.svg" />
            <p>Joined Feb, 2024</p>
          </div>
          <div className="flex space-x-2 items-center text-sm">
            {" "}
            <img src="/emojioneflagforfrance.svg" />
            <p>language choice of tutoring</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-12 items-start ">
        <img src="/avatar1.svg" className="w-24 h-24" />
        <div className="flex flex-col space-y-4 items-end justify-start font-body-2-body-2 text-green-2 font-medium text-sm">
          <Link href="/mynfts" className="flex space-x-2 items-center">
            <p> My NFTs </p>
            <p>
              <ArrowRightIcon fontSize={12} />{" "}
            </p>{" "}
          </Link>
          <Link href="/mytokens" className="flex space-x-2 items-center ">
            <p> My Tokens </p>
            <p>
              <ArrowRightIcon fontSize={12} />{" "}
            </p>{" "}
          </Link>
          
        </div>
      </div>
    </div>
  );
};
