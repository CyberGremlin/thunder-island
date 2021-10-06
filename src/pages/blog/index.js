import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import DoubleColumn from "../../components/layout/DoubleColumn"

const BlogPage = ( { data } ) => {

  const title = "Blog"
  const assignData = "posts"
  const mainData = data.allMarkdownRemark.nodes
  const asideData = data.allMarkdownRemark.nodes
  const lowerData = data.allMarkdownRemark.nodes

  return (
    <Layout title={ title }>
      <DoubleColumn
        assignedData={ assignData }
        mainData={ mainData }
        asideData={ asideData }
        lowerData={ lowerData }
      />
    </Layout>
  )
}

export const data = graphql`
query getBlogPosts {
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
        landscapeImage {
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

export default BlogPage