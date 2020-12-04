import Shell from 'layouts/Shell';
import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Shell>
        <div className="p-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
          </Switch>
        </div>
      </Shell>
    </Router>
  );
}

export default App;
