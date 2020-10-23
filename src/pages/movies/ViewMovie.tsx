import moviesActions from 'actions/movies-actions';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react';
import history from '../../history/history';
import { useStores } from '../../hooks/use-stores';

export default function ViewMovie() {
  let { id } = useParams<{ id: string }>()
  const { moviesStore } = useStores();
  const { data } = moviesStore.useMovie(+id)

  async function remove(id: number) {
    await moviesActions.remove(id)
    history.push("/movies")
  }

  return (
    <>
      <Header as='h3'>View Movie</Header>
      <Container textAlign="left">
        <Header>Name: {data?.name}</Header>

        <Button as={NavLink} to={`/movies`}>Back</Button>
        <Button as={NavLink} to={`/edit/movie/${id}`}>Edit</Button>
        <Button color="red" onClick={() => remove(Number(id))}>Delete
            <Icon
            // @ts-ignore
            name='right trash alternate outline' />
        </Button>
      </Container>
    </>
  )
}
