import { FunctionComponent } from "react";
import { Header } from "../components/Header";
import { Cookie } from "../components/Cookie";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Select,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { RegisterSuccessDialog } from "../dialogs/RegisterSuccess";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { writeContract } from "@wagmi/core";
import { useContract } from "../ContractContext";

interface FormValues {
  language: string;
  goal: string;
  level: string;
  description: string;
}

const validationSchema = Yup.object({
  language: Yup.string().required("Language is required"),
  goal: Yup.string().required("Goal is required"),
  level: Yup.string().required("Level is required"),
  description: Yup.string(),
});

const Studentfilled: FunctionComponent = () => {
  const { contractAbi, contractAddress, contract } = useContract();
  
   const handleSubmit = async (values: FormValues) => {

     try {
       // Smart contract write
       const { hash } = await writeContract({
         address: contractAddress,
         abi: contractAbi,
         functionName: "registerStudent",
         args: [values.language, parseInt(values.level)],
       });

       console.log("Smart contract hash:", hash);
     } catch (error) {
       console.error("Form submission error:", error);
       // Handle the error, e.g., show an error message to the user
     }
   };


  return (
    <Formik
      initialValues={{
        language: "",
        goal: "",
        level: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {(formikProps) => (
        <Form>
          <>
            <div className="bg-white font-body-2-body-2">
              <Header />
              <section className="absolute top-[-0.3px] left-[0px] rounded-[50%] [background:linear-gradient(172.34deg,_rgba(88,_204,_2,_0.08),_rgba(88,_204,_2,_0))] [filter:blur(274.34px)] w-full h-full" />
              <div className="flex space-x-2 justify-center items-start py-10 px-6 ">
                <img src="/student.svg" />
                <div>
                  <div className="flex space-x-2 items-center">
                    <p className="bg-beige p-2 rounded-md text-green-2 text-sm">
                      AS A LEARNER
                    </p>
                    <img src="/learnarrow.svg" />
                  </div>

                  <div className="text-black max-w-md">
                    <p className="font-bold text-9xl ">
                      Unlock Language Learning with Lingualink🍃
                    </p>
                    <p className="">
                      Connect with language learners and educators worldwide
                    </p>
                  </div>

                  <div className="mt-6 ">
                    <Card className="bg-white border-2 border-gray-200 rounded-md text-black px-3 max-w-md">
                      <CardBody>
                        <FormControl as="fieldset">
                          <FormLabel className="mt-6">
                            Pick a language you want to learn
                          </FormLabel>
                          <Select
                            name="language"
                            placeholder="language"
                            focusBorderColor="gray"
                            borderColor="gray"
                            className="hover:border-gray-500"
                            onChange={formikProps.handleChange}
                            onBlur={formikProps.handleBlur}
                            value={formikProps.values.language}>
                            <option>English</option>
                            <option>French</option>
                            <option>Spanish</option>
                            <option>Arabic</option>
                            <option>Chinese</option>
                            <option>Afrikans</option>
                          </Select>
                          <FormLabel className="mt-6">Goal</FormLabel>
                          <Select
                            name="goal"
                            placeholder="Exam"
                            focusBorderColor="gray"
                            borderColor="gray"
                            className="hover:border-gray-500"
                            onChange={formikProps.handleChange}
                            onBlur={formikProps.handleBlur}
                            value={formikProps.values.goal}>
                            <option>Interview</option>
                            <option>Relocation</option>
                            <option>Other</option>
                          </Select>
                          <FormLabel className="mt-6">Level</FormLabel>
                          <Select
                            name="level"
                            placeholder="level"
                            focusBorderColor="gray"
                            borderColor="gray"
                            className="hover:border-gray-500"
                            onChange={formikProps.handleChange}
                            onBlur={formikProps.handleBlur}
                            value={formikProps.values.level}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </Select>

                          <Text className="mt-6 mb-3">
                            Description (optional)
                          </Text>
                          <Textarea
                            name="description"
                            placeholder="Give a brief description"
                            focusBorderColor="gray"
                            borderColor="gray"
                            className="hover:border-gray-500 rounded-md"
                            size="sm"
                            onChange={formikProps.handleChange}
                            onBlur={formikProps.handleBlur}
                            value={formikProps.values.description}
                          />
                        </FormControl>
                        {/* <Button
                          mt={4}
                          colorScheme="teal"
                          isLoading={formikProps.isSubmitting}
                          type="submit">
                          Submit
                        </Button> */}
                        <RegisterSuccessDialog
                          isLoad={formikProps.isSubmitting}
                        />
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
              <Box
                w={{ base: "350px", md: "550px", lg: "750px" }}
                className="mx-auto mb-8">
                <Cookie />
              </Box>
            </div>
          </>
        </Form>
      )}
    </Formik>
  );
};

export default Studentfilled;
