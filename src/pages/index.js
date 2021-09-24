import * as React from "react"

import { graphql } from "gatsby"

import "../styles/globalStyles.css"

import Layout from "../components/layout/Layout"
import SingleColumn from "../components/layout/SingleColumn"
import Spacer from "../components/layout/Spacer"
import Section from "../components/layout/Section"
import ButtonGrid from "../components/clickable/button-grid/ButtonGrid"
import ExcerptList from "../components/posts/ExcerptList"

//replace with data from mdx
import { promoted } from "../data/promoted"

const IndexPage = ( { data } ) => {
  
  const boxInfoData = promoted
  const postsData = data.allWpPost.nodes

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
query getHomePagePosts {
  allWpPost(limit: 6, sort: {fields: date, order: DESC}) {
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

export default IndexPage
