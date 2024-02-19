import { CopyIcon } from "@chakra-ui/icons";
import { IconButton, Button, Link } from "@chakra-ui/react";
import React from "react";

export const AssessmentCard = () => {
  return (
    <div className="border-2 border-gray-200 py-4 px-3 rounded-md flex justify-between items-center font-body-2-body-2">
      <img src="/quiz.svg" className="w-72 h-60" />
      <div className="space-y-6 flex flex-col text-black ">
        <p className="font-medium ">
          Test your language skills with quick questions and see how fluent you
          are!
        </p>
        <div>
          <p className="font-extrabold text-3xl">
            Unlock Your Language Proficiency: Test Your Skills!
          </p>
        </div>

        <Link href="/test">
          <Button className="mt-1  w-full rounded-smi bg-gray-900 px-4 py-6 text-white h-10 text-md font-body-2-body-2 font-thin hover:bg-black mx-auto ">
            Take a quiz now and claim token
          </Button>
        </Link>
      </div>
    </div>
  );
};
