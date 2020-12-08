import CreateMovie from 'pages/movies/CreateMovie';
import EditMovieWrapper from 'pages/movies/EditMovie';
import ListMovies from 'pages/movies/ListMovies';
import ViewMovieWrapper from 'pages/movies/ViewMovie';
import React from 'react';
import { Route } from "react-router-dom";

function Movies() {
  return (
    <>
      <Route exact path="/movies"><ListMovies /></Route>
      <Route strict exact path="/movies/new"><CreateMovie /></Route>
      <Route exact path="/movies/view/:id/"><ViewMovieWrapper /></Route>
      <Route exact path="/movies/edit/:id/"><EditMovieWrapper /></Route>
    </>
  );
}

export default Movies;
