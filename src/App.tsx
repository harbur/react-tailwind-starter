import Menu from 'components/Menu';
import Home from 'pages/home/Home';
import CreateMovie from 'pages/movies/CreateMovie';
import EditMovie from 'pages/movies/EditMovie';
import ListMovies from 'pages/movies/ListMovies';
import Movies from 'pages/movies/Movies';
import ViewMovie from 'pages/movies/ViewMovie';
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Menu />
        <div className="p-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={ListMovies} />
            <Route strict exact path="/movies/new" component={CreateMovie} />
            <Route exact path="/movies/:id" component={ViewMovie} />
            <Route exact path="/movies/:id/edit" component={EditMovie} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
