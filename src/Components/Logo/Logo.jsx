import React from "react";

export default function Logo() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#D4A574] flex items-center justify-center border border-[#B8915F] relative gap-0.5">
      <div className="w-2 h-5.25 bg-[#F5E6D3] rounded-bl-xs flex flex-col items-center gap-0.5 pt-0.5">
        <div className="w-[4.8px] border-[0.6px] border-[#D4A574]"></div>
        <div className="w-[4.8px] border-[0.6px] border-[#D4A574]"></div>
        <div className="w-[4.8px] border-[0.6px] border-[#D4A574]"></div>
      </div>
      <div className="w-2 h-5.25 bg-[#F5E6D3] rounded-br-xs flex flex-col items-center gap-0.5 pt-0.5">
        <div className="w-[4.8px] border-[0.6px] border-[#D4A574]"></div>
        <div className="w-[4.8px] border-[0.6px] border-[#D4A574]"></div>
        <div className="w-[4.8px] border-[0.6px] border-[#D4A574]"></div>
      </div>
    </div>
  );
}
