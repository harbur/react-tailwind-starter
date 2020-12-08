import React from 'react';

export interface DeleteButtonProps {
  /**
   * Button content
   */
  label: string,
  /**
   * click handler
   */
  onClick(): void
}
function DeleteButton({ label, onClick }: DeleteButtonProps) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default DeleteButton 