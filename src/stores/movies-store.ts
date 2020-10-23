import moviesActions from 'actions/movies-actions';
import GenericError from 'models/generic-error';
import Movie from 'models/movie';
import QueryKeys from 'models/query-keys';
import { useQuery } from 'react-query';

/**
 * Hook that triggers the query to retrieve list of Movies.
 */
function useMovies() {
  const queryKey: QueryKeys = ["movies"]
  return useQuery<Movie[], GenericError>(queryKey, () => moviesActions.list());
}

/**
 * Hook that triggers the query to retrieve a specific Movie.
 * 
 * @param id the ID of the movie.
 */
function useMovie(id: number) {
  const enabled = id !== undefined
  const queryKey: QueryKeys = ["movies", { id }]
  return useQuery<Movie, Error>(enabled && queryKey, () => moviesActions.get(id), { enabled });
}

export default { useMovies, useMovie }
