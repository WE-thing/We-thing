import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";

export default function Location({invitation}) {
  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  const address = "서울시 강남구 논현로 740";
  const phone = "02-2278-9977";

  return (
    <div className="flex flex-col items-center p-8 bg-white pt-10 pt-16 pb-16">
      <p className="text-heading2 text-theme1-black  text-darkGray font-continuous mt-5">
        Location
      </p>
      <img
        src="/src/assets/images/map.png"
        alt="오시는 길 지도"
        className="w-full h-auto mb-6 mt-9"
      />

      <div className="text-center font-nanum text-subheading mb-2">
        {invitation.locationName}
        <br />
        <div className="mt-3">
          <span className="flex justify-center text-body1 items-center">
          {invitation.locationAddress}
            <MdOutlineContentCopy
              className="ml-2 cursor-pointer"
              style={{ color: "#848484" }}
              onClick={() => copyToClipboard(phone)}
            />
          </span>
        </div>
        <div className="text-center font-nanum text-body1">
          <span className="flex justify-center itext-body items-center">
            {invitation.locationContact}
            <MdOutlineContentCopy
              className="ml-2 cursor-pointer"
              style={{ color: "#848484" }}
              onClick={() => copyToClipboard(phone)}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
