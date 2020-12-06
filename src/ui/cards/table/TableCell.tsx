import React from 'react'

interface Props { children: any }
function TableCell({ children }: Props) {
  return (
    <td className="text-center">
      {children}
    </td>
  )
}

export default TableCell