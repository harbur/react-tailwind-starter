import moviesActions from 'actions/moviesActions';
import Params from 'models/params';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Form } from 'semantic-ui-react';
import moviesStore from 'stores/moviesStore';
import SubmitButtons from '../../ui/form/SubmitButtons';
import NameField from '../../ui/form/NameField';

export default function EditMovie() {
  let { id } = useParams<Params>()
  const [name, updateName] = React.useState("");
  const [loading, updateLoading] = React.useState(false)
  const history = useHistory()
  
  const { data } = moviesStore.useMovie(+id)
  React.useEffect(() => {
    if (data !== undefined) {
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

  return (
    <Container textAlign="left">
      <Form>
        <NameField value={name} onChange={updateName} />
        <SubmitButtons cancelURL='/movies' disabled={false} loading={loading} onClick={submit} />
      </Form>
    </Container>
  );
}
