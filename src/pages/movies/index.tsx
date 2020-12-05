import CreateMovie from 'pages/movies/CreateMovie';
import EditMovie from 'pages/movies/EditMovie';
import ListMovies from 'pages/movies/ListMovies';
import ViewMovie from 'pages/movies/ViewMovie';
import React from 'react';
import { Route } from "react-router-dom";

function Movies() {
  return (
    <>
      <Route exact path="/movies" component={ListMovies} />
      <Route strict exact path="/movies/new" component={CreateMovie} />
      <Route exact path="/movies/:id" component={ViewMovie} />
      <Route exact path="/movies/:id/edit" component={EditMovie} />
    </>
  );
}

export default Movies;
