import * as React from "react"

import Navbar from "../../components/Navbar"
import Header from "../../components/Header" 
import SpacerSmall from "../../components/Spacer"
import Section from "../../components/Section"
import Grid from "../../components/Grid"
import Footer from "../../components/Footer"

import { diets } from "../../static/boxInfo"

const FoodAndHealth = () => {
  
  return (
    <>
      <Navbar />
      <SpacerSmall />
      <Header />
      <SpacerSmall />
      <main>
        <Section>
          <h2>By Diet</h2>
          <Grid boxInfo={ diets } />
        </Section>
        <SpacerSmall />
        <Section>
          <h2>By Main Ingredient</h2>
          <Grid boxInfo={ diets } />
        </Section>
        <SpacerSmall />
        <Section>
          <h2>By Course</h2>
          <Grid boxInfo={ diets } />
        </Section>
      </main>
      <SpacerSmall />
      <Footer />
      </>
  )
}

export default FoodAndHealth