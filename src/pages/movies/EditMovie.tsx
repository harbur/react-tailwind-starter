import moviesActions from 'actions/moviesActions';
import Params from 'models/params';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
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
    <>
      <Title text="Edit Movie">
        <NavButton to="/movies/" title="Back" />
      </Title>
      <Card>
        <Form>
          <NameField value={name} onChange={updateName} />
          <SubmitButtons cancelURL='/movies/' disabled={false} loading={loading} onClick={submit} />
        </Form>
      </Card>
    </>
  );
}
