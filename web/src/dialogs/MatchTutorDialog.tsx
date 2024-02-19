import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, Text, Select, Divider, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import { MatchSuccessDialog } from "./MatchSuccessDialog";

interface MatchTutorDialogProps {
  tutor: {
    id: string;
    imageUrl: string;
    address: string;
    rating: number;
    subject: string;
    price: string;
  };
  isOpened: boolean;
  onClosed: () => void;
}

export const MatchTutorDialog: React.FC<MatchTutorDialogProps> = ({ tutor, isOpened, onClosed }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Button to trigger modal */}
      <Button onClick={onOpen}>Open Tutor Dialog</Button>

      {/* Modal */}
      <Modal isOpen={isOpened} onClose={onClosed} isCentered>
        <ModalOverlay />
        <ModalContent bg="white">
          <ModalBody className="mx-auto">
            {/* Pass tutor details to the dialog content */}
            <MatchTutorDialogContent tutor={tutor} />
          </ModalBody>
          <ModalFooter className="mx-auto">
            {/* <Button
              w={{ base: "150px", md: "250px", lg: "360px" }}
              className="mt-1 mb-2 rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto "
            >
              Request Match
            </Button> */} 
            <MatchSuccessDialog />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

// Dialog content
const MatchTutorDialogContent: React.FC<{ tutor: MatchTutorDialogProps["tutor"] }> = ({ tutor }) => {
  return (
    <div className="font-body-2-body-2">
      <div className="flex space-x-3 bg-lightcyan py-3 px-4 border-2 border-gray-200 rounded-md mt-4">
        <img src={tutor.imageUrl} alt="Tutor" className="" />
        <div className="space-y-1">
          <Text color="black" fontWeight={400}>
            {tutor.address}
            <span className="font-light ml-2 text-gray1-100">
              Average rating{" "}
              <span className="text-blue font-normal ml-1">{tutor.rating}</span>{" "}
              <StarIcon color="#F0BD22" w={4} h={4} className="mb-1"></StarIcon>
            </span>
          </Text>
          <Text className="text-gray1-100 font-light">
            {tutor.subject}
            <span className="ml-2 ">
              {" "}
              <span className="text-darkolivegreen font-medium">{tutor.price}</span>
              /session
            </span>
          </Text>
        </div>
      </div>
      <Divider className="my-5 bg-gray1-100" />
      <div className="ml-2 space-y-2 mt-4 text-gray1-100">
        <Text className=" text-gray1-200 font-medium ">Tutoring Duration</Text>
        <Select
          className="hover:border-black"
          focusBorderColor="grey"
          borderColor="grey"
          w={{ base: "150px", md: "250px", lg: "360px" }}
          icon={<img src="/arrowdown.svg" />}
          placeholder="Duration"
        >
          <option value="option1">2 weeks</option>
          <option value="option2">1 month</option>
          <option value="option3">3 months</option>
        </Select>
      </div>
      <div className="space-y-2 mt-4 ml-2 text-gray1-100">
        <Text>Amount</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" className="text-gray1-100">
            $
          </InputLeftElement>
          <Input
            className="hover:border-black"
            variant="outline"
            placeholder="Tip your tutor"
            focusBorderColor="black"
            borderColor="grey"
            w={{ base: "150px", md: "250px", lg: "360px" }}
          />
        </InputGroup>
      </div>
    </div>
  );
};
