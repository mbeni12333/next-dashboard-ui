import React from "react";
import UserCards from "@/components/UserCards";

export default function adminPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex flex-row gap-5 flex-wrap ">
        <UserCards />
        <UserCards />
      </div>
    </div>
  );
}
