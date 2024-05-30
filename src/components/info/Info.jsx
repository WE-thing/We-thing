import React, { useEffect } from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import useAuth from "../../hook/useAuth";

import { getInfo } from "../../lib/apis/info";

export default function Info() {
  //로그인 여부 확인(토큰)
  const { token, handleShow, LoginModal, setToken } = useAuth();

  //로그인 돼있을 시 화면 띄우고
  //아니면 폼 화면 띄우기

  useEffect(() => {
    console.log("토큰: ",token);
    if (!token) {
      handleShow();
    }
  }, []);
  
  useEffect(() => {
    const callUserData = async() => {
      setToken(window.localStorage.getItem("token"));
      let data;
      if(token) data = await getInfo({token:token});
    };
    callUserData();
  },[ [window.localStorage.getItem("token")]]);

  return (
    //수정 예정 : 데이터 받아와서 map으로 표현하기
  <div className="my-6 flex flex-row items-center justify-center">
    <div>
      이름:
    </div>
    <PiLineVerticalThin size={32} className="mx-8" />
    <div>이름이에요</div>

    <LoginModal />
  </div>
  )
}
