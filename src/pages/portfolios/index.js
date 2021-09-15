import * as React from "react"

import Navbar from "../../components/Navbar"
import Header from "../../components/Header" 
import Spacer from "../../components/Spacer"
import NavbarAnchors from "../../components/NavbarAnchors"
import Grid from "../../components/Grid"
import Footer from "../../components/Footer"

import { inMalta } from "../../data/boxInfo"

const Portfolios = () => {

  const pageAnchors = [ "Writing", "Web Development", "Expats in Malta" ]

  return (
    <>
      <Navbar />
      <Header />
      <Spacer size="large" />
      <NavbarAnchors anchors={ pageAnchors } />
      <Spacer size="large" />
      <main>
         <Grid boxInfo={ inMalta }/>
      </main>
      <Spacer size="large" />
      <Footer />
      </>
  )
}
       
export default Portfolios