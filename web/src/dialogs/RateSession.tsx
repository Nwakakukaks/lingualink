import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Dialog from "./SimpleDialog";
import { StarIcon } from "@chakra-ui/icons";

export function RateSessionDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="outline"
        borderColor="red"
        onClick={onOpen}
        
        className="w-full mb-3 rounded-smi px-36 py-6 text-red h-10 text-lg font-body-2-body-2 font-thin mx-auto "
      >
        Cancel session
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white">
          <Button className="flex justify-end mt-6" onClick={onClose}>
            <img src="/close.svg" />
          </Button>
          {/* <ModalCloseButton color="black" /> */}
          <ModalBody>
            <RateSessionDialogContent />
          </ModalBody>
          <ModalFooter>
            <Button className="my-3 rounded-smi bg-gray-900 px-28 py-6 text-white h-6 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto ">
              Rate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const RateSessionDialogContent = () => {
  return (
    <div className="font-body-2-body-2">
      <p className="text-xl font-semibold text-black text-center my-4 ">
        Please rate your session
      </p>
      <div className="flex space-x-3 justify-center items-center">
        <StarIcon color="#F0BD22" w={6} h={6}></StarIcon>
        <StarIcon color="#F0BD22" w={6} h={6}></StarIcon>
        <StarIcon color="#F0BD22" w={6} h={6}></StarIcon>
        <StarIcon color="grey" w={6} h={6}></StarIcon>
        <StarIcon color="grey" w={6} h={6}></StarIcon>
      </div>
    </div>
  );
};
