import React from "react";
import classes from "./testimonial.module.css";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    feedback: "This article has been life-changing! The advice and guidance have helped me manage my anxiety and find peace.",
    image: "/user1.jpg",
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback: "I found exactly what I needed to improve my relationships. The articles are insightful and well-written.",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "Sophia Williams",
    feedback: "A wonderful platform filled with valuable resources. I feel more confident and in control of my emotions.",
    image: "/user3.jpg",
  },
];

const Testimonial = () => {
  return (
   <React.Fragment>
     <section className={classes.testimonial}>
      <h2>What Our Readers Say</h2>
      <div className={classes.testimonialContainer}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={classes.card}>
            <p className={classes.feedback}>"{testimonial.feedback}"</p>
            <h3 className={classes.name}>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
   </React.Fragment>
  );
};

export default Testimonial;
