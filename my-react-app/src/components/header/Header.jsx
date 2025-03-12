import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from "./header.module.css"
import logo from "../../assets/parentMe36O.png"
import Button from '../../ui/button/Button'

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

  return (
    <header className={classes.header} style={{top:visible ? "0" : '-60px'}} >
        <Link to={"/"} >
        <img src={logo} className={classes.logo} alt="" /></Link>

        <React.Fragment>
        <div className={isOpen ? "menutoggle active" : "menutoggle"} onClick={() => setIsOpen(!isOpen)} >
                    <span></span>
                    <span></span>
                    <span></span>
        </div>    
        <ul style={{right: isOpen ? 0 : "-100%"}} >
          <li>
            <Link to={"/"} >Home</Link></li>
            <li>
            <Link to={"/about-us"} >About Us</Link>
            
            </li>
            <li><Link to={"/"} >Parenting Stages</Link>
            </li>
            <li><Link to={"/special-children"} >Special Children</Link>
            </li>
            <li><Link to={"/services"} >Services</Link>
            </li>
            <li><Link to={"/contact-us"} >Contact us</Link></li>
        </ul>
        {/* <Navbar/> */}
        <ul>
          <li><Button variant='primary' >Login</Button></li>
          <li><Button variant='secondary' >Apponitments</Button></li>
        </ul>
        </React.Fragment>
    </header>
  )
}

export default Header