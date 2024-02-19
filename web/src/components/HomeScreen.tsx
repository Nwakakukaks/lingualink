import { useState, FunctionComponent } from "react";
import { Cookie } from "./Cookie";
import { RoleDialog } from "../dialogs/RoleDialogContent";
import { RateSessionDialog } from "../dialogs/RateSession";
import { TipTutorDialog } from "../dialogs/TipDialog";
import { MatchTutorDialog } from "../dialogs/MatchTutorDialog";
import { MatchSuccessDialog } from "../dialogs/MatchSuccessDialog";
import { TestSuccessDialog } from "../dialogs/TestSuccessDialog";
import { ManualMatchTutorDialog } from "../dialogs/ManualMatch";


const BecomeATutorFrame = () => {
  return (
    <>
      {/* Main home session */}
      <div className="h-[620px] w-full flex flex-col">
        {/* heading text */}
        <div className="flex items-end mb-24 mt-10 space-x-2 mx-auto">
          {/* button and mascot */}

          <img className="w-20 h-20" src="/student.svg" />

          <div className="max-w-4xl flex flex-col ">
            <p className="text-31xl font-extrabold text-darkolivegreen leading-tight">
              Unlock Language Mastery Together with{" "}
              <span className="text-green ">Lingualink</span>{" "}
            </p>
            <p className="text-black my-4 max-w-2xl text-3xl">
              A decentralised hub where learners meet skilled educators. Explore
              a world of language learning tailored just for you
            </p>
            <RoleDialog />
          </div>
        </div>

        {/* Flags */}
        <div className="bg-beige flex justify-evenly py-2 mt-24">
          <img className="w-8 h-8 " src="/emojioneflagforbrazil.svg" />
          <img className="w-8 h-8 " src="/emojioneflagforfrance.svg" />
          <img className="w-8 h-8 " src="/emojioneflagforpoland.svg" />
          <img className="w-8 h-8 " src="/emojioneflagforsouthkorea.svg" />
          <img className="w-8 h-8 " src="/emojioneflagforspain.svg" />
          <img className="w-8 h-8 " src="/emojioneflagforturkey.svg" />
          <img className="w-8 h-8 " src="/emojioneflagfordenmark.svg" />
          <img className="w-8 h-8 " src="/emojioneflagforitaly.svg" />
          <img className="w-8 h-8 " src="/emojioneflagforbrazil.svg" />
          <img className="w-8 h-8 " src="/emojioneflagforfrance.svg" />
        </div>
      </div>

      {/* Apply as tutor */}
      <section className="flex justify-between space-x-8 mb-24">
        {/* Text side  */}
        <div className="w-[500px] ">
          {/* title text */}
          <div>
            <p className="text-darkolivegreen font-bold text-29xl">
              Become a <span className="text-green">Tutor</span>{" "}
            </p>
            <p className="text-black font-semibold text-2xl my-4">
              Shape the Future of Language Education: Web3 Tutoring
              Opportunities Await
            </p>
          </div>
          {/* value proposition */}
          <div className="text-gray1-200 space-y-3">
            <div className="flex space-x-2">
              <img src="/story.svg" />
              <p>Submit your application </p>
            </div>
            <div className="flex space-x-2">
              <img src="/story.svg" />
              <p>
                provide a contact method for learners (Instagram, twitter,
                Discord){" "}
              </p>
            </div>
            <div className="flex space-x-2 ">
              <img src="/story.svg" />
              <p>Receive ratings after each tutoring session </p>
            </div>
            <div className="flex space-x-2">
              <img src="/story.svg" />
              <p>Get paid on any session </p>
            </div>
            <div className="flex space-x-2 ">
              <img src="/story.svg" />
              <p>Earn a reward for participations </p>
            </div>
          </div>
        </div>

        {/* Image side */}
        <img className="" alt="" src="/vuesaxtwotonestory-frame.svg" />
      </section>

      {/* Apply as Student */}
      <section className="flex justify-between space-x-8 mb-24">
        {/* Image side */}
        <img className="" alt="" src="/becomestudent.svg" />

        {/* Text side  */}
        <div className="w-[500px] mt-2 ">
          {/* title text */}
          <div>
            <p className="text-darkolivegreen font-bold text-29xl">
              Apply as a <span className="text-green">Learner</span>{" "}
            </p>
            <p className="text-black font-semibold text-2xl my-4">
              Embark on a Decentralized Language Learning Journey: Explore
              Web3-Powered Education Today
            </p>
          </div>
          {/* value proposition */}
          <div className="text-gray1-200 space-y-3">
            <div className="flex space-x-2">
              <img src="/story.svg" />
              <p>Register with the required details </p>
            </div>
            <div className="flex space-x-2">
              <img src="/story.svg" />
              <p>Automatic match you with tutor with your preference</p>
            </div>
            <div className="flex space-x-2 ">
              <img src="/story.svg" />
              <p>Claim tokens for every quiz you complete </p>
            </div>

            <div className="flex space-x-2 ">
              <img src="/story.svg" />
              <p>Earn a reward for participations </p>
            </div>
          </div>
        </div>
      </section>

      {/* Claim reward session for quiz */}
      <section className="bg-green-2 relative w-[1220px] h-[400px] overflow-hidden py-12 mb-20">
        <img
          className="h-[180.7px] w-[180.9px] absolute top-[-30px] right-[-30px] object-contain"
          alt=""
          src="/vector-5.svg"
        />
        <img
          className="h-[150.2px] w-[150.2px] absolute bottom-[0px] left-[0px] object-contain"
          alt=""
          src="/vector-6.svg"
        />
        <div className="w-full flex flex-row items-start justify-start relative max-w-full">
          <div className="flex-1 flex flex-col items-center justify-start gap-[24px] max-w-full z-[1]">
            <h1 className=" font-bold text-white text-29xl text-center mb-6 text-wrap">
              Claim rewards for participation and quiz completion
            </h1>
            <h2 className="m-0  relative text-3xl leading-[145%] font-normal font-inherit text-lightgoldenrodyellow inline-block max-w-full mq450:text-3xl mq450:leading-[32px]">
              Unlock Rewards Seamlessly: Engage, Participate, and Excel in Every
              Quiz
            </h2>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[247px] flex flex-row items-start justify-center">
              <div className="flex-1 rounded-2xl bg-gray-1 overflow-hidden flex flex-row items-center justify-center py-3.5 px-[13px] relative gap-[10px]">
                <div className="relative text-base leading-[155%] font-medium font-body-2-body-2 text-light-connectbuttonbackground text-left whitespace-nowrap">
                  Get started
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* footer session */}
      <div className="w-[818px] flex flex-col items-center justify-center py-0 px-5 box-border gap-[32px] max-w-full text-sm text-black1 mq450:gap-[32px]">
        <div className="text-center">
          <p className="m-0">© 2024 LINGUALINK. All rights reserved.</p>
          <p className="m-0">{`Contact Us, Terms & Agreements`}</p>
        </div>
        <Cookie />
      </div>
    </>
  );
};

export default BecomeATutorFrame;
