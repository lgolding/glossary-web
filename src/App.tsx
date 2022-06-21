import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import "./App.css";
import TermTable from "./components/TermTable";
import ITermService from "./services/ITermService";
import TermService from "./services/TermService";

const termService: ITermService = new TermService();

export default function App() {
  return (
    <Fragment>
      <Typography variant="h1">Technical Glossary</Typography>
      <TermTable termService={termService} />
    </Fragment>
  );
}
