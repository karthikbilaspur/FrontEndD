// Search.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setLng, setLat }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN`
    );
    const data = response.data;
    setResults(data.features);
  };

  const handleSelect = (result) => {
    setLng(result.center[0]);
    setLat(result.center[1]);
    setQuery('');
    setResults([]);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a place"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result, index) => (
          <li key={index} onClick={() => handleSelect(result)}>
            {result.place_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;