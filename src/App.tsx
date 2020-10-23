import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import history from './history/history';
import Shell from './layouts/Shell';
import { Segment } from 'semantic-ui-react';
import Home from './pages/home/Home';
import ListMovies from './pages/movies/ListMovies';
import ViewMovie from './pages/movies/ViewMovie';
import CreateMovie from './pages/movies/CreateMovie';
import EditMovie from './pages/movies/EditMovie';
import Gradient from './components/Gradient';

function App() {
  return (
    <Router history={history}>
      <Shell>
      <Segment basic>
        <Switch>
          <Route exact path="/" component={Gradient} />
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
