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

export function RegisterSuccessDialog({ isLoad }: { isLoad: boolean }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        type="submit"
        isLoading={isLoad}
        className="mt-6 w-full rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto "
        // onClick={onOpen}
      >
        Confirm
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white">
          {/* <Button className="flex justify-end mt-6" onClick={onClose}>
            <img src="/close.svg" className="w-8 h-8" />
          </Button> */}
          {/* <ModalCloseButton color="black" /> */}
          <ModalBody className="mx-auto">
            <RegisterSuccessDialogContent />
          </ModalBody>
          <ModalFooter className="flex flex-col">
            <Link href="/dashboardstudent">
              <Button className="mt-1 mb-2 w-full rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto ">
                Go to profile
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

const RegisterSuccessDialogContent = () => {
  return (
    <div className="pt-8 font-body-2-body-2 ">
      <img src="/testsuccess.svg" className="w-full" />
      <p className="text-black my-6 text-center mx-6">
        Welcome to <span className="text-darkolivegreen font-semibold ">Lingualink! 🥳</span>  You're off to a great start with us.
      </p>
    </div>
  );
};
