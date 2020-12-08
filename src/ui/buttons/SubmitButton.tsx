import React, { useMemo } from 'react'
import ButtonSpinner from 'ui/spinner/ButtonSpinner'

interface Props { loading: boolean, disabled?: boolean, text: string, autofocus?: boolean, type?: "primary" | "secondary" | "tertiary" | "danger", onClick?(): void }
export default function SubmitButton({ loading, disabled = false, text, autofocus = false, type = "primary", onClick }: Props) {
  const typeClass = useMemo(() => {
    switch (type) {
      case "danger": return "danger-btn"
      case "secondary": return "secondary-btn"
      case "tertiary": return "tertiary-btn"
      default: return "primary-btn"
    }
  }, [type])

  return <button
    className={`relative items-center ${typeClass}`}
    autoFocus={autofocus}
    disabled={disabled}
    type="submit"
    name="action"
    onClick={onClick}
    value="submit">
    <ButtonSpinner loading={loading} />
    <span className={`${loading && 'opacity-0'}`}>
      {text}
    </span>
  </button>
}