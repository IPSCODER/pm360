import React from 'react';
import classes from "./service-card.module.css";
import Button from '../../ui/button/Button';
import { FaCheck } from 'react-icons/fa';


const ServiceCard = ({ title, features, plans, onSubscribe }) => {
  return (
    <div className={classes.card}>
      <h1>{title}</h1>
      {features.map((feature, index) => (
        <p key={index}>
          <FaCheck fontSize={16} color="#6ab04c" /> {feature}
        </p>
      ))}
     <div className={classes.prices} >
     {plans.map((plan, index) => (
        <span key={index} className={classes.plan}>
          <input type='radio' name="plan" value={plan.name} /> {plan.name} <del>RS.{plan.originalPrice}</del> <b>RS.{plan.discountedPrice}</b>
        </span>
      ))}
     </div>
      <Button className={classes.btn} onClick={onSubscribe}>SUBSCRIBE</Button>
    </div>
  );
};

export default ServiceCard;