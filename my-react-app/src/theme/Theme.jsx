import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import classes from "./theme.module.css"
import ChatBot from '../components/chat-bot/ChatBot'

const Theme = () => {
  return (
    <React.Fragment>
    <Header/>
    <main className={classes.main} >
    <Outlet/>
    </main>
    <Footer/>
    <ChatBot/>
    </React.Fragment>
  )
}

export default Theme