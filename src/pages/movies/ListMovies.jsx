import React from 'react';
import { queryCache, useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Header, Icon, Table } from 'semantic-ui-react';
import { useStores } from '../../hooks/use-stores';

export default function ListMovies() {
  const { moviesStore } = useStores();
  const { data, status } = useQuery("movies", () =>
    moviesStore.list()
  );

  async function remove(id) {
    await moviesStore.delete(id)
    queryCache.refetchQueries("movies")
  }
  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error :(</p>;

  return (
    <>
      <Header as='h3'>List Movies</Header>

      <Table striped compact color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Movie ID</Table.HeaderCell>
            <Table.HeaderCell>Movie Name</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((movie) => (
            <Table.Row key={movie.ID}>
              <Table.Cell>{movie.ID}</Table.Cell>
              <Table.Cell>{movie.name}</Table.Cell>
              <Table.Cell>
                <Button.Group primary floated="right">
                  <Button as={NavLink} to={`/movies/${movie.ID}`}>View</Button>
                  <Dropdown
                    className='button icon'
                    // options={options}
                    trigger={<React.Fragment />}>
                    <Dropdown.Menu>
                      <Button className="square" fluid icon labelPosition='right' as={NavLink} to={`/edit/movie/${movie.ID}`}>
                        Edit
                        <Icon
                        // @ts-ignore
                        name='right edit outline' />
                      </Button>
                      <Button className="square" icon labelPosition='right' onClick={() => remove(movie.ID)}>
                        Delete
                        <Icon
                        // @ts-ignore
                        name='right trash alternate outline' />
                      </Button>
                    </Dropdown.Menu>
                  </Dropdown>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Button secondary as={NavLink} to='/create/movie' floated='right'>New Movie</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
}
