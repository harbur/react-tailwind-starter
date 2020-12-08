import moviesActions from 'actions/moviesActions';
import Params from 'models/params';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moviesStore from 'stores/moviesStore';
import NavButton from 'ui/buttons/NavButton';
import Card from 'ui/cards/Card';
import Title from 'ui/cards/Title';
import NameField from '../../ui/form/NameField';
import SubmitButtons from '../../ui/form/SubmitButtons';

export default function EditMovie() {
  let { id } = useParams<Params>()
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
        <NavButton to="/movies/" title="Back" />
      </Title>
      <Card>
        <form onSubmit={submit}>
          <NameField value={name} onChange={updateName} />
          <SubmitButtons disabled={false} loading={loading} />
        </form>
      </Card>
    </>
  );
}
