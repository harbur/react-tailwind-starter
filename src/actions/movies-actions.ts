import utils from '../utils/rest-client';
import Movie from '../models/movie';

async function create(movie: Movie) {
  return await utils.post<Movie[]>('/api/movies', movie);
}

async function list() {
  return await utils.get<Movie[]>('/api/movies');
}

async function get(id: number) {
  return await utils.get<Movie>(`/api/movies/${id}`);
}

async function update(id: number, movie: Movie) {
  return await utils.put<Movie>(`/api/movies/${id}`, movie);
}

async function remove(id: number) {
  return await utils.remove(`/api/movies/${id}`);
}
export default { create, list, get, update, remove }