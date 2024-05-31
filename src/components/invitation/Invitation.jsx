import React from "react";

export default function Invitation({ invitation }) {
  return (
    <div className="w-full h-[500px] p-4 box-border">
      <div
        className="w-full h-full bg-theme1-invitation flex justify-center"
        style={{
          backgroundImage: 'url("/public/assets/images/invitation-frame.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center overflow-hidden">
          <p className="font-continuous mt-[100px] text-heading2 text-darkGray mb-4">
            Invitation
          </p>
          <p className="font-nanum text-body1 text-color-[#081609] mt-10 whitespace-pre-line">
            {/* 서로가 마주보며 다져온 사랑을\n
            이제 함께 한 곳을 바라보며\n
            걸어갈 수 있는 큰 사랑으로 키우고자 합니다.\n
            저희 두 사람이 사랑의 이름으로\n
            지켜나갈 수 있게 앞날을\n
            축복해 주시면 감사하겠습니다. */}
            {invitation.inviteDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
