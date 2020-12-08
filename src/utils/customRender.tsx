import { render } from "@testing-library/react";
import SuspenseContainer from "containers/SuspenseContainer";
import React from "react";
import { MemoryRouter } from "react-router-dom";

const Wrapper = ({ children }: { children: any }) => {
  return (
    <>
      <MemoryRouter>
        <SuspenseContainer>
          {children}
        </SuspenseContainer>
      </MemoryRouter>
    </>
  );
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };


