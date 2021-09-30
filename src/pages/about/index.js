import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import DoubleColumn from "../../components/layout/DoubleColumn"
 

const AboutPage = ( { data } ) => {
  
  const { allMarkdownRemark } = data
 
  const { frontmatter, html } = allMarkdownRemark.nodes[ 0 ]
  
  const title = "About"
  const assignTo = "profile"
  const mainData = {
    frontmatter,
    html
  }
  const asideData = data.allMarkdownRemark.nodes
  const lowerData = data.allMarkdownRemark.nodes

  return (
    <Layout title={title}>
      <DoubleColumn assignTo={ assignTo } mainData={ mainData } asideData={ asideData } lowerData= { lowerData } />
    </Layout>
  )
}

export const data = graphql`
query getAuthors {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "profile"}}}) {
    nodes {
      frontmatter {
        title
        slug
        mainCategories
        portraitImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
}
`

export default AboutPage
