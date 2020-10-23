import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { Form, Container } from 'semantic-ui-react';
import { useStores } from '../../hooks/use-stores';
import SubmitButtons from './buttons/SubmitButtons';
import NameField from './fields/NameField';
import history from '../../history/history';
import { useParams } from 'react-router-dom';
import Params from 'models/params'
import moviesActions from 'actions/movies-actions';

export default function EditMovie() {
  let { id } = useParams<Params>()
  const { moviesStore } = useStores();
  const [name, updateName] = React.useState("");
  const [loading, updateLoading] = React.useState(false)

  const { data } = moviesStore.useMovie(+id)
  React.useEffect(() => {
    if (data != undefined) {
      updateName(data.name)
    }
  }, [data])

  async function submit() {
    updateLoading(true)
    try {
      const body = { ID: +id, name }
      await moviesActions.update(+id, body)
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
    <Container textAlign="left">
      <Form>
        <NameField value={name} onChange={updateName} />
        <SubmitButtons cancelURL='/movies' disabled={false} loading={loading} onClick={submit} />
      </Form>
    </Container>
  ));
}
