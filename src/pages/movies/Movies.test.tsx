
import { Server } from 'miragejs';
import React from 'react';
import { makeServer } from 'server';
import { render, screen, waitForElementToBeRemoved } from 'utils/customRender';
import ListMovies from './ListMovies';

let server: Server

beforeEach(() => {
  server = makeServer({ environment: "test" })
})

afterEach(() => {
  server.shutdown()
})

test('lists movies', async () => {
  server.createList("movie", 3);
  render(<ListMovies />);
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  const linkElement = screen.getByText(/List Movies/i);
  expect(linkElement).toBeInTheDocument();
});
