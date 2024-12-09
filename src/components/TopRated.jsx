import React, { useEffect, useState } from "react";

function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=df3244313a3638b528b22372584be50c"
    )
      .then((response) => response.json())
      .then((json) => setTopRatedMovies(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(topRatedMovies);

  return (
    <section>
      <h1 className="text-center mt-6 font-semibold text-lime-600 text-2xl md:text-4xl md:mt-8 lg:text-5xl lg:mt-20">
        Top Rated
      </h1>
      <div className="">
        <div className="grid grid-cols-2 gap-8 mx-20 my-8 md:grid-cols-4 lg:grid-cols-6 lg:mx-44 lg:mt-14 md:mx-20">
          {topRatedMovies.map((TopRated) => (
            <img
            className="h- border border-white rounded-xl"
              src={`https://image.tmdb.org/t/p/w500${TopRated.poster_path}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopRated;
