import { useObserver } from 'mobx-react';
import React from 'react';
import { Button } from 'semantic-ui-react';
import { useStores } from '../../hooks/use-stores';

export default function ListMovies() {
  const { moviesStore } = useStores();
  const [movies, updateMovies] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const response = await moviesStore.list();
      updateMovies(response);
    }
    fetch();
  }, [moviesStore]);

  return useObserver(() => (
    <>
      {movies.map((movie) => (
        <Button key={movie.name}>{movie.name}</Button>
      ))}
    </>
  ));
}
