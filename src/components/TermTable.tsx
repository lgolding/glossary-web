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

interface TermTableProps {
  termService: ITermService;
}

export default function TermTable({ termService }: TermTableProps) {
  const [terms, setTerms] = useState<TermModel[]>([]);

  useEffect(() => {
    (async function () {
      const responseData: TermModel[] = await termService.getAll();
      setTerms(responseData);
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
