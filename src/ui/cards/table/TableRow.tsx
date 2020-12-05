import React from 'react'

interface Props { children: any }
function TableRow({ children }: Props) {
  return (
    <tr>
      {children}
    </tr>
  )
}

export default TableRow