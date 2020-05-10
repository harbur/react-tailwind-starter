import { useObserver } from 'mobx-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Header, Icon, Table } from 'semantic-ui-react';
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
          {movies.map((movie) => (
            <Table.Row key={movie.ID}>
              <Table.Cell>{movie.ID}</Table.Cell>
              <Table.Cell>{movie.name}</Table.Cell>
              <Table.Cell>
                <Button.Group primary floated="right">
                  <Button as={NavLink} to={`/movies/${movie.ID}`}>Edit</Button>
                  <Dropdown
                    className='button icon'
                    // options={options}
                    trigger={<React.Fragment />}>
                    <Dropdown.Menu>
                      <Button color="red">Delete
                          <Icon
                          // @ts-ignore
                          name='right trash alternate outline' /></Button>
                    </Dropdown.Menu>
                  </Dropdown>
                </Button.Group>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>
              <Button secondary as={NavLink} to='/movies/create' floated='right'>New Movie</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  ));
}
