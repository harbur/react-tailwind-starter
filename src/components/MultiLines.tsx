import React from 'react';
export function MultiLines() {
  var rows = [];
  for (var i = 1; i <= 100; i++) {
    rows.push(i);
  }
  return (
    <>
      {rows.map((i) => (
        <div className="placeholder">{i}</div>
      ))
      }
    </>
  )
}
