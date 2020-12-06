import moviesActions from 'actions/moviesActions';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import NavButton from 'ui/buttons/NavButton';
import Card from 'ui/cards/Card';
import Title from 'ui/cards/Title';
import NameField from '../../ui/form/NameField';
import SubmitButtons from '../../ui/form/SubmitButtons';

export default function CreateMovie() {
  const [name, updateName] = React.useState("");
  const [loading, updateLoading] = React.useState(false)

  const history = useHistory()
  async function submit() {
    updateLoading(true)
    try {
      const body = { name, ID: 0 }
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
    <>
      <Title text="Create Movie">
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
