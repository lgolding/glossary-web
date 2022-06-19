import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import "./App.css";
import TermTable from "./components/TermTable";

export default function App() {
  return (
    <Fragment>
      <Typography variant="h1">Technical Glossary</Typography>
      <TermTable />
    </Fragment>
  );
}
