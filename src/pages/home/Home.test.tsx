import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './Home';

test('renders home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});
