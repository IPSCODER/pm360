import React from "react";
import classes from "./loader.module.css";

const LoaderSpinner = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
      <div className={classes.spinner}></div>
    </div>
    </React.Fragment>
  );
};

export default LoaderSpinner;
