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
}

const validationSchema = Yup.object({
  amount: Yup.number().required("Amount is required"),
});

export function TipTutorDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="outline"
        borderColor="red"
        onClick={onOpen}
        className="w-full mb-3 rounded-smi px-36 py-6 text-red h-10 text-lg font-body-2-body-2 font-thin mx-auto "
      >
        End session
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white">
          <Button className="flex justify-end mt-6" onClick={onClose}>
            <img src="/close.svg" />
          </Button>
          {/* <ModalCloseButton color="black" /> */}
          <ModalBody className="mx-auto">
            <TipTutorDialogContent />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              w={{ base: "150px", md: "250px", lg: "350px" }}
              variant="outline"
              borderColor="black"
              className="mb-3 rounded-smi px-36 py-6 text-black h-10 text-lg font-body-2-body-2 font-thin mx-auto "
            >
              Skip
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const TipTutorDialogContent = () => {
  const handleSubmit = async (values: FormValues) => {};
  return (
    <Formik
      initialValues={{
        amount: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <div className="font-body-2-body-2 mb-4">
            <p className="text-3xl font-bold text-black text-start my-4 ">
              Thank your tutor with a tip.
            </p>
            <div className="space-y-2 mt-4">
              <Text className=" text-gray1-200 ">Amount</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  className="text-gray1-200"
                >
                  $
                </InputLeftElement>
                <Input
                  className="hover:border-black text-gray1-200"
                  variant="outline"
                  placeholder="Tip your tutor"
                  focusBorderColor="black"
                  borderColor="grey"
                  w={{ base: "150px", md: "250px", lg: "350px" }}
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  value={formikProps.values.amount}
                />
              </InputGroup>
            </div>
          </div>
          <Button
            isLoading={formikProps.isSubmitting}
            w={{ base: "150px", md: "250px", lg: "350px" }}
            className="mt-1 rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto "
          >
            Tip and confirm
          </Button>
        </Form>
      )}
    </Formik>
  );
};
