import * as React from "react"

import Navbar from "../../components/Navbar"
import Header from "../../components/Header" 
import SpacerSmall from "../../components/Spacer"
import Grid from "../../components/Grid"
import Footer from "../../components/Footer"
import Section from "../../components/Section"

import { inMalta } from "../../static/boxInfo"


const ExpatsInMalta = () => {
  return (
    <>
      <Navbar />
      <SpacerSmall />
      <Header />
      <SpacerSmall />
      <Grid boxInfo={ inMalta }/>
        <main>
        <Section>
          <h3>Pic Collage 1</h3>
       </Section>
        <Section>
          <h3>Pic Collage 2</h3>
       </Section>
        <Section>
          <h3>Pic Collage 3</h3>
       </Section>
        <Section>
          <h3>Pic Collage 4</h3>
       </Section>
        </main>
      <SpacerSmall />
      <Footer />
      </>
  )
}
       
export default ExpatsInMalta