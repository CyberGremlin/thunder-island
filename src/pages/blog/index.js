import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import DoubleColumn from "../../components/layout/DoubleColumn"


const BlogPage = ( { data } ) => {

  const title = "Blog"
  const assignData = "posts"
  const mainData = data.allWpPost.nodes
  const asideData = data.allWpPost.nodes
  const lowerData = data.allWpPost.nodes

  return (
    <Layout title={title}>
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
query getBlogPagePosts {
  allWpPost(sort: {fields: date, order: DESC}, limit: 8) {
    nodes {
      title
      categories {
        nodes {
          name
        }
      }
      slug
      excerpt
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
}
`


export default BlogPage