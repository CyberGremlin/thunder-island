import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import DoubleColumn from "../../components/layout/DoubleColumn"
import Pagination from "../../components/clickable/pagination/Pagination"
import Carousel from "../../components/display/Carousel"

const BlogPage = ( { data } ) => {

  const title = "Blog"
  const assignTo = "posts"
  const mainData = data.allMarkdownRemark.nodes
  const asideData = data.allMarkdownRemark.nodes
  const carouselData = data.allMarkdownRemark.nodes

  return (
    <Layout title={ title }>
      <DoubleColumn
        assignTo={ assignTo }
        mainData={ mainData }
        asideData={ asideData }
      />
      <Pagination />
      <Carousel assignTo={ assignTo } data={ carouselData }/>
    </Layout>
  )
}

export const data = graphql`
query getBlogPosts {
  allMarkdownRemark(limit: 8, filter: {frontmatter: {type: {eq: "post"}}}) {
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

export default BlogPage