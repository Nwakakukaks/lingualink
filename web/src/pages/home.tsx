import { FunctionComponent } from "react";
import { Header } from "../components/Header";
import BecomeATutorFrame from "../components/HomeScreen";

const HomePage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-2 box-border tracking-[normal] text-left text-xs text-chrome-light-disabled font-roboto">
      <section className="mb-16 self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full text-left text-8xl-9 text-gray-1 font-body-2-body-2">
        <Header />
      </section>
      <section className="absolute top-[-0.3px] left-[0px] rounded-[50%] [background:linear-gradient(172.34deg,_rgba(88,_204,_2,_0.08),_rgba(88,_204,_2,_0))] [filter:blur(274.34px)] w-full h-full" />
      {/* Main section */}
      <div className=" flex flex-col items-center justify-start py-0 px-5 box-border gap-[8px] max-w-full shrink-0 text-base text-green-2 font-body-2-body-2">
        <BecomeATutorFrame/>
      </div>
    </div>
  );
};

export default HomePage;
