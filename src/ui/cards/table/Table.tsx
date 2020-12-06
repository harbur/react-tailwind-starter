import React from 'react'

interface Props { children: any }
function Table({ children }: Props) {
  return (
    <table className="table w-full">
      {children}
    </table>
  )
}

export default Table