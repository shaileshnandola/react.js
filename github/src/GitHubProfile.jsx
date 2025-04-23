import React, { useEffect, useState } from 'react';

const GitHubProfile = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/shaileshnandola')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching data from GitHub API', error);
      });
  }, []);

  return (
    <div>
      {
        userData ? (
          <div>
            <a href={`https://github.com/${userData.login}`} target="_blank" rel="noopener noreferrer">
              <div>
                <h2>{userData.name}</h2>
                <p>Username: {userData.login}</p>
              </div>
            </a>
          </div>
        ) : (
          <p>Loading...</p>
        )
      }
    </div>
  );
};

export default GitHubProfile;
