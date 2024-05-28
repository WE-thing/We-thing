import React from "react";

export default function WeddingGift() {
  return (
    <div className="w-full h-[300px] p-4 box-border bg-lightGray">
      <div className="mt-6 text-heading3 text-theme1-black font-nanum font-bold flex items-center justify-center">
        신랑&신부에게 마음전하기
      </div>
      <div className=" mt-4 text-theme1-black font-nanum flex items-center justify-center">
        축복의 의미로 축의금을 전달해보세요.
      </div>
      <div className="flex justify-around w-[300px] my-[50px] mx-auto">
        <div>
          <div className="text-theme1-black font-nanum text-center">신랑</div>
          <button className="mt-6 px-8 py-2 rounded-full bg-darkGray text-white font-nanum ">
            계좌번호
          </button>
        </div>
        <div>
          <div className="text-theme1-black font-nanum text-center">신부</div>
          <button className="mt-6 px-8 py-2 rounded-full bg-white text-theme1-black font-nanum">
            계좌번호
          </button>
        </div>
      </div>
    </div>
  );
}
