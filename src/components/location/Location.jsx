import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

export default function Location({ invitation }) {
  const [isCopied, setIsCopied] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    setAnimationClass("animate-fadeIn");
    if (isCopied) return;
    setIsCopied(true);

    setTimeout(() => {
      setAnimationClass("animate-fadeOut");
      setTimeout(() => {
        setIsCopied(false);
      }, 0); // fadeOut 애니메이션 지속 시간과 동일하게 설정
    }, 1000); // 모달 표시 시간
  };

  return (
    <div className="flex w-100 flex-col items-center p-8 bg-white pt-10 pb-16">
      <p className="text-heading2 text-theme1-black text-darkGray font-nanum mt-5">
        Location
      </p>
      <img
        src="/public/assets/images/map.png"
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
              onClick={() => {
                copyToClipboard(invitation.locationAddress);
              }}
            />
          </span>
        </div>
        <div className="text-center font-nanum text-body1">
          <span className="flex justify-center text-body1 items-center">
            {invitation.locationContact}
            <MdOutlineContentCopy
              className="ml-2 cursor-pointer"
              style={{ color: "#848484" }}
              onClick={() => {
                copyToClipboard(invitation.locationContact);
              }}
            />
          </span>
        </div>
      </div>

      {isCopied && (
        <div
          className={`fixed w-90 bottom-4 mx-auto transform bg-black text-white text-center py-2 px-4 rounded ${animationClass}`}
        >
          복사되었습니다.
        </div>
      )}
    </div>
  );
}
