import React, { useEffect, useState } from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import useAuth from "../../hook/useAuth";

import { getInfo } from "../../lib/apis/info";

export default function Info() {
  //로그인 여부 확인(토큰)
  const { token, handleShow, LoginModal, setToken } = useAuth();

  const [userData, setUserData] = useState([]);

  //로그인 돼있을 시 화면 띄우고
  //아니면 폼 화면 띄우기

  // 초기 토큰 설정
  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      handleShow();
    }
  }, []);

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    const callUserData = async () => {
      if (!token) return;
      const data = await getInfo({ token: token });
      const newData = data.isMain
        ? [
            { key: "이름", value: data.name },
            { key: "전화번호", value: data.phoneNumber },
            { key: "초대/관계", value: data.relationshipString },
            { key: "초대받은 인원", value: data.userCnt + "명" },
          ]
        : [
            { key: "이름", value: data.name },
            { key: "전화번호", value: data.phoneNumber },
            { key: "초대/관계", value: data.relationshipString },
            { key: "참석 의사", value: data.attend },
          ];
      setUserData(newData);
    };
    callUserData();
  }, [token]);

  return (
    <div className={`w-full overflow-y-auto`}>
      <div className="w-full">
        {userData.map((e, index) => (
          <div
            key={index}
            className="my-6 flex flex-row items-center justify-center"
          >
            <div className="text-theme1-black font-nanum w-32 text-center">
              {e.key}
            </div>
            <PiLineVerticalThin size={32} className="mx-8" />
            <div className="flex items-center">
              <div className="text-theme1-black font-nanum w-32 text-center">
                {e.value}
              </div>
              {index ===userData.length - 1 ? (
                <button className="rounded-full bg-theme1-pink font-nanum text-white" style={{width: "40px"}}>수정</button>
              ) : 
              <div style={{width : "40px"}}/>}
            </div>
          </div>
        ))}
        <LoginModal />
      </div>
    </div>
  );
}
