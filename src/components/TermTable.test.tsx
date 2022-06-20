import React from "react";
import { render, screen } from "@testing-library/react";
import TermTable from "./TermTable";

test("displays expected number of terms", () => {
  render(<TermTable />);
  const termRows = screen.queryAllByRole("row");
  expect(termRows.length).toBe(0);
});
