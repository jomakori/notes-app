import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock import.meta
jest.mock("import.meta", () => ({
  env: {
    DEV: true,
    PROD: false,
  },
}));

test("renders App component", () => {
  render(<App />);
  const element = screen.getByRole("main");
  expect(element).toBeInTheDocument();
});
