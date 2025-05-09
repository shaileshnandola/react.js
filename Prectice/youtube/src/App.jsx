import React from "react";
import Sidebar from "./components/Sidebar";
import TopCategories from "./components/TopCategories";
import VideoGrid from "./components/VideoGrid";

export default function App() {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <TopCategories />
        <VideoGrid />
      </div>
    </div>
  );
}

