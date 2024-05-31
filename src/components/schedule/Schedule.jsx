import React, { useState, useEffect, useCallback } from "react";
import { PiLineVerticalThin } from "react-icons/pi";

export default function Schedule() {
  const [scheduleList, setScheduleList] = useState([]);
  const [weddingDateTime, setWeddingDateTime] = useState("");

  const getWeddingDate = useCallback(() => {
    const year = weddingDateTime.slice(0, 4);
    const month = weddingDateTime.slice(4, 6) - 1;
    const day = weddingDateTime.slice(6, 8);
    const weddingDate = new Date(year, month, day);

    return weddingDate;
  }, [weddingDateTime]);

  useEffect(() => {
    const today = new Date();
    const weddingDate = getWeddingDate();

    if (
      today.getFullYear() === weddingDate.getFullYear() &&
      today.getMonth() === weddingDate.getMonth() &&
      today.getDate() === weddingDate.getDate()
    ) {
      setScheduleList((scheduleList) =>
        scheduleList.map((schedule) => {
          const [startHour, startMinute] = schedule.sTime
            .split(":")
            .map(Number);
          const [endHour, endMinute] = schedule.eTime.split(":").map(Number);

          const startDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            startHour,
            startMinute
          );
          const endDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            endHour,
            endMinute
          );

          return {
            ...schedule,
            isActive: today >= startDate && today < endDate,
          };
        })
      );
    }
  }, [weddingDateTime, getWeddingDate]);

  useEffect(() => {
    // 로컬 테스트 데이터를 설정
    setScheduleList([
      { sTime: "09:00", eTime: "10:00", todo: "손님 맞이" },
      { sTime: "10:00", eTime: "13:00", todo: "본식 진행" },
      { sTime: "13:00", eTime: "15:00", todo: "식사 시간" },
      { sTime: "15:00", eTime: "16:00", todo: "2부 진행" },
      { sTime: "16:00", eTime: "17:00", todo: "마무리" },
    ]);
    setWeddingDateTime("202405311600");
  }, []);

  return (
    <div className="w-full h-[calc(80vh-72px)] overflow-y-auto">
      {scheduleList.map((e, index) => {
        return (
          <div
            key={index}
            className={`my-6 flex flex-row items-center justify-center ${
              e.isActive && " font-bold"
            }`}
          >
            <div
              className={`text-theme1-black font-nanum w-32 text-center ${
                e.isActive && " text-theme1-red"
              }`}
            >
              {e.sTime} : {e.eTime}
            </div>
            <PiLineVerticalThin size={32} className="mx-8" />
            <div className="text-theme1-black font-nanum w-32 text-center">
              {e.todo}
            </div>
          </div>
        );
      })}
    </div>
  );
}
