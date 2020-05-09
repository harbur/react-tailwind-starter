import utils from '../actions/utils';

class MoviesStore {
  async create(movie) {
    const response = await utils.post('/api/movies/', movie);
    const json = await response.json();
    return json;
  }

  async list() {
    const response = await utils.get('/api/movies');
    const json = await response.json();
    return json;
  }

  async get(id) {
    const response = await utils.gset(`/api/movies/${id}`);
    const json = await response.json();
    return json;
  }

  async update(id, movie) {
    const response = await utils.put(`/api/movies/${id}`, movie);
    const json = await response.json();
    return json;
  }
}
export default new MoviesStore();
