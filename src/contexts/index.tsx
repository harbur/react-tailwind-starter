import React from 'react';
import moviesStore from '../stores/movies-store';

const storesContext = React.createContext({
  moviesStore,
});

export default storesContext;
