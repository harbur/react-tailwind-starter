import React, { useState } from 'react';

export interface ActionButtonProps {
  /**
   * Button content
   */
  label: string,
  /**
   * click handler
   */
  onClick(): void
}
function ActionButton({ label, onClick }: ActionButtonProps) {
  const [loading, updateLoading] = useState(false)
  const click = async () => {
    updateLoading(true)
    await onClick()
    updateLoading(false)
  }
  return (
    <button onClick={click} className="tertiary-btn">
      {label} {loading && "LOADING"}
    </button>
  );
}

export default ActionButton 