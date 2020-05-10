import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react';
import history from '../../history/history';
import { useStores } from '../../hooks/use-stores';

export default function ViewMovie() {
  let { id } = useParams()
  const { moviesStore } = useStores();
  const [name, updateName] = React.useState("");

  React.useEffect(() => {
    async function fetchMovie() {
      const response = await moviesStore.get(id)
      updateName(response.name)
    }
    fetchMovie()
  }, [id, moviesStore])

  async function remove(id) {
    await moviesStore.delete(id)
    history.push("/movies")
  }

  return useObserver(() => (
    <>
      <Header as='h3'>View Movie</Header>
      <Container textAlign="left">
        <Header>Name: {name}</Header>

        <Button as={NavLink} to={`/movies`}>Back</Button>
        <Button as={NavLink} to={`/edit/movie/${id}`}>Edit</Button>
        <Button color="red" onClick={() => remove(id)}>Delete
            <Icon
            // @ts-ignore
            name='right trash alternate outline' />
        </Button>
      </Container>
    </>
  ));
}
