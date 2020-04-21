import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import SidebarExampleVisible from './components/Sidebar';
import GridExampleStretched from './components/Grid';

function App() {
  return (
    <div className="App">
      <SidebarExampleVisible/>
    </div>
  );
}

export default App;
