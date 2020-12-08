import moviesActions from 'actions/moviesActions';
import { GetMovie, ListMovies } from 'models/movies';
import QueryKeys from 'models/queryKeys';
import { useQuery } from 'react-query';

/**
 * Hook that triggers the query to retrieve list of Movies.
 */
function useMovies() {
  const queryKey: QueryKeys = ["movies"]
  return useQuery<ListMovies, Error>(queryKey, () => moviesActions.list());
}

/**
 * Hook that triggers the query to retrieve a specific Movie.
 * 
 * @param id the ID of the movie.
 */
function useMovie(id: number) {
  const enabled = id !== undefined
  const queryKey: QueryKeys = ["movies", { id }]
  return useQuery<GetMovie, Error>(enabled && queryKey, () => moviesActions.get(id), { enabled });
}

const moviesStore = { useMovies, useMovie }
export default moviesStore
