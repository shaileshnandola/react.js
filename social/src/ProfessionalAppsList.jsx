import React, { useState } from 'react';

const professionalApps = [
  {
    id: 1,
    category: "Social Media",
    appName: "LinkedIn",
    description: "Professional networking and career building",
    founder: "Reid Hoffman",
    launched: "May 2003",
    headquarters: "Sunnyvale, California, USA"
  },
  {
    id: 2,
    category: "Social Media",
    appName: "YouTube",
    description: "A video-sharing platform to upload, view, and share videos",
    founder: "Chad Hurley, Steve Chen, Jawed Karim",
    launched: "February 2005",
    headquarters: "San Bruno, California, USA"
  },
  {
    id: 3,
    category: "Social Media",
    appName: "Instagram",
    description: "A photo and video-sharing social networking service",
    founder: "Kevin Systrom, Mike Krieger",
    launched: "October 2010",
    headquarters: "Menlo Park, California, USA"
  },
  {
    id: 4,
    category: "Social Media",
    appName: "Facebook",
    description: "A social media platform to connect with friends, family, and the world",
    founder: "Mark Zuckerberg, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, Chris Hughes",
    launched: "February 2004",
    headquarters: "Menlo Park, California, USA"
  },
  {
    id: 5,
    category: "Social Media",
    appName: "Twitter",
    description: "A microblogging and social networking service where users post and interact with messages",
    founder: "Jack Dorsey, Noah Glass, Biz Stone, Evan Williams",
    launched: "March 2006",
    headquarters: "San Francisco, California, USA"
  },
  {
    id: 6,
    category: "Social Media",
    appName: "WhatsApp",
    description: "A messaging app to send text, voice, images, and videos",
    founder: "Jan Koum, Brian Acton",
    launched: "January 2009",
    headquarters: "Mountain View, California, USA"
  },
  {
    id: 7,
    category: "Social Media",
    appName: "Telegram",
    description: "A cloud-based instant messaging, video, and voice call app",
    founder: "Pavel Durov, Nikolai Durov",
    launched: "August 2013",
    headquarters: "Dubai, UAE"
  },
  {
    id: 8,
    category: "Social Media",
    appName: "Google",
    description: "A search engine and technology platform offering various services including email, cloud storage, and video sharing",
    founder: "Larry Page, Sergey Brin",
    launched: "September 1998",
    headquarters: "Mountain View, California, USA"
  },
  {
    id: 9,
    category: "Social Media",
    appName: "TikTok",
    description: "A video-sharing social media platform for creating and sharing short videos",
    founder: "Zhang Yiming",
    launched: "September 2016",
    headquarters: "Beijing, China"
  },
  {
    id: 10,
    category: "Social Media",
    appName: "Moj",
    description: "An Indian short video app, created as an alternative to TikTok",
    founder: "ShareChat",
    launched: "July 2020",
    headquarters: "Bengaluru, India"
  }
];

const ProfessionalAppsList = () => {
  const [search, setSearch] = useState("");

  const filteredApps = professionalApps.filter(app =>
    app.appName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 font-sans max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Social Media Apps</h1>
      
      <input
        type="text"
        placeholder="Search app name..."
        className="w-full p-3 mb-6 border rounded-lg shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredApps.map(app => (
          <div key={app.id} className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-all border">
            <h2 className="text-xl font-semibold">{app.appName}</h2>
            <p className="text-sm text-gray-600 mb-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{app.category}</span>
            </p>
            <p className="text-sm mb-2">{app.description}</p>
            <p className="text-sm text-gray-700"><strong>Founder:</strong> {app.founder}</p>
            <p className="text-sm text-gray-700"><strong>Launched:</strong> {app.launched}</p>
            <p className="text-sm text-gray-700"><strong>HQ:</strong> {app.headquarters}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalAppsList;
