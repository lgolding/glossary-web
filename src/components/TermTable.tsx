import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TermModel from "../models/TermModel";
import ITermService from "../services/ITermService";
import TermService from "../services/TermService";

const termService: ITermService = new TermService();

export default function TermTable() {
  const [terms, setTerms] = useState<TermModel[]>([]);

  useEffect(() => {
    (async function () {
      const responseData: TermModel[] = await termService.getAll();
      setTerms(responseData);
      console.log(terms);
    })();
  }, []);

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
