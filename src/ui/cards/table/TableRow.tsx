import React from 'react'

interface Props { children: any }
function TableRow(props: Props) {
  return (
    <tr  {...props}>
      {props.children}
    </tr>
  )
}

export default TableRow