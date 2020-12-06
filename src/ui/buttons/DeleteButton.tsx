import React from 'react';

interface Props { title: string, onClick(): void }
function DeleteButton({ title, onClick }: Props) {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}

export default DeleteButton 