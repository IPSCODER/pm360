import React from "react";
import Button from "../../../ui/button/Button";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <React.Fragment>
      <section className={classes.hero}>
      <div className={classes.overlay}>
        <div className={classes.content}>
          <h1>Find Support & Guidance for a Better Life</h1>
          <p>Your journey to mental wellness starts here. Explore insightful articles and expert counseling.</p>
          <div className={classes.buttons}>
            <Button variant="primary" className={classes.btns} >Explore articles</Button>
            <Button variant="secondary" className={classes.btns} >Get Counseling</Button>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Hero;
