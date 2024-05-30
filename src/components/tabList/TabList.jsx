import React, { useState } from "react";
import SharedAlbum from "../sharedAlbum/SharedAlbum";
import Schedule from "../schedule/Schedule";
import Chat from "../chat/Chat";
import Info from "../info/Info";

const tabs = [
  { id: "albums", label: "앨범", component: SharedAlbum },
  { id: "schedule", label: "일정", component: Schedule },
  { id: "chat", label: "채팅", component: Chat },
  { id: "profile", label: "내 정보", component: Info },
];

export default function TabList() {
  const [activeTab, setActiveTab] = useState("albums");

  const renderContent = () => {
    const activeTabComponent = tabs.find(
      (tab) => tab.id === activeTab
    )?.component;
    return activeTabComponent ? React.createElement(activeTabComponent) : null;
  };

  return (
    <div>
      <div className="text-subheading text-theme1-black font-nanum h-[72px] grid grid-cols-4 text-center items-center bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-full h-full flex justify-center items-center ${
              activeTab === tab.id ? "font-bold bg-theme1-primary" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className={`w-full h-full max-h-[80vh] overflow-y-scroll`}
      >
        {renderContent()}
      </div>
    </div>
  );
}
