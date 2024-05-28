import React from "react";
function formatDateTime(dateTimeStr) {
  const year = dateTimeStr.substring(0, 4);
  const month = dateTimeStr.substring(4, 6);
  const day = dateTimeStr.substring(6, 8);
  const hour = parseInt(dateTimeStr.substring(8, 10), 10);
  const minute = dateTimeStr.substring(10, 12);

  // 날짜 객체 생성
  const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);

  // 요일 계산
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];

  // 시간 포맷팅
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;

  return `${year}.${month}.${day} ${dayOfWeek} ${formattedHour}:${minute} ${ampm}`;
}
export default function Home({invitation}) {
  return (
    <div className="w-full h-[calc(100vh-50px)]  box-border bg-theme1-primary">
      <img
        className="w-full max-h-[60%] object-cover  box-border block "
        src="/src/assets/images/weddingphoto6.jpeg"
        alt="Wedding"
      />
      <div className="my-auto mx-auto">
        <div className="flex justify-around w-[300px] mt-[20%] mb-[10%] mx-auto ">
          <div className="font-nanum text-heading3 my-auto text-center">
            고우림
          </div>
          <div className="font-nanum text-heading3 text-center w-[30px]">
            {invitation.weddingDateTime.slice(4,6)}
            <hr className="border-t border-gray-300 my-2" />
            {invitation.weddingDateTime.slice(6,8)}
          </div>
          <div className="font-nanum text-heading3 my-auto text-center">
            김연아
          </div>
        </div>
        <p className="font-nanum text-body2 text-center">
          {formatDateTime(invitation.weddingDateTime)}
          {/* {formatDateTime(invitation.weddingDateTime)} */}
        </p>
        <p className="font-nanum text-body1 text-center">
        {invitation.locationName}
        </p>
      </div>
    </div>
  );
}
