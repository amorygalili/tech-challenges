import { render, RenderOptions, RenderResult } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const AllProviders: React.FC = ({ children }) => {
  return <Router>{children}</Router>;
};
const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: AllProviders, ...options });
//re-export testing library
export * from "@testing-library/react";

//Override the render method
export { customRender as render };
