import * as React from "react"
import { staticQuery, graphql } from "gatsby"

import Navbar from "../../components/Navbar"
import Header from "../../components/Header" 
import Spacer from "../../components/Spacer"
import ButtonBar from "../../components/ButtonBar"
import Section from "../../components/Section"
import Grid from "../../components/Grid"
import Excerpts from "../../components/Excerpts"
import Footer from "../../components/Footer"

class LearnEnglishWithMe extends React.Component {
  constructor ( props ) {
    super( props )
    this.state = {
      startPoint: "",
      CEFRLevel: "",
      ingredientChoice: "",
      courseChoice: ""
    }
  }
  
  render () {

    const startPoints = [ "CEFR Level", "Grammar Point" ]
    const CEFRLevels = [ "A1", "A2", "B1", "B2", "C1", "C2" 

    return (
      <>
        <Navbar />
        <Header />
        <Spacer size="large" />
        <ButtonBar buttons={ startPoints } />
        <Spacer size="large" />
        <main>
          <Section>
            <h2>By CEFR Level</h2>
            <Grid boxInfo={ CEFRLevels } />
          </Section>
          <Spacer size="large" />
          <Section direction="row">
            {/* <Excerpts posts={ get6Posts.allWpPost.nodes } innerText="See Post" /> */}
          </Section>
        </main>
        <Spacer size="large" />
        <Footer />
      </>
    )
  }
}
  
export default LearnEnglishWithMe