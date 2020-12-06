import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  cancelURL: string;
  loading: boolean;
  disabled: boolean;
}

export default function SubmitButtons(props: Props) {
  return (
    <div className="flex gap-x-2">
      <button className="p-3 px-5 primary-btn" type="submit">Submit</button>
    </div >
  )
}
