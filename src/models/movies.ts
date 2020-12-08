export interface Movie {
  id: number,
  name: string,
}

export interface ListMovies {
  movies: Movie[],
}

export interface GetMovie {
  movie: Movie,
}
