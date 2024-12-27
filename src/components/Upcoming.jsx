import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Upcoming() {
  const navigate = useNavigate();
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=df3244313a3638b528b22372584be50c"
    )
      .then((response) => response.json())
      .then((json) => setUpcomingMovies(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(upcomingMovies);

  return (
    <section>
      <h1 className="text-center mt-6 font-semibold text-lime-600 text-2xl md:text-4xl md:mt-8 lg:text-5xl lg:mt-10">
        Upcoming
      </h1>
      <div className="grid grid-cols-2 gap-8 mx-20 my-8 md:grid-cols-4 lg:grid-cols-6 lg:mx-44 lg:mt-14 md:mx-20">
        {upcomingMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => {
              console.log(`Navigating`);
              navigate(`/movie/${movie.id}`)
            }}
          >
            <img
              className="rounded duration-500 hover:scale-125"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="bg-lime-800 text-center">☆ {movie.vote_average}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Upcoming;
