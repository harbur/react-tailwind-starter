import utils from '../actions/utils';
import Movie from '../models/movie';

class MoviesStore {
  async create(movie: Movie) {
    const response = await utils.post('/api/movies', movie);
    const json = await response.json();
    return json;
  }

  async list() {
    const response = await utils.get('/api/movies');
    const json = await response.json();
    return json;
  }

  async get(id: number) {
    const response = await utils.get(`/api/movies/${id}`);
    const json = await response.json();
    return json;
  }

  async update(id: number, movie: Movie) {
    const response = await utils.put(`/api/movies/${id}`, movie);
    const json = await response.json();
    return json;
  }
  async delete(id: number) {
  const response = await utils.delete(`/api/movies/${id}`);
    return response.ok;
  }
}
export default new MoviesStore();
