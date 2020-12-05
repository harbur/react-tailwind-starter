import moviesActions from 'actions/moviesActions';
import React from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Icon } from 'semantic-ui-react';
import moviesStore from 'stores/moviesStore';
import Card from 'ui/cards/Card';
import Title from 'ui/cards/Title';

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
      <Title text="View Movie" />
      <Card>
        <Header>Name: {data?.name}</Header>

        <Button as={NavLink} to={`/movies`}>Back</Button>
        <Button as={NavLink} to={`/movies/${id}/edit`}>Edit</Button>
        <Button color="red" onClick={() => remove(Number(id))}>Delete
            <Icon
            // @ts-ignore
            name='right trash alternate outline' />
        </Button>
      </Card>
    </>
  )
}
