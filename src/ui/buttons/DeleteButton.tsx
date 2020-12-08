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
  /**
   * optional data-testid
   */
  testid?: string
}
function DeleteButton({ label, onClick, testid }: DeleteButtonProps) {
  return (
    <button onClick={onClick} data-testid={testid}>
      {label}
    </button>
  );
}

export default DeleteButton 