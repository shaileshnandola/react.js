import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: '20px' }}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="🔍 Search YouTube videos..."
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '8px 0 0 8px',
          border: '1px solid #ccc',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 15px',
          border: 'none',
          backgroundColor: '#cc0000',
          color: 'white',
          borderRadius: '0 8px 8px 0',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
