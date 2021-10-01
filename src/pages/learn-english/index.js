import * as React from "react"

import Layout from "../../components/layout/Layout"
import SingleColumn from "../../components/layout/SingleColumn"

import Spacer from "../../components/layout/Spacer"
import ButtonBar from "../../components/clickable/button-bar/ButtonBar"
import Section from "../../components/layout/Section"
import ButtonGrid from "../../components/clickable/button-grid/ButtonGrid"
import ExcerptList from "../../components/posts/ExcerptList"


const LearnEnglishPage = ( { data }) => {

    const title = "Learn English"
    const startPoints = [ "CEFR Level", "Lingua Node" ]
    const CEFRLevels = [ "A1", "A2", "B1", "B2", "C1", "C2" ]

    const CEFRSection =
      <Section >
        <Spacer size="small"/>
        <h3>By CEFR Level</h3>
        <Spacer size="small"/>
        <ButtonGrid boxInfo={ CEFRLevels } />
      </Section >
    
    const linguaNodeSection =
      <Section>
        <Spacer size="small"/>
        <h3>By Lingua Node</h3>
        <Spacer size="small"/>
        <ul>
          <li>Adjectives</li>
          <li>Nouns</li>
          <li>Questions</li>
          <li>Tenses</li>
          <li>Verbs</li>
        </ul>
      </Section>

    return (
      <Layout title={ title }>
        <ButtonBar
          buttons={ startPoints }
        />
        <Spacer size="small" />
          <ButtonBar
            buttons={ CEFRLevels }
          />
        <SingleColumn>
          { CEFRSection }
          {linguaNodeSection}
          <Section direction="row">
          { <ExcerptList posts={ data.allMarkdownRemark.nodes } innerText="See Post" /> }
          </Section>
        </SingleColumn>
      </Layout>
      
    )
}
  
export const data = graphql`
query get6Posts {
  allMarkdownRemark(limit: 6) {
    nodes {
      frontmatter {
        title
        type
        slug
        mainCategories
        subCategories
        date
        author
        portraitImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        excerpt
      }
    }
  }
}
`
  
export default LearnEnglishPage