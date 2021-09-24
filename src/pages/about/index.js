import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import DoubleColumn from "../../components/layout/DoubleColumn"
 

const AboutPage = () => {

  const data = useStaticQuery( graphql`
query getAuthorAndPosts {
  allMarkdownRemark(filter: {id: {eq: "04d8e9be-40b1-533f-83bb-ed723c4115bb"}}) {
    nodes {
      frontmatter {
        title
        mainCategory
        author
        authorId
        slug
        date
        src
        alt
        excerpt
        photographer
      }
      html
    }
  }
  allWpPost(filter: {author: {node: {id: {eq: "dXNlcjox"}}}}) {
    nodes {
      slug
      title
      excerpt
    }
  }
}
  `)
  const { allMarkdownRemark } = data
  console.log(data)
  const { frontmatter, html } = allMarkdownRemark.nodes[ 0 ]
  
  const title = "About"
  const assignTo = "profile"
  const mainData = {
    frontmatter,
    html
  }
  const asideData = data.allWpPost.nodes
  const lowerData = data.allWpPost.nodes

  return (
    <Layout title={title}>
      <DoubleColumn assignTo={ assignTo } mainData={ mainData } asideData={ asideData } lowerData= { lowerData } />
    </Layout>
  )
}

export default AboutPage
