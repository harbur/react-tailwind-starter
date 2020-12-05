import React from 'react'

interface Props { text: string, children?: any }
function Title({ text, children }: Props) {
  return (
    <div className="flex py-2">
      <h1 className="flex-1">{text}</h1>
      {children}
    </div>
  )
}

export default Title