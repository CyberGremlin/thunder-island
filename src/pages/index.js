import * as React from "react"

import { graphql } from "gatsby"

import "../styles/globalStyles.css"

import Layout from "../components/layout/Layout"
import SingleColumn from "../components/layout/SingleColumn"
import Spacer from "../components/layout/Spacer"
import Section from "../components/layout/Section"
import ButtonGrid from "../components/clickable/button-grid/ButtonGrid"
import ExcerptList from "../components/posts/ExcerptList"

//replace with data from md
import { promoted } from "../data/promoted"

const IndexPage = ( { data } ) => {

  const boxInfoData = promoted
  const postsData = data.allMarkdownRemark.nodes
  
  return (
      <Layout>
      <SingleColumn>
         <Section>
          <ButtonGrid boxInfo={ boxInfoData  }/>
        </Section>
        <Spacer size="large" />
        <Section direction="row">
          <ExcerptList posts={ postsData } innerText="Read More" showSubCategories />
        </Section>
      </SingleColumn>
      </Layout>
  )
}

export const data = graphql`
query getFrontPagePosts {
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

export default IndexPage
