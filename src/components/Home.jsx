import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [query, setQuery] = useState(""); // State for input query
  const [movies, setMovies] = useState([]); // State for movie results
  console.log(movies);
  const getMovies = (searchQuery) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=df3244313a3638b528b22372584be50c&query=${searchQuery}`
    )
      .then((resp) => resp.json())
      .then((json) => setMovies(json.results || []))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${query}`);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <>
      <div className="relative flex justify-center items-center h-screen bg-black">
        <img
          src="/bg.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          alt="Background"
        />

        <div className="relative z-10 text-center">
          <h1 className="text-white text-xl md:text-4xl lg:text-6xl">
            Millions of movies. Explore now.
          </h1>

          <div className="mt-4 flex justify-center items-center gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-60 text-white bg-zinc-900 p-2 rounded md:w-80 lg:w-96 lg:p-3"
              placeholder="Search for Movies"
            />
            <Search color="#ffffff" size={20} className="-ml-12" />
          </div>
        </div>

        {movies.length > 0 && (
          <div className="absolute text-white bg-zinc-900 mt-80 ml-3 p-4 text-xs w-60 md:w-80 md:ml-3 lg:mt-80 lg:w-96 lg:text-sm rounded shadow-lg overflow-y-auto max-h-60">
            {movies.map((movie) => (
              <div key={movie.id} className="py-2 border-b">
                <p>{movie.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSection;
