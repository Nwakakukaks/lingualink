import React from "react";

export const Cookie = () => {
  return (
    <div className=" rounded-2xl bg-beige flex flex-row flex-wrap items-start justify-start py-3 px-6 box-border gap-[16px] max-w-full text-xs text-gray-1 mb-8">
      <img
        className="h-9 w-9 relative overflow-hidden shrink-0 object-cover"
        loading="eager"
        alt=""
        src="/cookies-1@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border min-w-[354px] max-w-full mq450:min-w-full">
        <div className="self-stretch relative leading-[150%]">
          <span>{`We use cookies to improve your browsing experience. By clicking "Accept Cookies", you agree to the use of cookies. To find out more visit our `}</span>
          <span className="text-green-2">Cookie Policy</span>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-2 pr-[7px] pl-2.5 bg-gray-1 rounded-2xl overflow-hidden flex flex-row items-center justify-center relative gap-[10px]">
        <div className="relative text-sm leading-[150%] font-body-2-body-2 text-white text-left">
          Accept cookies
        </div>

       
      </button>
    </div>
  );
};
