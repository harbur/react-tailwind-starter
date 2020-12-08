import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryCache } from 'react-query';
import ActionButton from 'ui/buttons/ActionButton';

// SuspenseContainer provides generic loading and error states.
interface Props { children: any }
function SuspenseContainer({ children }: Props) {
  const cache = useQueryCache();

  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }: any) => (
        <div>
          There was an error!{" "}
          <ActionButton onClick={() => resetErrorBoundary()} label="Try again" />
          <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
        </div>
      )}
      onReset={() => cache.resetErrorBoundaries()}
    >
      <Suspense fallback={<div data-testid="loading">Loading...</div>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default SuspenseContainer