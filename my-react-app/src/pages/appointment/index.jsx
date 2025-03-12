import React from 'react'
import classes from "./appointment.module.css"
import Button from '../../ui/button/Button'

const AppointMentPage = () => {
  return (
    <React.Fragment>
      <section className={classes.appointment} >  
    <h1 className={classes.title} >Book An Appointment</h1>
    <div className={classes.image} >
        <img  src={"/img/provider_jain.png"} alt="" />
      </div>
    
      <div className={classes.details} >
        <h1>Ms. Reeti Jain</h1>
        <h4>Child Development & Parenting Professional</h4>
        <h6>Email: ***Provider's Email***</h6>
        <p>Ms. Reeti Jain, a seasoned Child Development Professional with two decades of experience as a counselor in formal schools across Delhi, she adopts a holistic approach focused on wellness rather than illness. Throughout her career, she has provided expert guidance to children of all age groups and their families, fostering their overall growth by emphasizing the strengths of each child.</p>
        <p>Holding a degree in Special Education, she is adept at supporting families facing mental health and well-being challenges, offering specialized strategies to promote positive development and resilience.</p>
        <Button className={classes.btn} >Book Appointment</Button>
      </div>
    </section>
    </React.Fragment>
  )
}

export default AppointMentPage