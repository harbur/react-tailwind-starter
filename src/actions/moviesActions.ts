import Movie from 'models/movies';
import restClient from 'utils/restClient';

async function create(movie: Movie) {
  return await restClient.post<Movie[]>('/api/movies', movie);
}

async function list() {
  return await restClient.get<Movie[]>('/api/movies');
}

async function get(id: number) {
  return await restClient.get<Movie>(`/api/movies/${id}`);
}

async function update(id: number, movie: Movie) {
  return await restClient.put<Movie>(`/api/movies/${id}`, movie);
}

async function remove(id: number) {
  return await restClient.remove(`/api/movies/${id}`);
}

const moviesActions = { create, list, get, update, remove }
export default moviesActions
