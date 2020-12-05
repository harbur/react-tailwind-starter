import moviesActions from 'actions/moviesActions';
import Card from 'ui/cards/Card';
import Table from 'ui/cards/table/Table';
import TableBody from 'ui/cards/table/TableBody';
import TableCell from 'ui/cards/table/TableCell';
import TableHead from 'ui/cards/table/TableHead';
import TableRow from 'ui/cards/table/TableRow';
import Title from 'ui/cards/Title';
import Movie from 'models/movies';
import React from 'react';
import { queryCache } from 'react-query';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Icon } from 'semantic-ui-react';
import moviesStore from 'stores/moviesStore';
import PrimaryNavButton from 'ui/buttons/PrimaryButton';

export default function ListMovies() {
  const { data, status } = moviesStore.useMovies();

  async function remove(id: number) {
    await moviesActions.remove(id)
    queryCache.refetchQueries("movies")
  }
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;

  return (
    <>
      <Title text="List Movies">
        <PrimaryNavButton to="/movies/new" title="New" />
      </Title>

      <Card>
        <div className="py-4">
          <Table>
            <TableHead columns={["Movie ID", "Movie Name", "Actions"]} />
            <TableBody>
              {data && data.map((movie: Movie) => (
                <TableRow key={movie.ID}>
                  <TableCell>{movie.ID}</TableCell>
                  <TableCell>{movie.name}</TableCell>
                  <TableCell>
                    <Button.Group primary floated="right">
                      <Button as={NavLink} to={`/movies/view/${movie.ID}`}>View</Button>
                      <Dropdown className='button icon'>
                        <Dropdown.Menu>
                          <Button className="square" fluid icon labelPosition='right' as={NavLink} to={`/movies/view/${movie.ID}/edit`}>
                            Edit
                        <Icon name='edit outline' />
                          </Button>
                          <Button className="square" icon labelPosition='right' onClick={() => remove(movie.ID as number)}>
                            Delete
                        <Icon name='trash alternate outline' />
                          </Button>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Button.Group>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  );
}
