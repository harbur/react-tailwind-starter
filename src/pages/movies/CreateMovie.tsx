import moviesActions from 'actions/moviesActions';
import React from 'react';
import { useHistory } from 'react-router-dom';
import NavButton from 'ui/buttons/NavButton';
import Card from 'ui/cards/Card';
import Title from 'ui/typography/Title';
import NameField from '../../ui/form/NameField';
import SubmitButtons from '../../ui/form/SubmitButtons';

export default function CreateMovie() {
  const [name, updateName] = React.useState("");
  const [loading, updateLoading] = React.useState(false)

  const history = useHistory()
  async function submit(event: any) {
    event?.preventDefault()
    updateLoading(true)
    try {
      const body = { name, id: 0 }
      await moviesActions.create(body)
      updateLoading(false)
      history.push('/movies/')
    } catch (error) {
      //   updateError({
      //     ok: false,
      //     reason: error.reason,
      //     message: error.message,
      //   })
    }
  }

  return (
    <>
      <Title text="Create Movie">
        <NavButton to="/movies/" label="Back" />
      </Title>
      <Card>
        <form onSubmit={submit}>
          <NameField value={name} onChange={updateName} />
          <SubmitButtons loading={loading} />
        </form>
      </Card>
    </>
  );
}
