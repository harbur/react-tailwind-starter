import { useObserver } from 'mobx-react';
import React from 'react';
import { Form } from 'semantic-ui-react';
import { useStores } from '../../hooks/use-stores';
import SubmitButtons from './buttons/SubmitButtons';
import NameField from './fields/NameField';
import history from '../../history/history';

export default function ViewMovie({ match: { params: { id } } }) {
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
    <Form>
      <NameField value={name} onChange={updateName} />
      <SubmitButtons cancelURL='/movies' disabled={false} loading={loading} onClick={submit} />
    </Form>
  ));
}
