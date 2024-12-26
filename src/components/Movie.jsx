import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=df3244313a3638b528b22372584be50c`
    )
      .then((response) => response.json())
      .then((json) => setMovieDetails(json));
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="h-96"
        />
        <h1 className="text-2xl m-2">{movieDetails.title}</h1>
        <p className="m-2">Rating: {movieDetails.vote_average}</p>
        <p className="m-2">Release Date: {movieDetails.release_date}</p>
        <p className="m-2">{movieDetails.overview}</p>
      </div>
    </>
  );
};

export default Movie;
