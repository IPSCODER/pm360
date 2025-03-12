import React from 'react'
import classes from "./contact-us.module.css"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from '../../ui/button/Button';
import { Input, TextArea } from '../../ui/input/Input';

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Must be at least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message:yup.string().required("Message Requred")
});

const ContactUsPage = () => {

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <React.Fragment>
      <section className={classes.contact}>
     <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <h1 className={classes.title} >Get In <span>Touch</span></h1>
      <p>We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.</p>
      <Input label="Name" name="name" control={control} placeholder="Enter Name" />
      <Input label="Email" name="email" type="email" control={control} placeholder="Enter Email" />
      <TextArea label="Message" name="message"  control={control} placeholder="Enter Message" />
      <Button>
      Submit
      </Button>
    </form>
    </section>
    </React.Fragment>
  )
}

export default ContactUsPage