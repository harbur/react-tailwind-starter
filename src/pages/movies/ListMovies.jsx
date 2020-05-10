import { useObserver } from 'mobx-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Header, Icon, Table } from 'semantic-ui-react';
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

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Movie Name</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {movies.map((movie) => (
            <Table.Row key={movie.name}>
              <Table.Cell>{movie.name}</Table.Cell>
              <Table.Cell>
                <Button primary floated='right'>Edit Movie
                  <Icon
                    // @ts-ignore
                    name='right chevron' />
                </Button>
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
