import moviesActions from 'actions/movies-actions';
import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { Form } from 'semantic-ui-react';
import history from '../../history/history';
import SubmitButtons from './buttons/SubmitButtons';
import NameField from './fields/NameField';

export default function CreateMovie() {
    const [name, updateName] = React.useState("");
    const [loading, updateLoading] = React.useState(false)

    async function submit() {
        updateLoading(true)
        try {
          const body = {name, ID: undefined }
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
    
    return useObserver(() => (
        <Form>
            <NameField value={name} onChange={updateName}/>
            <SubmitButtons cancelURL='/movies' disabled={false} loading={loading} onClick={submit}/>
        </Form>
    ));
}
