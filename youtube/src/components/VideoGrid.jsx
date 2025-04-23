import React, { useEffect, useState } from "react";

export default function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts") // You can replace this with your own API
      .then((res) => res.json())
      .then((data) => {
        // Fake transform (you'll map real data in real app)
        const fakeVideos = data.map((item, idx) => ({
          title: item.title || `Video ${idx + 1}`,
          views: `${(Math.random() * 100).toFixed(2)}K views`,
          duration: "5:00",
          thumbnail: `https://picsum.photos/300/200?random=${idx + 1}`,
        }));
        setVideos(fakeVideos);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-white">Loading videos...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {videos.map((video, idx) => (
        <div key={idx} className="bg-zinc-900 rounded-lg overflow-hidden">
          <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
          <div className="p-3">
            <h3 className="font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-400">{video.views}</p>
            <p className="text-xs text-gray-500">{video.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
