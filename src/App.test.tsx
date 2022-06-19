import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Technical Glossary/);
  expect(headerElement).toBeInTheDocument();
});

test("displays expected number of terms", () => {
  render(<App />);
  const termRows = screen.queryAllByRole("row");
  expect(termRows.length).toBe(3);
});
