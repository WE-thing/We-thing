import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className=" text-heading2 text-theme1-black font-continuous">
        Contact
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className=" basis-1/2 flex flex-col items-center">
          <div>신랑</div>
          <button className="mt-4 rounded-full bg-neutral-600 w-1/2 flex items-center justify-center">
            <img
              src="src\assets\images\call-icon.png"
              className="w-6 h-6 mx-1"
            />
            <img
              src="src\assets\images\msg-icon.png"
              className="w-6 h-6 mx-1"
            />
          </button>
        </div>

        <div className=" basis-1/2 flex flex-col items-center">
          <div>신부</div>
          <button className="mt-4 rounded-full bg-neutral-600 w-1/2 flex items-center justify-center">
            <img
              src="src\assets\images\call-icon.png"
              className="w-6 h-6 mx-1"
            />
            <img
              src="src\assets\images\msg-icon.png"
              className="w-6 h-6 mx-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
