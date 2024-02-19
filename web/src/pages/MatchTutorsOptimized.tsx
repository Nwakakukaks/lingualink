import { FunctionComponent } from "react";

import { Header } from "../components/Header";
import { TutorList } from "../components/TutorList";
import { ManualMatchTutorDialog } from "../dialogs/ManualMatch";

const MatchTutorsOptimized: FunctionComponent = () => {
  return (
    <div className="w-full min-h-screen relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[271px] box-border tracking-[normal] text-left text-xs text-chrome-light-disabled font-roboto">
      <section className="mb-10 self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full text-left text-8xl-9 text-gray-1 font-body-2-body-2">
        <Header />
      </section>
      {/* Generate Buttons */}
      <div className="w-full flex flex-row items-start justify-start pt-0 px-5 pb-6 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-end gap-[12px] max-w-full mq450:flex-wrap">
          <ManualMatchTutorDialog/>
          <button
            className="cursor-pointer border-none py-2.5 px-3 bg-white rounded-md overflow-hidden flex flex-row items-center justify-end"
            onClick={() => window.location.reload()}
          >
            <div className="flex flex-row items-center justify-start gap-[14px]">
              <img
                className="h-6 w-6 relative"
                alt=""
                src="/vuesaxtwotonestar.svg"
              />
              <div className="relative text-base leading-[155%] font-medium font-body-2-body-2 text-gray-1 text-left">
                Regenerate
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Tutor List */}
      <TutorList />
    </div>
  );
};

export default MatchTutorsOptimized;
