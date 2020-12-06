import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import moviesStore from 'stores/moviesStore';
import NavButton from 'ui/buttons/NavButton';
import PrimaryNavButton from 'ui/buttons/PrimaryNavButton';
import Card from 'ui/cards/Card';
import Title from 'ui/cards/Title';

export default function ViewMovie() {
  let { id } = useParams<{ id: string }>()
  const { data } = moviesStore.useMovie(+id)

  return (
    <>
      <Title text="View Movie">
        <NavButton to="/movies/" title="Back" />
      </Title>
      <Card>
        <Header>Name: {data?.name}</Header>

        <PrimaryNavButton to={`/movies/view/${id}/edit`} title="Edit" />
      </Card>
    </>
  )
}
