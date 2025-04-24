import React from 'react';   

const VideoList = ({ videos, onSelect }) => { 
                                              
    return (                                   
        <div>
            {videos.map(video => (          
                <div
                    key={video.id.videoId}    
                    onClick={() => onSelect(video)}    
                    style={{ cursor: 'pointer', marginBottom: '10px' }}
                >
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    <p>{video.snippet.title}</p>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
