import React, { useState } from "react";

function PlantSearch({ onSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    fetch(`http://localhost:6001/plants?name_like=${query}`)
      .then((res) => res.json())
      .then((data) => {
        onSearchResults(data);
      })
      .catch((err) => console.error("Error fetching plants:", err));
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a plant..."
        className="p-2 border rounded mr-2"
      />
      <button onClick={handleSearch} className="bg-green-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
}

export default PlantSearch;
