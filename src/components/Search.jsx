import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState(""); // For user input
  const [searchResults, setSearchResults] = useState([]); // For API results
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) return; // Prevent empty searches
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=df3244313a3638b528b22372584be50c&query=${query}`
    )
      .then((response) => response.json())
      .then((json) => setSearchResults(json.results || []))
      .catch((error) => console.error("Error fetching search results:", error));
  };

  return (
    <section className="p-6">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-lime-600"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700 transition-colors"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      onClick={() => navigate(`/movie/${movie.id}`)} // Navigate to movie details

        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow flex items-start"
              onClick={() => navigate(`/movie/${movie.id}`)} // Navigate to movie details
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-24 w-16 rounded object-cover mr-4"
              />
              <div>
                <h3 className="text-white text-lg font-semibold">
                  {movie.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Release Date: {movie.release_date || "N/A"}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Rating: {movie.vote_average || "N/A"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No results found.
          </p>
        )}
      </div>
    </section>
  );
}

export default Search;
