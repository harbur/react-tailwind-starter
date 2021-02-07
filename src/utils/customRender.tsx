import { render } from "@testing-library/react";
import history from "actions/history";
import SuspenseContainer from "containers/SuspenseContainer";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { Router } from "react-router-dom";
import TopMenuLayout from "ui/layouts/TopMenuLayout";

export const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      suspense: true,
    },
  },
})

const Wrapper = ({ children }: { children: any }) => {
  return (
    <>
      <Router history={history}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <TopMenuLayout>
            <SuspenseContainer>
              {children}
            </SuspenseContainer>
          </TopMenuLayout>
        </ReactQueryCacheProvider>
      </Router>
    </>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };


