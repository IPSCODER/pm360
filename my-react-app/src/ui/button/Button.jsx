import React from "react";
import styles from "./button.module.css";
import clsx from "clsx"; // Helps combine class names conditionally


const Button = ({ children, onClick, variant = "primary", className }) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
