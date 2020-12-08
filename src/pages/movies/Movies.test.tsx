
import { Server } from 'miragejs';
import React from 'react';
import { queryCache } from 'react-query';
import { makeServer } from 'server';
import { fireEvent, render, screen, waitForElementToBeRemoved } from 'utils/customRender';
import Movies from '.';
import ListMovies from './ListMovies';

let server: Server

beforeEach(() => {
  server = makeServer({ environment: "test" })
})

afterEach(() => {
  server.shutdown()
  queryCache.clear();
})

test('list movies has correct title', async () => {
  render(<Movies />);
  const linkElement = screen.getByText(/List Movies/i);
  expect(linkElement).toBeInTheDocument();
});

test('lists movies', async () => {
  server.createList("movie", 3);
  const { getAllByTestId } = render(<ListMovies />);
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  expect(getAllByTestId("movie")).toHaveLength(3);
});

test('delete a movie', async () => {
  server.create("movie");
  const { getAllByTestId } = render(<ListMovies />);
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  expect(getAllByTestId("movie")).toHaveLength(1);
  fireEvent.click(screen.getAllByTestId('delete-button')[0]);
  await waitForElementToBeRemoved(() => screen.getByTestId('delete-button'))
});
