import React from 'react'

interface Props { columns: string[] }
function TableHead({ columns }: Props) {
  return (
    <thead className="bg-gray-200 table-header-group col-span-full w-full">
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead