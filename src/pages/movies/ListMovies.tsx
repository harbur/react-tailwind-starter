import moviesActions from 'actions/moviesActions';
import Movie from 'models/movies';
import React from 'react';
import { queryCache } from 'react-query';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Icon, Table } from 'semantic-ui-react';
import moviesStore from 'stores/moviesStore';

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
      <div className="text-xl text-gray-800 font-bold tracking-wider">List Movies</div>

      <div className="py-4">
        <table className="table w-full">
          <thead className="bg-gray-200 table-header-group col-span-full w-full">
            <tr>
              <th>Movie ID</th>
              <th>Movie Name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data && data.map((movie: Movie) => (
              <tr key={movie.ID}>
                <td className="text-center">{movie.ID}</td>
                <td className="text-right">{movie.name}</td>
                <td>
                  <Button.Group primary floated="right">
                    <Button as={NavLink} to={`/movies/${movie.ID}`}>View</Button>
                    <Dropdown className='button icon'>
                      <Dropdown.Menu>
                        <Button className="square" fluid icon labelPosition='right' as={NavLink} to={`/movies/${movie.ID}/edit`}>
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
                </td>
              </tr>
            ))}
          </tbody>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <NavLink to="/movies/asdad"><button className="nav-btn">New Movie</button> </NavLink>
                <Button secondary as={NavLink} to='/movies/new' floated='right'>New Movie</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </table>
      </div>
    </>
  );
}
