import CreateMovie from 'pages/movies/CreateMovie';
import EditMovie from 'pages/movies/EditMovie';
import ListMovies from 'pages/movies/ListMovies';
import ViewMovie from 'pages/movies/ViewMovie';
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

function Movies() {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies" component={ListMovies} />
        <Route exact path="/movies/new" component={CreateMovie} />
        <Route exact path="/movies/:id" component={ViewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
      </Switch>
    </Router>
  );
}

export default Movies;
