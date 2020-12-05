import React from 'react'

interface Props { children: any }
function TableCell({ children }: Props) {
  return (
    <td className="text-right">
      {children}
    </td>
  )
}

export default TableCell