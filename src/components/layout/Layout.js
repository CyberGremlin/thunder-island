import React from "react"
import "../../context/globalStyles.css"

import {
  pageTitle
} from "./Layout.module.css"


import Navbar from "../shared/Navbar"
import Header from "../shared/Header"
import Spacer from "../layout/Spacer"
import Footer from "../shared/Footer"

import ContextProvider from "../../context/ContextProvider"

const Layout = ( props ) => {
  return (
    <ContextProvider>
      <Navbar />
      <Header />
      <Spacer size="large" />
      <h2 className={ pageTitle }>{ props.title ? props.title : null }</h2>
        <Spacer size="small" />
        
        { props.children }
        
      <Spacer size="large" />
      <Footer />
      </ContextProvider>
  ) 
}

export default Layout