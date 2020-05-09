import React from 'react'
import moviesStore from '../stores/moviesStore'
export const storesContext = React.createContext({
  moviesStore,
})
