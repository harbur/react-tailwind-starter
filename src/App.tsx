import React from 'react';
import { Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import history from './history/history';
import Shell from './layouts/Shell';

function App() {
  return (
    <Router history={history}>
      <Shell/>
    {/* <div className="App">
      <SidebarExampleVisible/>
    </div> */}
    </Router>
  );
}

export default App;
