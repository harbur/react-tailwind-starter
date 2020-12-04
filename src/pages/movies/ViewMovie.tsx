import moviesActions from 'actions/moviesActions';
import React from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react';
import moviesStore from 'stores/moviesStore';

export default function ViewMovie() {
  let { id } = useParams<{ id: string }>()
  const history = useHistory()
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
        <Button as={NavLink} to={`/movies/${id}/edit`}>Edit</Button>
        <Button color="red" onClick={() => remove(Number(id))}>Delete
            <Icon
            // @ts-ignore
            name='right trash alternate outline' />
        </Button>
      </Container>
    </>
  )
}
