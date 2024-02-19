import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
  Switch,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ConnectionButton } from "./ui/ConnectButton";
import { useDisconnect, useAccount } from "wagmi";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface ProfileMenuProps {
  disconnect: () => void;
  address?: any;
}

export const Header = () => {
  const { address, isConnected } = useAccount();
  // const { disconnectWeb3 } = useDisconnect();
  const { disconnect } = useDisconnect();

  console.log(address);

  return (
    <header className="self-stretch bg-white shadow-md sticky box-border flex flex-row items-center justify-between py-4 px-[62px] gap-[20px] top-[0] z-[99] max-w-full text-left text-8xl-9 text-gray-1 font-body-2-body-2 border-b-[1px] border-solid border-whitesmoke-300 mq675:pl-[31px] mq675:pr-[31px] mq675:box-border">
      <ChakraLink as={ReactRouterLink} to="/">
        <div className="flex flex-row items-center justify-start py-[4.347039699554443px] pr-1 pl-[4.347039699554443px] gap-[4.35px]">
          <div className="w-[29px] rounded-[2.17px] bg-green overflow-hidden shrink-0 flex flex-col items-center justify-center py-[6.520559787750244px] px-1.5 box-border">
            <img
              className="w-4 h-[15.5px] relative"
              alt=""
              src="/vector-1.svg"
            />
          </div>

          <div className="relative leading-[140%] font-medium whitespace-nowrap no-underline">
            LinguaLink
          </div>
        </div>
      </ChakraLink>

      <div className="h-[37px] w-[335px] flex flex-row items-center justify-end gap-[16px] max-w-full text-sm text-green-2 mq750:w-[250px]">
        {isConnected ? (
          <ProfileMenuTutor
            disconnect={disconnect}
            address={address || undefined}
          />
        ) : (
          isConnected && (
            <ProfileMenuStudent
              disconnect={disconnect}
              address={address || undefined}
            />
          )
        )}
        <ConnectionButton />
      </div>
    </header>
  );
};

const ProfileMenuTutor: React.FC<ProfileMenuProps> = ({
  disconnect,
  address,
}) => {
  return (
    <Menu>
      <MenuButton
        variant="outline"
        borderColor="black"
        className="rounded-lg font-medium text-black py-2 px-4"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        <div className="flex space-x-2 items-center">
          <img src="/avatar2.svg" />
          <p>
            {" "}
            {typeof address === "string"
              ? `0x${address.slice(2, 4)}...${address.slice(-4)}`
              : ""}
          </p>
        </div>
      </MenuButton>
      <MenuList
        paddingX={4}
        className=" active:bg-beige bg-white flex flex-col items-start"
      >
        <MenuItem className="bg-white">
          <div className="flex space-x-4">
            <img src="/avatar2.svg" className="h-10 w-10" />
            <div className="text-black space-y-2">
              <p className="text-green-2 font-bold">
                {typeof address === "string"
                  ? `0x${address.slice(2, 6)}...${address.slice(-4)}`
                  : ""}
              </p>
              <p>Tutor</p>
            </div>
          </div>
        </MenuItem>
        <Divider className="my-3 bg-gray-300" orientation="horizontal" />
        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <div className="flex justify-start space-x-3 hover:bg-beige items-center mb-1">
            <img src="/personalcard.svg" />
            <p className="font-medium">Profile</p>
          </div>
        </MenuItem>
        <MenuItem className="bg-white hover:bg-beige rounded-md flex justify-between items-center space-x-6">
          <div className="flex space-x-3 hover:bg-beige items-center my-2">
            <img src="/notcircle.svg" />
            <p className="font-medium">Requests</p>
          </div>
          <div>
            <p className="rounded-full bg-red px-3 py-1 text-white font-semibold ">
              3
            </p>
          </div>
        </MenuItem>
        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <div className="flex justify-between items-center space-x-6">
            <div className="flex space-x-3 hover:bg-beige items-center my-2">
              <img src="/book.svg" />
              <p className="font-medium">Switch to learner</p>
            </div>
            <Switch colorScheme="teal" />
          </div>
        </MenuItem>
        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <div className="flex justify-start space-x-3 hover:bg-beige items-center my-2">
            <img src="/setting.svg" />
            <p className="font-medium">Settings</p>
          </div>
        </MenuItem>
        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <div className="flex justify-start space-x-3 hover:bg-beige items-center my-2">
            <img src="/support.svg" />
            <p className="font-medium">Support</p>
          </div>
        </MenuItem>

        <Divider className="my-3 bg-gray-300" orientation="horizontal" />
        <MenuItem
          onClick={() => disconnect()}
          className="bg-white hover:bg-beige rounded-md"
        >
          <div className="flex justify-start space-x-3 hover:bg-beige items-center mt-2">
            <img src="/logout.svg" />
            <p className="font-medium text-red">Sign out</p>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const ProfileMenuStudent: React.FC<ProfileMenuProps> = ({
  disconnect,
  address,
}) => {
  return (
    <Menu>
      <MenuButton
        variant="outline"
        borderColor="black"
        className="rounded-lg font-medium text-black py-2 px-4"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        <div className="flex space-x-2 items-center">
          <img src="/avatar2.svg" />
          <p>
            {" "}
            {typeof address === "string"
              ? `0x${address.slice(2, 4)}...${address.slice(-4)}`
              : ""}
          </p>
        </div>
      </MenuButton>
      <MenuList
        paddingX={4}
        className=" active:bg-beige bg-white flex flex-col items-start"
      >
        <MenuItem className="bg-white">
          <div className="flex space-x-4">
            <img src="/avatar2.svg" className="h-10 w-10" />
            <div className="text-black space-y-2">
              <p className="text-green-2 font-bold">
                {typeof address === "string"
                  ? `0x${address.slice(2, 6)}...${address.slice(-4)}`
                  : ""}
              </p>
              <p>Learner</p>
            </div>
          </div>
        </MenuItem>
        <Divider className="my-3 bg-gray-300" orientation="horizontal" />

        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <Link href="/matchtutors" className="no-underline">
            <div className="flex justify-start space-x-3 hover:bg-beige items-center mb-1">
              <img src="/star.svg" />
              <p className="font-medium hover:no-underline">Match Tutor</p>
            </div>
          </Link>
        </MenuItem>

        <Divider className="my-3 bg-gray-300" orientation="horizontal" />
        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <div className="flex justify-start space-x-3 hover:bg-beige items-center mb-1">
            <img src="/personalcard.svg" />
            <p className="font-medium">Profile</p>
          </div>
        </MenuItem>
        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <div className="flex justify-between items-center space-x-6">
            <div className="flex space-x-3 hover:bg-beige items-center my-2">
              <img src="/book.svg" />
              <p className="font-medium">Switch to tutor</p>
            </div>
            <Switch colorScheme="teal" />
          </div>
        </MenuItem>
        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <div className="flex justify-start space-x-3 hover:bg-beige items-center my-2">
            <img src="/setting.svg" />
            <p className="font-medium">Settings</p>
          </div>
        </MenuItem>
        <MenuItem className="bg-white hover:bg-beige rounded-md">
          <div className="flex justify-start space-x-3 hover:bg-beige items-center my-2">
            <img src="/support.svg" />
            <p className="font-medium">Support</p>
          </div>
        </MenuItem>

        <Divider className="my-3 bg-gray-300" orientation="horizontal" />
        <MenuItem
          onClick={() => disconnect()}
          className="bg-white hover:bg-beige rounded-md"
        >
          <div className="flex justify-start space-x-3 hover:bg-beige items-center mt-2">
            <img src="/logout.svg" />
            <p className="font-medium text-red">Sign out</p>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
