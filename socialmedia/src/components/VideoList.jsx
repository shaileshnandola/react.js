import React from 'react';   //React લાઇબ્રેરીને આયાત કરે છે, જે JSX (JavaScript XML) ને HTML જેવી રચનામાં રૂપાંતરિત કરવા માટે જરૂરી છે.

const VideoList = ({ videos, onSelect }) => {  // videos: વિડિઓ ઓબ્જેક્ટ્સની યાદી.//
                                               //onSelect: એક ફંક્શન, જે કોઈ વિડિઓ પસંદ થતી વખતે કોલ થાય છે.//
    return (                                    //JSX રિટર્ન કરે છે, જે UI માં રેન્ડર થાય છે//
        <div>
            {videos.map(video => (           //videos એરે પર map ફંક્શન ચલાવે છે, જે દરેક વિડિઓ માટે JSX તત્વ બનાવે છે.//
                <div
                    key={video.id.videoId}    //React ને દરેક તત્વને અનન્ય રીતે ઓળખવા માટે key પ્રોપ્સ આપે છે, જે રેન્ડરિંગ કાર્યક્ષમ બનાવે છે.
                    onClick={() => onSelect(video)}    //વિડિઓ પર ક્લિક કરવાથી onSelect ફંક્શન કોલ થાય છે, અને તે વિડિઓને પેરામિટર તરીકે મોકલે છે.//
                    style={{ cursor: 'pointer', marginBottom: '10px' }}
                >
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    {/* વિડિઓનું થંબનેલ દર્શાવે છે, જે video.snippet.thumbnails.default.url પરથી આવે છે. */}
                    <p>{video.snippet.title}</p>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
