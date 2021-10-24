import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import DoubleColumn from "../../components/layout/DoubleColumn"

const AboutPage = ( { data } ) => {

  const { authors, posts } = data
  const { frontmatter, html } = authors
  const title = "About"
  const assignTo = "profile"
  const mainData = {
    frontmatter,
    html
  }
  const asideData = posts.nodes

  return (
    <Layout title={title}>
      <DoubleColumn assignTo={ assignTo } mainData={ mainData } asideData={ asideData } />
    </Layout>
  )
}

export default AboutPage

export const data = graphql`
query getAuthorPosts {
 authors: markdownRemark(frontmatter: {type: {eq: "profile"}}) {
    frontmatter {
      title
      slug
      portraitImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      alt
    }
    html
  }
 posts: allMarkdownRemark(limit: 4, filter: {frontmatter: {type: {eq: "post"}}}) {
    nodes {
      frontmatter {
        title
        type
        slug
        mainCategories
        subcategories
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
