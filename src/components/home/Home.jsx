import React from "react";

export default function Main() {
  return (
    <div className="w-full h-[calc(100vh-50px)]  box-border bg-theme1-primary">
      <img
        className="w-full max-h-[540px] object-cover  box-border"
        src="src/assets/images/weddingphoto6.jpeg"
        alt="Wedding"
      />
      <div className="flex justify-around w-[300px] my-[60px] mx-auto ">
        <div className="font-nanum text-heading3 text-center">고우림</div>
        <div className="font-nanum text-heading3 text-center w-[30px]">
          10
          <hr className="border-t border-gray-300 my-2" />
          12
        </div>
        <div className="font-nanum text-heading3 text-center">김연아</div>
      </div>
      <p className="font-nanum text-body2 text-center">
        2023.10.12 SAT 1:30 PM
      </p>
      <p className="font-nanum text-body1 text-center">
        아펠가모 광화문 B2 로스타뇨홀
      </p>
    </div>
  );
}
