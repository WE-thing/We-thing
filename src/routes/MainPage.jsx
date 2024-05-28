import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">메인페이지입니다.</h1>
      <Link to="/create" className="text-blue-500">
        Create New Invitation
      </Link>
    </div>
  );
}
