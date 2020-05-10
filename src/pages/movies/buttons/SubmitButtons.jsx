import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function SubmitButtons({ cancelURL, loading, disabled, onClick }) {
  return (
    <div className="actions">
      <Button content="Cancel" as={Link} to={cancelURL} />
      <Button content="Create" disabled={disabled} positive loading={loading} onClick={onClick} />
    </div>
  )
}
