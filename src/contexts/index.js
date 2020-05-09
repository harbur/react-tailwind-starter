import React from 'react';
import moviesStore from '../stores/moviesStore';

const storesContext = React.createContext({
  moviesStore,
});

export default storesContext;
