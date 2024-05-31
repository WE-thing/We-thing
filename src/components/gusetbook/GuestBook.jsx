import React, { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import GuestBookBefore from "./GuestBookBefore";
import GuestBookAfter from "./GuestBookAfter";
import useAuth from "../../hook/useAuth";
import { getInfo } from "../../lib/apis/info";

const GuestBook = forwardRef((props, ref) => {
  const { token, setToken } = useAuth();
  const [formState, setFormState] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    id: 7,
    userName: "",
    phoneNumber: "",
    roleId: 3,
    relationshipNumber: "", //1신랑 2신부
    relationshipString: "",
    attend: "", // 1참석 2불참 3미정
  });

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setFormState(true);
    }
  }, []);

  useEffect(() => {
    const callUserData = async () => {
      if (!token) return;
      setFormData(true);
      const data = await getInfo({ token: token });
      setFormData({
        userName: data.name,
        phoneNumber: data.phoneNumber,
        relationshipNumber: data.relationshipNumber,
        relationshipString: data.relationshipString,
        attend: data.attend,
      });
      setIsSubmitted(true);
    };
    callUserData();
  }, [token]);

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
      <div ref={ref} className="w-full h-[700px] p-4 box-border bg-white">
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
})

export default GuestBook;