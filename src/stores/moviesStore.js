import utils from '../actions/utils'

class MoviesStore {

  async createMovie(movie) {
    let response = await utils.post(`/api/movies/`, movie)
    let json = await response.json()
    return json
  }

  async listMovies() {
    let response = await utils.get('/api/movies')
    let json = await response.json()
    return json
  }

  async getMovie(id) {
    let response = await utils.get(`/api/movies/${id}`)
    let json = await response.json()
    return json
  }

  async updateMovie(id, movie) {
    let response = await utils.put(`/api/movies/${id}`, movie)
    let json = await response.json()
    return json
  }

}

export default new MoviesStore()
