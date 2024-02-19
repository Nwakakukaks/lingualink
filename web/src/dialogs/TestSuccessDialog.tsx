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

export function TestSuccessDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        className="rounded-lg bg-gray-900 px-8 py-2 text-white h-8 text-lg font-body-2-body-2 font-thin hover:bg-black "
        onClick={onOpen}
      >
        Connect Tutor
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent bg="white">
          {/* <Button className="flex justify-end mt-6" onClick={onClose}>
            <img src="/close.svg" className="w-8 h-8" />
          </Button> */}
          {/* <ModalCloseButton color="black" /> */}
          <ModalBody className="mx-auto">
            <TestSuccessDialogContent />
          </ModalBody>
          <ModalFooter className="flex flex-col">
            <Button
              
              className="mt-1 mb-2 w-full rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto "
            >
              Claim your NFT badge
            </Button>
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

const TestSuccessDialogContent = () => {
  return (
    <div className="pt-8 font-body-2-body-2 ">
        <img src="/testsuccess.svg" className="w-full"/>
      <p className="text-black my-3 text-center ">You scored <span className="font-semibold ">80pt</span></p>
      <div className="border-2 border-gray1-100 px-4 py-2 bg-beige rounded-md flex justify-center space-x-4 h-12">
      <p className="text-black1 font-medium">Total questions: 10</p>
      <Divider orientation="vertical" color='black' />
      <p className="text-red">Wrong <span className="font-semibold">2</span></p>
      <Divider orientation="vertical" color='black' />
      <p className="text-green-2">Correct <span className="font-semibold">8</span></p>
      </div>
    
    </div>
  );
};
