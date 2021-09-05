import * as React from "react"

import Navbar from "../../components/Navbar"
import Header from "../../components/Header" 
import SpacerSmall from "../../components/Spacer"
import Button from "../../components/Button"
import Footer from "../../components/Footer"

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <SpacerSmall />
      <Header/>
      <SpacerSmall />
        <main>
      <Button>Web Development</Button>
      <Button>Writing</Button>
        </main>
      <SpacerSmall />
      <Footer />
      </>
  )
}
       
export default Portfolio