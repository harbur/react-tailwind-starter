import moviesActions from 'actions/moviesActions';
import Movie from 'models/movies';
import React from 'react';
import { queryCache } from 'react-query';
import moviesStore from 'stores/moviesStore';
import DeleteButton from 'ui/buttons/DeleteButton';
import NavButton from 'ui/buttons/NavButton';
import PrimaryNavButton from 'ui/buttons/PrimaryNavButton';
import Card from 'ui/cards/Card';
import Table from 'ui/cards/table/Table';
import TableBody from 'ui/cards/table/TableBody';
import TableCell from 'ui/cards/table/TableCell';
import TableHead from 'ui/cards/table/TableHead';
import TableRow from 'ui/cards/table/TableRow';
import Title from 'ui/cards/Title';

export default function ListMovies() {
  const { data, status } = moviesStore.useMovies();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;

  return (
    <>
      <Title text="List Movies">
        <PrimaryNavButton to="/movies/new" title="New" />
      </Title>
      <Card>
        <Table>
          <TableHead columns={["ID", "Name", "Actions"]} />
          <TableBody>
            {data && data.map((movie: Movie) => (
              <MovieRow movie={movie} />
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}


interface MovieRowProps { movie: Movie }
function MovieRow({ movie }: MovieRowProps) {
  async function remove(id: number) {
    await moviesActions.remove(id)
    queryCache.refetchQueries("movies")
  }

  return (
    <TableRow key={movie.ID}>
      <TableCell>{movie.ID}</TableCell>
      <TableCell><NavButton to={`/movies/view/${movie.ID}/`} title={movie.name} /></TableCell>
      <TableCell><DeleteButton title="Delete" onClick={() => remove(movie.ID)} />
      </TableCell>
    </TableRow>
  )
}