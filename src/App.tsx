import SuspenseContainer from 'containers/SuspenseContainer';
import Home from 'pages/home/Home';
import Movies from 'pages/movies';
import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Layout from 'ui/layouts/MenuLayout';
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
        <Layout>
          <SuspenseContainer>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/movies/"><Movies /></Route>
            </Switch>
          </SuspenseContainer>
        </Layout>
      </ReactQueryCacheProvider>
    </Router>
  );
}

export default App;
