import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = props => {
  //console.log(props);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          //console.log(response);
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  //console.log({movie});
  return (
    // Will redirect each card to '/movies/{id of movie here} to see selected movie details'
    <Link to={`/movies/${movie.id}`}>
      {/* Passing movie props down to MovieCard */}
      <MovieCard movie={movie} />
    </Link>
  );
}

export default MovieList;
