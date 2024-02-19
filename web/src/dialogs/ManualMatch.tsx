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
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

interface FormValues {
  amount: number;
  language: string;
}

const validationSchema = Yup.object({
  amount: Yup.number().required("Amount is required"),
  language: Yup.string().required("Language is required"),
});

export function ManualMatchTutorDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="cursor-pointer [border:none] py-2.5 pr-3 pl-2 bg-white rounded-md overflow-hidden flex flex-row items-center justify-end"
      >
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <img
            className="h-6 w-6 relative"
            alt=""
            src="/vuesaxtwotonestatus.svg"
          />
          <div className="relative text-base leading-[155%] font-medium font-body-2-body-2 text-gray-1 text-left">
            Match manually
          </div>
        </div>
      </button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white">
          <Button className="flex justify-end mt-6" onClick={onClose}>
            <img src="/close.svg" className="w-8 h-8" />
          </Button>
          {/* <ModalCloseButton color="black" /> */}
          <ModalBody className="mx-auto">
            <ManualMatchTutorDialogContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const ManualMatchTutorDialogContent = () => {
  const handleSubmit = async (values: FormValues) => {};
  return (
    <Formik
      initialValues={{
        amount: 0,
        language: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <div className="font-body-2-body-2">
            <div className="mt-3 ">
              <p className="text-3xl font-bold text-black">
                Match tutor manually
              </p>
              <img className="mx-auto" src="/manual.svg" />
            </div>
            <Divider className="my-5" />
            <div className="space-y-2 mt-4 text-gray1-100">
              <Text className=" text-gray1-200 font-medium ">Language</Text>
              <Select
                className="hover:border-black "
                focusBorderColor="grey"
                borderColor="grey"
                w={{ base: "150px", md: "250px", lg: "360px" }}
                icon={<img src="/arrowdown.svg" />}
                placeholder="English"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.language}
              >
                <option value="option1">Spanish</option>
                <option value="option2">French</option>
                <option value="option3">German</option>
                <option value="option3">Arabic</option>
                <option value="option3">Chinese</option>
                <option value="option3">Japanese</option>
                <option value="option3">Afrikans</option>
              </Select>
            </div>
            <div className="space-y-2 mt-4  text-gray1-200 font-medium">
              <Text>Amount per session</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  className="text-gray1-100"
                >
                  $
                </InputLeftElement>
                <Input
                  className="hover:border-black"
                  variant="outline"
                  placeholder="Tip your tutor"
                  focusBorderColor="black"
                  borderColor="grey"
                  w={{ base: "150px", md: "250px", lg: "360px" }}
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  value={formikProps.values.amount}
                />
              </InputGroup>
            </div>
            <Button
              w={{ base: "150px", md: "250px", lg: "360px" }}
              className="mt-6 mb-2 rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto "
            >
              Find tutors
            </Button>
            {/* <Button
              w={{ base: "150px", md: "250px", lg: "350px" }}
              variant="outline"
              borderColor="black"
              className="mb-3 rounded-smi px-36 py-6 text-black h-10 text-lg font-body-2-body-2 font-thin mx-auto "
            >
              Confirm
            </Button> */}
          </div>
        </Form>
      )}
    </Formik>
  );
};
