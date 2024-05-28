import React, { useState, useEffect } from "react";
import { IoCall, IoMailOutline } from "react-icons/io5";
import axios from "axios";

export default function Contact() {
  const [couple, setCouple] = useState({
    sinlangNumber: "",
    sinbuNumber: "",
  });

  useEffect(() => {
    const fetchCoupleList = async () => {
      try {
        const id = "66558c44a89a71989539139e";
        const coupleResponse = await axios.get(`/api/couple/${id}`);
        const coupleData = coupleResponse.data;

        const sinlangResponse = await axios.get(
          `/api/user/${coupleData.coupleId.sinlangId}`
        );
        const sinbuResponse = await axios.get(
          `/api/user/${coupleData.coupleId.sinbuId}`
        );

        setCouple({
          sinlangNumber: sinlangResponse.data[0].phoneNumber,
          sinbuNumber: sinbuResponse.data[0].phoneNumber,
        });
      } catch (error) {
        console.error("Error fetching couple data:", error);
      }
    };
    fetchCoupleList();
  }, []);

  const handleCallClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleMailClick = (phoneNumber) => {
    window.location.href = `sms:${phoneNumber}`;
  };
  return (
    <div className=" w-full h-[300px] p-4 box-border bg-lightGray">
      <div className="mt-8 text-heading2 text-theme1-black font-continuous flex items-center justify-center">
        Contact
      </div>
      <div className="flex justify-around w-[300px] my-[50px] mx-auto">
        <div>
          <div className="text-theme1-black font-nanum text-center">신랑</div>
          <button className="mt-6 px-8 py-2 rounded-full bg-darkGray flex">
            <IoCall
              color="white"
              size="24"
              className="mr-4"
              onClick={() => handleCallClick(couple.sinlangNumber)}
            />
            <IoMailOutline
              color="white"
              size="24"
              onClick={() => handleMailClick(couple.sinlangNumber)}
            />
          </button>
        </div>
        <div>
          <div className="text-theme1-black font-nanum text-center">신부</div>
          <button className="mt-6 px-8 py-2 rounded-full bg-white flex items-center justify-center">
            <IoCall
              color="#848484"
              size="24"
              className="mr-4"
              onClick={() => handleCallClick(couple.sinbuNumber)}
            />
            <IoMailOutline
              color="#848484"
              size="24"
              onClick={() => handleMailClick(couple.sinbuNumber)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
