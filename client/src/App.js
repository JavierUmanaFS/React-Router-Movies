import React, { useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* Setting Movie/MovieList to their router paths */}
      <Route exact path="/">
        <MovieList />
      </Route>
      {/* Setting a dynamic id path */}
      <Route path="/movies/:id">
        <Movie />
      </Route>
    </div>
  );
};

export default App;
