import React, { useState, useEffect } from "react";
import { PiLineVerticalThin } from "react-icons/pi";

export default function Schedule() {
  const [scheduleList, setScheduleList] = useState([]);

  useEffect(() => {
    // 로컬 테스트 데이터를 설정
    setScheduleList([
      { sTime: "12:00", eTime: "13:00", todo: "일정1" },
      { sTime: "13:00", eTime: "14:00", todo: "일정2" },
      { sTime: "14:00", eTime: "15:00", todo: "일정3" },
    ]);
  }, []);

  return (
    <div>
      {scheduleList.map((e, index) => (
        <div
          key={index}
          className="my-6 flex flex-row items-center justify-center"
        >
          <div className="text-theme1-black font-nanum">
            {e.sTime} : {e.eTime}
          </div>
          <PiLineVerticalThin size={32} className="mx-8" />
          <div className="text-theme1-black font-nanum">{e.todo}</div>
        </div>
      ))}
    </div>
  );
}
