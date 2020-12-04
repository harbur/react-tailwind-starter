import React from 'react'
import { Form } from 'semantic-ui-react'

interface Props {
  value: string,
  onChange(value:string): void;
}

export default function NameField(props: Props) {
  return (
    <Form.Input
      required
      autoFocus
      name="name"
      label="Name"
      value={props.value}
      placeholder="Name"
      onChange={e => props.onChange(e.target.value)}
    />
  )
}
