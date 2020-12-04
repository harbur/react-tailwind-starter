import moviesActions from 'actions/moviesActions';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import SubmitButtons from './buttons/SubmitButtons';
import NameField from './fields/NameField';

export default function CreateMovie() {
  const [name, updateName] = React.useState("");
  const [loading, updateLoading] = React.useState(false)

  const history = useHistory()
  async function submit() {
    updateLoading(true)
    try {
      const body = { name, ID: undefined }
      await moviesActions.create(body)
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

  return (
    <Form>
      <NameField value={name} onChange={updateName} />
      <SubmitButtons cancelURL='/movies' disabled={false} loading={loading} onClick={submit} />
    </Form>
  );
}
