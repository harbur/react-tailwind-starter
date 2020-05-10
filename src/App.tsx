import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import SidebarExampleVisible from './components/Sidebar';
import { Router } from 'react-router-dom';
import history from './history/history';

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <SidebarExampleVisible/>
    </div>
    </Router>
  );
}

export default App;
