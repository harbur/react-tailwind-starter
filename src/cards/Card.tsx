import React from 'react'

interface Props { children: any }
function Card({ children }: Props) {
  return (
    <div className="p-4 border-2 rounded-lg shadow-lg border-gray-300">
      {children}
    </div>
  )
}

export default Card