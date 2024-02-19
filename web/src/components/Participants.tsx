import { Text, Divider } from "@chakra-ui/react";
import { RateSessionDialog } from "../dialogs/RateSession";

const tutors = [
  {
    id: "1",
    imageUrl: "/matchtutor.svg",
    address: "0x997..457A35",
    rating: 4.5,
    subject: "French",
    price: "$20",
  },
  {
    id: "2",
    imageUrl: "/matchtutor.svg",
    address: "0x997..457A35",
    rating: 4.5,
    subject: "French",
    price: "$20",
  },
];

export const Participants = () => {
  return (
    <div className="border-2 border-gray-200 px-6 py-6 rounded-md text-black">
      <p className="font-bold text-3xl ">Participants</p>
      <div className="flex flex-col mb-4">
        <div className="flex flex-col justify-center items-center space-y-3 mt-2">
          {tutors.map((tutor) => (
            <>
              <div
                key={tutor.id}
                onClick={() => {}}
                className="flex flex-col items-center w-full space-y-3 text-sm py-4 px-6 border-2 border-gray-200 rounded-md mt-2 bg-lightblue cursor-pointer"
              >
                <Text color="black" fontWeight={500}>
                  {tutor.address}
                </Text>
                <img src={tutor.imageUrl} className="w-16 h-16" alt="Tutor"  />
                <Text className="text-gray1-100 font-light">
                  {tutor.subject}
                </Text>
              </div>

              <Divider className="my-3 bg-gray-300 " orientation="horizontal" />
            </>
          ))}
        </div>
      </div>

      {/* Buttons and confirmations */}

      <RateSessionDialog />
    </div>
  );
};
