import React from 'react'

interface Props { children: any }
function Table({ children }: Props) {
  return (
    <div className="table w-full">
      {children}
    </div>
  )
}

export default Table