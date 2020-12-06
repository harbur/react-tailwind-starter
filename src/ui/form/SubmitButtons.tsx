import React from 'react'

interface Props {
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
