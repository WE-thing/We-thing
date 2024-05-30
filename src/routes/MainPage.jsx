import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="max-w-md mx-auto bg-white h-screen flex flex-col items-center justify-center shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        메인페이지입니다.
      </h1>
      <Link
        to="/create"
        className="text-gray bg-theme1-primary hover:text-white hover:bg-theme1-pink font-medium py-2 px-4 rounded transition duration-300"
      >
        Create New Invitation
      </Link>
    </div>
  );
}
