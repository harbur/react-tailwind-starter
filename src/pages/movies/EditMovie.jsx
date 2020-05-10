import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { Form, Container } from 'semantic-ui-react';
import { useStores } from '../../hooks/use-stores';
import SubmitButtons from './buttons/SubmitButtons';
import NameField from './fields/NameField';
import history from '../../history/history';
import { useParams } from 'react-router-dom';

export default function EditMovie() {
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
  }, [id, moviesStore])

  async function submit() {
    updateLoading(true)
    try {
      const body = { ID: Number(id), name }
      await moviesStore.update(id, body)
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
