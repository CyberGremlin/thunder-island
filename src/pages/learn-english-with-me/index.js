import * as React from "react"

import Navbar from "../../components/Navbar"
import Header from "../../components/Header" 
import SpacerSmall from "../../components/Spacer"
import Section from "../../components/Section"
import Grid from "../../components/Grid"
import Excerpts from "../../components/Excerpts"
import Footer from "../../components/Footer"

import { CEFRLevels } from "../../static/boxInfo"

const LearnEnglishWithMe = () => {
  return (
    <>
      <Navbar />
      <SpacerSmall />
      <Header />
      <SpacerSmall />
      <main>
        <Section>
          <Grid boxInfo={ CEFRLevels }/>
        </Section>
        <SpacerSmall />
        <Section direction="row">
          <Excerpts />
        </Section>
        <SpacerSmall />
      </main>
      <SpacerSmall />
      <Footer />
      </>
  )
}
       
export default LearnEnglishWithMe