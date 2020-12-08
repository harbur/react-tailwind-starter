import moviesActions from 'actions/moviesActions';
import { Movie } from 'models/movies';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
import Title from 'ui/typography/Title';

export default function ListMovies() {
  const { data, isLoading, refetch } = moviesStore.useMovies();
  const location = useLocation()
  useEffect(() => { refetch() }, [refetch, location])

  return (
    <>
      <Title text="List Movies">
        <PrimaryNavButton to="/movies/new" label="New" />
      </Title>
      <Card>
        <Table>
          <TableHead columns={["ID", "Name", "Actions"]} />
          <TableBody>
            {data && data.movies.map((movie: Movie) => (
              <MovieRow key={movie.id} movie={movie} />
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}

interface MovieRowProps { movie: Movie }
function MovieRow({ movie }: MovieRowProps) {
  const history = useHistory()

  async function remove(id: number) {
    await moviesActions.remove(id)
    history.push('.')
  }

  return (
    <TableRow data-testid="movie" key={movie.id}>
      <TableCell>{movie.id}</TableCell>
      <TableCell><NavButton to={`/movies/view/${movie.id}/`} label={movie.name} /></TableCell>
      <TableCell><DeleteButton label="Delete" onClick={() => remove(movie.id)} testid="delete-button"/>
      </TableCell>
    </TableRow>
  )
}