import React from "react";
import classes from "./not-found.module.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  
  return (
    <React.Fragment>
      <div className={classes.container}>
      <h1 className={classes.title}>404</h1>
      <p className={classes.message}>Page Not Found</p>
      <button className={classes.button} onClick={() => navigate("/")}>Go Home</button>
    </div>
    </React.Fragment>
  );
};

export default PageNotFound;