import React from 'react'

interface Props { children: any }
function TableBody({ children }: Props) {
  return (
    <tbody>
      {children}
    </tbody>
  )
}

export default TableBody