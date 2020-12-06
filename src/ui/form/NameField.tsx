import React from 'react'

interface Props {
  value: string,
  onChange(value:string): void;
}

export default function NameField(props: Props) {
  return (
    <input
      required
      autoFocus
      name="name"
      value={props.value}
      placeholder="Name"
      onChange={e => props.onChange(e.target.value)}
    />
  )
}
