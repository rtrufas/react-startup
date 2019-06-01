import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Spinner.scss";

const Spinner = () => (
  <div className="spinner">
    <CircularProgress />
  </div>
);

export default Spinner;
