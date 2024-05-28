import React from "react";
import { IoCall, IoMailOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div className=" w-full h-[300px] p-4 box-border bg-lightGray">
      <div className="mt-8 text-heading2 text-theme1-black font-continuous flex items-center justify-center">
        Contact
      </div>
      <div className="flex justify-around w-[300px] my-[50px] mx-auto">
        <div>
          <div className="text-theme1-black font-nanum text-center">신랑</div>
          <button className="mt-6 px-8 py-2 rounded-full bg-darkGray flex">
            <IoCall color="white" size="24" className="mr-4" />
            <IoMailOutline color="white" size="24" />
          </button>
        </div>
        <div>
          <div className="text-theme1-black font-nanum text-center">신부</div>
          <button className="mt-6 px-8 py-2 rounded-full bg-white flex items-center justify-center">
            <IoCall color="#848484" size="24" className="mr-4" />
            <IoMailOutline color="#848484" size="24" />
          </button>
        </div>
      </div>
    </div>
  );
}
