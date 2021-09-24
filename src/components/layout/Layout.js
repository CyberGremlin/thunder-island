import * as React from "react"

import "../../styles/globalStyles.css"

import {
  pageTitle
} from "./Layout.module.css"

import Navbar from "../shared/Navbar"
import Header from "../shared/Header"
import Spacer from "../layout/Spacer"
import Footer from "../shared/Footer"


class Layout extends React.Component {
  constructor ( props ) {
    super( props )
    this.state = {
      mainCategory: "",
      subCategory: [],
      tags: [],
      posts: []
    }
  }

  
  render () {

    return (
    <>
      <Navbar />
      <Header />
      <Spacer size="large" />
      <h2 className={ pageTitle }>{ this.props.title ? this.props.title : null }</h2>
      <Spacer size="small" />
      { this.props.children }
      <Spacer size="large" />
      <Footer />
    </>
  ) 
  }
}

export default Layout