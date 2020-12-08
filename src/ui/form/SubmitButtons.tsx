import React from 'react'
import SubmitButton from 'ui/buttons/SubmitButton'

interface Props {
  loading: boolean;
}

export default function SubmitButtons({ loading }: Props) {
  return (
    <div className="flex gap-x-2">
      <SubmitButton type="primary" loading={loading} text="Submit"/>
    </div >
  )
}
