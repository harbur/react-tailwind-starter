import Menu from 'components/Menu';
import Home from 'pages/home/Home';
import Movies from 'pages/movies';
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
            <Route path="/movies" component={Movies} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
