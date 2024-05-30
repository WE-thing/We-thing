import React, { useState, useEffect } from "react";

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
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;

  return `${year}.${month}.${day} ${dayOfWeek} ${formattedHour}:${minute} ${ampm}`;
}

export default function Home({ invitation, websiteMode, setWebsiteMode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [marginTop, setMarginTop] = useState("20%");
  const [marginBottom, setMarginBottom] = useState("10%");

  useEffect(() => {
    function handleResize() {
      if (window.innerHeight < window.innerWidth) {
        setMarginTop("10%");
        setMarginBottom("5%");
      } else {
        setMarginTop("20%");
        setMarginBottom("10%");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-100 h-full">
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
        className={`opacity-50 bg-[url(/src/assets/images/weddingphoto6.jpeg)]`}
      ></div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          opacity: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          zIndex: "11",
          top: "0",
        }}
        className={`${
          websiteMode ? "opacity-100 " : "opacity-0"
        } transition-all ease-in duration-`}
      ></div>
      <div
        style={{
          zIndex: "10",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: "0",
        }}
        className={`opacity-50 transition-background duration-2000 ${
          !websiteMode
            ? "bg-[rgba(255,250,239,0.2)]"
            : "bg-[rgba(255,250,239,0)]"
        }`}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% + 40px)) scale(0.7)",
          boxShadow: "2px gray",
          zIndex: "20",
        }}
        onClick={() => {
          if (websiteMode) return;
          setIsMoved(true);
          setTimeout(() => {
            setIsMoved(false);
            setIsExpanded(true);
            setTimeout(() => {
              setWebsiteMode(true);
            }, 1000);
          }, 1000); // Adjusted the timeout to match the duration of the `move` animation
        }}
        className={`w-full h-[calc(100vh-50px)] box-border bg-theme1-primary ${
          isExpanded ? "animate-expand" : ""
        } ${isMoved ? "animate-move" : ""}`}
      >
        <img
          className="w-full max-h-[60%] object-cover box-border block"
          src="/src/assets/images/weddingphoto6.jpeg"
          alt="Wedding"
        />
        <div className="my-auto mx-auto">
          <div
            className="flex justify-around w-[300px] mb-[10%] mx-auto"
            style={{ marginTop, marginBottom }}
          >
            <div className="font-nanum text-heading3 my-auto text-center">
              {invitation.person1}
            </div>
            <div className="font-nanum text-heading3 text-center w-[30px]">
              {invitation.weddingDateTime.slice(4, 6)}
              <hr className="border-t border-gray-300 my-2" />
              {invitation.weddingDateTime.slice(6, 8)}
            </div>
            <div className="font-nanum text-heading3 my-auto text-center">
              {invitation.person2}
            </div>
          </div>
          <p className="font-nanum text-body2 text-center">
            {formatDateTime(invitation.weddingDateTime)}
          </p>
          <p className="font-nanum text-body1 text-center">
            {invitation.locationName}
          </p>
        </div>
        <img
          className="absolute block top-0 left-0 m-[15px] w-[calc(100%-30px)] h-[calc(100%-30px)]"
          src="/src/assets/images/home-frame.png"
          alt="데코레이션"
        />
      </div>
    </div>
  );
}
