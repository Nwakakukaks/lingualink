import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  useDisclosure,
  Link,
  Divider,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Dialog from "./SimpleDialog";
import { StarIcon } from "@chakra-ui/icons";

export function MatchSuccessDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        w={{ base: "150px", md: "250px", lg: "370px" }}
        className="mt-1 mb-2 rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto "
      >
        Request Match
      </Button>

      <Modal  isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white">
          {/* <Button className="flex justify-end mt-6" onClick={onClose}>
            <img src="/close.svg" className="w-8 h-8" />
          </Button> */}
          {/* <ModalCloseButton color="black" /> */}
          <ModalBody className="mx-auto">
            <MatchSuccessDialogContent />
          </ModalBody>
          <ModalFooter className="flex flex-col">
            <Link href="/dashboardstudent">
             <Button
              w={{ base: "150px", md: "250px", lg: "370px" }}
              className="mt-1 mb-2 rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto "
            >
              Go to dashboard
            </Button>
            </Link>
           
            {/* <Button
              w={{ base: "150px", md: "250px", lg: "350px" }}
              variant="outline"
              borderColor="black"
              className="mb-3 rounded-smi px-36 py-6 text-black h-10 text-lg font-body-2-body-2 font-thin mx-auto "
            >
              Confirm
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const MatchSuccessDialogContent = () => {
  return (
    <div className="pt-8 font-body-2-body-2 my-6">
      <img src="/matched.svg" className="w-full" />
      <div className="flex space-x-3 bg-white py-4 px-4 border-2 border-gray-200 rounded-md mt-6 ">
        <img src="/matchtutor.svg" className="" />
        <div className="space-y-1">
          <Text color="black" fontWeight={500}>
            0x997..457A35
            <span className="font-light ml-2 text-gray1-100">
              Average rating{" "}
              <span className="text-blue font-normal ml-1">4.5</span>{" "}
              <StarIcon color="#F0BD22" w={4} h={4} className="mb-1"></StarIcon>
            </span>
          </Text>
          <Text className="text-gray1-100 font-light">
            French
            <span className="ml-2 ">
              {" "}
              <span className="text-darkolivegreen font-medium">$20</span>
              /session
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
};
