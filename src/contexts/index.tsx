import React from 'react';
import moviesStore from '../actions/movies';

const storesContext = React.createContext({
  moviesStore,
});

export default storesContext;
