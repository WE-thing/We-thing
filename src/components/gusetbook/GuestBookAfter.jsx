import React from "react";

export default function GuestBookAfter({ formData, onEdit }) {
  return (
    <div className="flex flex-col items-center">
      <div className="my-4 text-theme1-black font-nanum text-center">
        <div className="shadow-lg shadow-gray p-6">
          <p className="text-heading2">{formData.userName}</p>
          <p>{formData.phoneNumber}</p>
          <p>{formData.relationshipString}</p>
          <p>
            {formData.attend == 1
              ? "참석합니다"
              : formData.attend == 2
              ? "마음으로 함께하겠습니다"
              : "아직 정해지지 않았습니다"}
          </p>
        </div>
        <p className="mt-8">신랑&신부에게 참석 의사 전달하였습니다.</p>
      </div>

      <button
        className="mt-6 px-12 py-2 rounded-full bg-theme1-pink font-nanum text-white"
        onClick={() => onEdit(formData)}
      >
        수정
      </button>
    </div>
  );
}
