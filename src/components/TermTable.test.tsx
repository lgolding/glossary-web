import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import TermTable from "./TermTable";
import ITermService from "../services/ITermService";
import TermModel from "../models/TermModel";

const fakeTerms: TermModel[] = [
  {
    term: "Term1",
    definition: "Def1",
  },
  {
    term: "Term2",
    definition: "Def2",
  },
  {
    term: "Term3",
    definition: "Def3",
  },
];

const fakeTermService: ITermService = {
  getAll: async function (): Promise<TermModel[]> {
    return Promise<TermModel[]>.resolve(fakeTerms);
  },
};

test("displays expected number of terms", async () => {
  render(<TermTable termService={fakeTermService} />);
  await waitFor(() => {
    const termRows = screen.queryAllByRole("row");
    expect(termRows.length).toBe(fakeTerms.length);
  });
})
