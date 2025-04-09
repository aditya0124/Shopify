import React from 'react';

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
