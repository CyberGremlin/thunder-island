import * as React from "react"
import "../styles/globalStyles.css"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import SpacerSmall from "../components/Spacer"
import Section from "../components/Section"
import Grid from "../components/Grid"
import Excerpts from "../components/Excerpts"
import Footer from "../components/Footer"

import { skills } from "../static/boxInfo"

//hook for gatsby cloud https://webhook.gatsbyjs.com/hooks/data_source/29fa14d0-6c60-4c62-a893-d5d853f4b9cc?

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <SpacerSmall />
      <Header />
      <SpacerSmall />
      <main>
        <Section>
          <Grid boxInfo={ skills }/>
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
       
export default IndexPage
