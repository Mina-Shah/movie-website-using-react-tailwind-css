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
       <div className="p-6 text-gray-400">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={`Poster of ${movieDetails.title}`}
          className="h-96 max-w-full mb-6 md:mb-0 md:mr-6"
        />
        <div className="md:ml-4">
          <h1 className="text-2xl font-bold mb-4">{movieDetails.title}</h1>
          <p className="mb-2">
            <span className="font-semibold">☆ Rating:</span>{" "}
            {movieDetails.vote_average || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Release Date:</span>{" "}
            {movieDetails.release_date || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Overview:</span>{" "}
            {movieDetails.overview || "No overview available."}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Movie;
