import React from "react";

const categories = [
  "All", "Music", "Disha Vakani", "Himesh Reshammiya", "Mixes", "Palak Muchhal",
  "Web Development", "Gulshan Kumar", "T-Series", "Gujarati Cinema", "Ajay Devgn"
];

export default function TopCategories() {
  return (
    <div className="overflow-x-auto whitespace-nowrap px-4 py-2 bg-zinc-800 sticky top-0 z-10">
      {categories.map((cat, idx) => (
        <button key={idx} className="inline-block bg-zinc-700 text-sm px-4 py-1 mx-1 rounded-full hover:bg-white hover:text-black">
          {cat}
        </button>
      ))}
    </div>
  );
}
