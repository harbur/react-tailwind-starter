import { useObserver } from 'mobx-react';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Button, Form, Icon, Header, Segment, Container, HeaderSubheader } from 'semantic-ui-react';
import history from '../../history/history';
import { useStores } from '../../hooks/use-stores';
import NameField from './fields/NameField';

export default function ViewMovie() {
  let { id } = useParams()
  const { moviesStore } = useStores();
  const [name, updateName] = React.useState("");
  const [loading, updateLoading] = React.useState(false)

  React.useEffect(() => {
    async function fetchMovie() {
      const response = await moviesStore.get(id)
      updateName(response.name)
    }
    fetchMovie()
  }, [])

  async function remove(id) {
    await moviesStore.delete(id)
    history.push("/movies")
  }

  async function submit() {
    updateLoading(true)
    try {
      const body = { name }
      await moviesStore.create(body)
      history.push('/movies')
    } catch (error) {
      //   updateError({
      //     ok: false,
      //     reason: error.reason,
      //     message: error.message,
      //   })
    } finally {
      updateLoading(false)
    }
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
