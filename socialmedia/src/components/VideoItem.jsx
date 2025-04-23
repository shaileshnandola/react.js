// VideoItem.js
import React from 'react';

const VideoItem = ({ video, onSelect }) => {
  return (
    <div onClick={() => onSelect(video)} style={{ cursor: 'pointer' }}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <h4>{video.snippet.title}</h4>
    </div>
  );
};

export default VideoItem;
