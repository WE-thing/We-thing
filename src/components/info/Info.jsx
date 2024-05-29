import React from "react";
import { PiLineVerticalThin } from "react-icons/pi";

export default function Info() {
  //로그인 여부 확인(토큰)

  //로그인 돼있을 시 화면 띄우고
  //아니면 폼 화면 띄우기

  return (
    //수정 예정 : 데이터 받아와서 map으로 표현하기
  <div className="my-6 flex flex-row items-center justify-center">
    <div>
      이름:
    </div>
    <PiLineVerticalThin size={32} className="mx-8" />
    <div>이름이에요</div>
  </div>
  )
}
