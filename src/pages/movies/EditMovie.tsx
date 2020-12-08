import moviesActions from 'actions/moviesActions';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moviesStore from 'stores/moviesStore';
import NavButton from 'ui/buttons/NavButton';
import Card from 'ui/cards/Card';
import Title from 'ui/typography/Title';
import NameField from '../../ui/form/NameField';
import SubmitButtons from '../../ui/form/SubmitButtons';

export default function EditMovieWrapper() {
  let { id } = useParams<{ id: string }>()
  return EditMovie({ id: +id })
}

export interface EditMovieProps { id: number }
export function EditMovie({ id }: EditMovieProps) {
  const [name, updateName] = React.useState("");
  const [loading, updateLoading] = React.useState(false)
  const history = useHistory()

  const { data } = moviesStore.useMovie(+id)
  React.useEffect(() => {
    if (data !== undefined) {
      updateName(data.movie.name)
    }
  }, [data])

  async function submit(event: any) {
    event?.preventDefault()

    updateLoading(true)
    try {
      const body = { id: +id, name }
      await moviesActions.update(+id, body)
      updateLoading(false)
      history.push('/movies/')
    } catch (error) {
      console.log('err', error)
      //   updateError({
      //     ok: false,
      //     reason: error.reason,
      //     message: error.message,
      //   })
    }
  }

  return (
    <>
      <Title text="Edit Movie">
        <NavButton to="/movies/" label="Back" />
      </Title>
      <Card>
        <form onSubmit={submit} data-testid="edit-movie-form">
          <NameField value={name} onChange={updateName} />
          <SubmitButtons loading={loading} />
        </form>
      </Card>
    </>
  );
}
