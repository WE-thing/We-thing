import React, { useState, useEffect } from "react";
import axios from "axios";
import GuestBookBefore from "./GuestBookBefore";
import GuestBookAfter from "./GuestBookAfter";

export default function GuestBook() {
  const [formState, setFormState] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    id: 7,
    userName: "",
    phoneNumber: "",
    roleId: 3,
    relationshipNumber: 1, //1신랑 2신부
    relationshipString: "",
    attend: 1, // 1참석 2불참 3미정
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
    setFormState(true);
    setIsSubmitted(true);
  };
  const handleEdit = (data) => {
    setFormData(data);
    setFormState(false);
  };

  return (
    <>
      <div className="w-full h-[700px] p-4 box-border bg-white">
        <div className=" mt-8 text-heading2 text-theme1-black font-continuous flex items-center justify-center">
          GuestBook
        </div>
        <div className=" mt-4 text-theme1-black font-nanum text-center">
          신랑&신부에게 참석 의사 전달하기
        </div>

        {formState ? (
          <GuestBookAfter formData={formData} onEdit={handleEdit} />
        ) : (
          <GuestBookBefore
            onFormSubmit={handleFormSubmit}
            formData={formData}
            onEdit={handleEdit}
            isSubmitted={isSubmitted}
          />
        )}
      </div>
    </>
  );
}
