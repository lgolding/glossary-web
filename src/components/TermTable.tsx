import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

interface TermModel {
  term: string;
  definition: string;
}

function createTerm(term: string, definition: string) {
  return { term, definition };
}

const terms: TermModel[] = [
  createTerm(
    "Agile",
    "A set of software development principles and practices designed to allow teams to respond quickly to changes in requirements and the business environment."
  ),
  createTerm(
    "caching",
    "The technique of saving the results of database queries that are likely to be repeated in or near the ultimate consumer of the results. This improves performance because when the query is repeated, there is no need to access the database again."
  ),
  createTerm(
    "defense in depth",
    "The practice of providing multiple layers of system security so that even if an attacker penetrates one layer, they might be stopped by the next layer down."
  ),
];

export default function TermTable() {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h2">Terms</Typography>
      <Table>
        <TableBody>
          {terms.map((term: TermModel) => (
            <TableRow key={term.term}>
              <TableCell>{term.term}</TableCell>
              <TableCell>{term.definition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
