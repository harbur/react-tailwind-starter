import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import moviesStore from 'stores/moviesStore';
import NavButton from 'ui/buttons/NavButton';
import PrimaryNavButton from 'ui/buttons/PrimaryNavButton';
import Card from 'ui/cards/Card';
import Title from 'ui/typography/Title';

export default function ViewMovieWrapper() {
  let { id } = useParams<{ id: string }>()
  return ViewMovie({ id: +id })
}

export interface ViewMovieProps { id: number }
export function ViewMovie({ id }: ViewMovieProps) {
  const { data, refetch } = moviesStore.useMovie(id)
  const location = useLocation()
  useEffect(() => { refetch() }, [refetch, location])

  return (
    <>
      <Title text="View Movie">
        <NavButton to="/movies/" label="Back" />
      </Title>
      <Card>
        <h3>Name: {data?.movie.name}</h3>

        <PrimaryNavButton to={`/movies/edit/${id}`} label="Edit" />
      </Card>
    </>
  )
}
