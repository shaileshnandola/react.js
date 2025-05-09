import React from "react";
import { Home, Clock, ThumbsUp, Video } from "lucide-react";

const menuItems = [
  { icon: <Home size={20} />, label: "Home" },
  { icon: <Video size={20} />, label: "Shorts" },
  { icon: <Clock size={20} />, label: "Watch Later" },
  { icon: <ThumbsUp size={20} />, label: "Liked videos" },
];

export default function Sidebar() {
  return (
    <div className="w-56 bg-zinc-900 p-4">
      {menuItems.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded-lg cursor-pointer">
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
