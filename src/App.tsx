import Home from 'pages/home/Home';
import Movies from 'pages/movies';
import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Menu from 'ui/components/Menu';
import './App.css';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      suspense: true,
    },
  },
})

function App() {
  return (
    <Router>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <div className="flex flex-col h-screen">
          <Menu />
          <div className="p-4">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movies/" component={Movies} />
            </Switch>
          </div>
        </div>
      </ReactQueryCacheProvider>
    </Router>
  );
}

export default App;
