import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/assets/main.css';
import { makeServer } from 'server';

makeServer({ environment: "development" })

const Layout = ({ children }) => {
  return (
    <MemoryRouter>
      {children}
    </MemoryRouter>
  )
}

export default Layout;
