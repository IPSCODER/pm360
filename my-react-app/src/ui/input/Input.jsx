import React from "react";
import {  Controller } from "react-hook-form";
import classes from "./input.module.css"
import clsx from "clsx"; // Helps combine class names conditionally


const Input = ({
  label,
  type = "text",
  name,
  control,
  placeholder,
  containerClass,
  inputClass,
  labelClass,
  errorClass
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={clsx(classes.container, containerClass)}>
          {label && <label htmlFor={name} className={clsx(classes.label, labelClass)}>{label}</label>}
          <input
            type={type}
            id={name}
            {...field}
            placeholder={placeholder}
            className={clsx(classes.input, inputClass)}
          />
          {error && <p className={clsx(classes.error,errorClass)}>{error.message}</p>}
        </div>
      )}
    />
  );
};


  const TextArea = ({
    label,
    name,
    control,
    placeholder,
    containerClass,
    labelClass,
    textClass,
    errorClass
  }) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className={clsx(classes.container, containerClass)}>
            {label && <label htmlFor={name} className={clsx(classes.label, labelClass)}>{label}</label>}
            <textarea
              id={name}
              {...field}
              placeholder={placeholder}
              className={clsx(classes.text, textClass)}
            />
            {error && <p className={clsx(classes.error,errorClass)}>{error.message}</p>}
          </div>
        )}
      />
    );
  };
  
  export { Input, TextArea };
  
