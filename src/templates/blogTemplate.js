import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import ColumnWithSide from "../components/layout/ColumnWithSide"
import Pagination from "../components/clickable/pagination/Pagination"
import Carousel from "../components/display/Carousel"

const Blog = ( { data } ) => {

  const title = "Blog"
  const mainData = data.allMarkdownRemark.nodes
  const sideData = data.allMarkdownRemark.nodes
  const carouselData = data.allMarkdownRemark.nodes

  return (
    <Layout title={ title }>
      <ColumnWithSide
        mainData={ mainData }
        sideData={ sideData }
      />
      <Pagination />
      <Carousel data={ carouselData }/>
    </Layout>
  )
}

export default Blog

export const data = graphql`
query getPosts {
  allMarkdownRemark(limit: 8, filter: {frontmatter: {type: {eq: "post"}}}) {
    nodes {
      id
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
