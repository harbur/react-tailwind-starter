import React from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default function NameField({ value, onChange }) {
  return (
    <Form.Input
      required
      autoFocus
      name="name"
      label="Name"
      value={value}
      placeholder="Name"
      onChange={e => onChange(e.target.value)}
    />
  )
}
NameField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  }
  