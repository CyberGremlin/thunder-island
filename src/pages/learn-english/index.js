import React, { useContext } from "react"

import {  graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import SingleColumn from "../../components/layout/SingleColumn"

import Spacer from "../../components/layout/Spacer"
import Breadcrumbs from "../../components/clickable/breadcrumbs/Breadcrumbs"
import Section from "../../components/layout/Section"
import ButtonGrid from "../../components/clickable/button-grid/ButtonGrid"
import ExcerptList from "../../components/posts/ExcerptList"

const LearnEnglishPage = ( { data } ) => {

    const title = "Learn English"
    const startPoints = [ "CEFR Level", "Lingua Cluster" ]
    const CEFRLevels = [ "A1", "A2", "B1", "B2", "C1", "C2" ]
    const clusterObjects = ["Lingua Node", "Lingua Nodule", "Lingua Practice"]

    const CEFRSection =
      <Section >
        <Spacer size="small"/>
        <h3>By CEFR Level</h3>
        <Spacer size="small"/>
        <ButtonGrid boxInfo={ CEFRLevels } />
      </Section >
    
    const linguaClusterSection =
      <Section>
        <Spacer size="small"/>
        <h3>By Lingua Cluster</h3>
        <Spacer size="small"/>
        <ul>
          <li>Bake a cake</li>
          <li>Shop for shoes</li>
          <li>Replace her heart</li>
          <li>Treat a fracture</li>
          <li>Perform brain surgery</li>
        </ul>
      </Section>

    return (
        <Layout title={ title }>
        <Breadcrumbs
          buttons={ startPoints }
        />
        <Spacer size="small" />
          <Breadcrumbs
            buttons={ CEFRLevels }
          />
        <SingleColumn>
          { CEFRSection }
          {linguaClusterSection}
          <Section direction="row">
          { <ExcerptList posts={ data.allMarkdownRemark.nodes } innerText="See Post" /> }
          </Section>
        </SingleColumn>
      </Layout>
    )
}
  
export const data = graphql`
query getLearnEnglishPosts {
  allMarkdownRemark(limit: 6, filter: {frontmatter: {type: {nin: "profile"}}}) {
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