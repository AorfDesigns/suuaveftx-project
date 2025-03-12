"use client";

import { useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const tabs = [
  { id: "ongoing", label: "Ongoing Contracts" },
  { id: "completed", label: "Completed Contracts" },
  { id: "pending", label: "Pending Contracts" },
];

export default function UnderlinedTabs() {
  const [activeTab, setActiveTab] = useState("completed"); // Set "completed" as default

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 py-2 text-center font-medium text-gray-600 transition-colors duration-200",
              activeTab === tab.id ? "border-b-2 border-blue-500 text-blue-600" : ""
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
