import React from 'react';

interface Props { title: string, onClick(): void }
function ActionButton({ title, onClick }: Props) {
  return (
    <button onClick={onClick} className="tertiary-btn">
      {title}
    </button>
  );
}

export default ActionButton 