import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

interface IconState {
  [key: string]: string;
}

export const VideoCard = () => {
  const [activeIcons, setActiveIcons] = useState<IconState>({
    mic: "mic1.svg",
    video: "video1.svg",
    play: "play.svg",
    volume1: "volume1.svg",
    volume2: "volume2.svg",
  });

  const handleClick = (iconName: string) => {
    setActiveIcons((prevIcons) => ({
      ...prevIcons,
      [iconName]: prevIcons[iconName] === `${iconName}1.svg` ? `${iconName}2.svg` : `${iconName}1.svg`,
    }));
  };

  return (
    <>
      <Box
        h={{ base: "", md: "", lg: "400px" }}
        className="border-2 border-gray-200 py-2 px-2 rounded-md text-black font-body-2-body-2"
      >
        <iframe
          className="w-full rounded-md"
          height="380"
          src="https://www.youtube.com/embed/cTps3tsKy40?si=-VfyorwACRcQ0LZW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
      <div className="flex justify-center items-center space-x-5">
        <div className="bg-gray-200 cursor-pointer rounded-full p-2 " onClick={() => handleClick("mic")}>
          <img src={`/${activeIcons.mic}`} />
        </div>
        <div className="bg-gray-200 cursor-pointer rounded-full p-2 " onClick={() => handleClick("video")}>
          <img src={`/${activeIcons.video}`} />
        </div>
        <div className="bg-gray-200 cursor-pointer rounded-full p-4 " onClick={() => {}}>
          <img src={`/${activeIcons.play}`} />
        </div>
        <div className="bg-gray-200 cursor-pointer rounded-full p-2 " onClick={() => {}}>
          <img src={`/${activeIcons.volume1}`} />
        </div>
        <div className="bg-gray-200 cursor-pointer rounded-full p-2 " onClick={() => {}}>
          <img src={`/${activeIcons.volume2}`} />
        </div>
      </div>
    </>
  );
};
