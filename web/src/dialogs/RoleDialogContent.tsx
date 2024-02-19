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
import {
  useAccount,
  useConnectModal,
} from "@particle-network/connect-react-ui";

export function RoleDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const account = useAccount();
  const { openConnectModal } = useConnectModal();

  const handleConnect = () => {
    if (openConnectModal && !account) {
      openConnectModal();
    }
    onOpen();
  };

  return (
    <>
      <Button
        w={{ base: "150px", md: "150px", lg: "200px" }}
        className="rounded-lg bg-gray-900 px-12 py-2 text-white h-12 text-lg font-body-2-body-2 font-thin hover:bg-black "
        onClick={handleConnect}
      >
        Get started
      </Button>

      {account && (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
          <ModalOverlay />
          <ModalContent bg="white">
            <Button className="flex justify-end mt-6" onClick={onClose}>
              <img src="/close.svg" />
            </Button>
            {/* <ModalCloseButton color="black" /> */}
            <ModalBody>
              <RoleDialogContent />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

const RoleDialogContent = () => {
  return (
    <div className="font-body-2-body-2">
      <p className="text-13xl font-bold text-black text-center mt-4 ">
        What brings you to Lingualink?
      </p>
      <div className="flex space-x-2 justify-center items-center">
        <Link href="/studentfilled">
          <img src="/astudent.svg" className="w-72 h-72" />
        </Link>
        <Link href="/tutorfilled">
          <img src="/atutor.svg" className="w-72 h-72" />
        </Link>
      </div>
    </div>
  );
};
