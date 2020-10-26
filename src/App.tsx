import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Segment } from 'semantic-ui-react';
import './App.css';
import history from './history/history';
import Shell from './layouts/Shell';
import Home from './pages/home/Home';
import CreateMovie from './pages/movies/CreateMovie';
import EditMovie from './pages/movies/EditMovie';
import ListMovies from './pages/movies/ListMovies';
import ViewMovie from './pages/movies/ViewMovie';

function App() {
  return (
    <Router history={history}>
      <Shell>
        <Segment basic>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={ListMovies} />
            <Route exact path="/movies/:id" component={ViewMovie} />
            <Route exact path="/create/movie" component={CreateMovie} />
            <Route exact path="/edit/movie/:id" component={EditMovie} />
          </Switch>
        </Segment>

      </Shell>
      {/* <div className="App">
      <SidebarExampleVisible/>
    </div> */}
    </Router>
  );
}

export default App;
