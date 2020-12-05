import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  cancelURL: string;
  loading: boolean;
  disabled: boolean;
  onClick(): Promise<void>;
}

export default function SubmitButtons(props: Props) {
  return (
    <div className="flex gap-x-2">
      <NavLink to={props.cancelURL} className="p-3 px-5 secondary-btn">Cancel</NavLink>
      <button className="p-3 px-5 primary-btn" onClick={props.onClick}>Submit</button>
    </div >
  )
}
