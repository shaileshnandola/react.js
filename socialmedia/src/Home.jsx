import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

const Home = () => {
  const apiKey = 'AIzaSyB-EHYKMBXkjeyB1USSJ2ge0Wax4tsoJtE';
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = (query) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&maxResults=10&type=video`
    )
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.items.filter(
          (item) => item.id.kind === 'youtube#video'
        );
        setVideos(filtered);
        setSelectedVideo(filtered[0]);
      })
      .catch((err) => {
        console.error('Error fetching videos:', err);
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>YouTube Lite 🎥</h1>
      <SearchBar onSearch={handleSearch} />
      <div style={styles.content}>
        <div style={styles.videoPlayer}>
          <VideoPlayer video={selectedVideo} />
        </div>
        <div style={styles.videoList}>
          <VideoList videos={videos} onSelect={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#cc0000',
  },
  content: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  videoPlayer: {
    flex: 2,
    minWidth: '300px',
  },
  videoList: {
    flex: 1,
    minWidth: '250px',
    maxHeight: '500px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
};

export default Home;
