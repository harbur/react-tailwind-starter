
import userEvent from '@testing-library/user-event';
import history from 'actions/history';
import { Server } from 'miragejs';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { makeServer } from 'server';
import { fireEvent, queryCache, render, screen, waitForElementToBeRemoved } from 'utils/customRender';
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

test('renders movies', async () => {
  render(<Movies />);
});

test('lists movies', async () => {
  server.createList("movie", 3);
  const { getAllByTestId } = render(<ListMovies />);
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  expect(getAllByTestId("movie")).toHaveLength(3);
});

test('deletes a movie', async () => {
  server.create("movie");
  const { getAllByTestId } = render(<ListMovies />);
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  expect(getAllByTestId("movie")).toHaveLength(1);
  fireEvent.click(screen.getAllByTestId('delete-button')[0]);
  await waitForElementToBeRemoved(() => screen.getByTestId('delete-button'))
});

test('view a movie', async () => {
  server.create("movie");
  history.push('/movies/view/1/')
  render(<Movies/>);
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  // assert
  await screen.findByTestId("view-movie")
});

test('creates a movie', async () => {
  history.push('/movies/new')
  render(<Movies />);
  const form = screen.getByTestId("create-movie-form")
  await act(() => userEvent.type(form.querySelector('[name="name"]') as HTMLElement, "Godfather"));
  fireEvent.submit(form)
  await waitForElementToBeRemoved(() => screen.getByTestId('create-movie-form'))
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  // assert
  await screen.findByTestId("movie")
});

test('edit a movie', async () => {
  server.create("movie");
  history.push('/movies/edit/1/')
  render(<Movies />);
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  const form = screen.getByTestId("edit-movie-form")
  await act(() => userEvent.type(form.querySelector('[name="name"]') as HTMLElement, "Godfather II"));
  fireEvent.submit(form)
  await waitForElementToBeRemoved(() => screen.getByTestId('edit-movie-form'))
  await waitForElementToBeRemoved(() => screen.getByTestId('loading'))
  // assert
  await screen.findByTestId("movie")
});
