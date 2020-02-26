//What are { called } ?
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";

const Movie = props => {
  // Setting state of movie
  const [movie, setMovie] = useState();

  //Destructing ID to useParams
  const { id } = useParams();

  useEffect(() => {

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios //Making the url dynamic for individual movie
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        //Setting movie to response.data
        setMovie(response.data);
        // console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
    //Only render when changes are made to id
  }, [id]);




  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return (
    <div className="save-wrapper">
      {/* Stretch, Passing movie props to be used in MovieCard */}
      <MovieCard movie={movie} />
      <div className="save-button">Save</div>
    </div>
  );
};

export default Movie;