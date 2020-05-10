import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

interface Props {
  cancelURL: string;
  loading: boolean;
  disabled: boolean;
  onClick(): Promise<void>;
}

export default function SubmitButtons(props: Props) {
  return (
    <div className="actions">
      <Button content="Cancel" as={Link} to={props.cancelURL} />
      <Button content="Submit" disabled={props.disabled} positive loading={props.loading} onClick={props.onClick} />
    </div>
  )
}
