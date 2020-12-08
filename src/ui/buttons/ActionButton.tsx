import React, { useState } from 'react';

interface Props { title: string, onClick(): void }
function ActionButton({ title, onClick }: Props) {
  const [loading, updateLoading] = useState(false)
  const click = async () => {
    updateLoading(true)
    await onClick()
    updateLoading(false)
  }
  return (
    <button onClick={click} className="tertiary-btn">
      {title} {loading && "LOADING"}
    </button>
  );
}

export default ActionButton 