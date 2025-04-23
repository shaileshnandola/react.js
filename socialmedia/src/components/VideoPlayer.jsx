import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) return <p>Search for a video to watch.</p>;

  const videoId = video.id.videoId;
  const title = video.snippet.title;
  const description = video.snippet.description;

  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        title={title}
      ></iframe>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default VideoPlayer;
