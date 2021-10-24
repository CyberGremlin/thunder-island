import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout/Layout"
import SingleColumn from "../../../components/layout/SingleColumn"
import Spacer from "../../../components/layout/Spacer"
import Section from "../../../components/layout/Section"
import PostMedium from "../../../components/posts/PostMedium"
import Pagination from "../../../components/clickable/pagination/Pagination"

const Health = ( { data } ) => {
  
  const mainData = data.allMarkdownRemark.nodes  
  const title = "Health"
  const generateMain =  mainData.map( ( item, index ) => {
    return (
                    <div key={ index } >
                      <PostMedium showDate showAuthor hasPhotographer showSubCategories post={ item } innerText="Continue..." />
                      <Spacer size="small" />
                    </div>
    )            
  } )
  
  return (
    <Layout title={ title }>
      <SingleColumn>
        <Section direction="column">
          { generateMain }
        </Section>
      </SingleColumn>
      <Pagination /> 
    </Layout>
  )
}

export default Health

export const data = graphql`
query getHealthPosts {
  allMarkdownRemark(
    limit: 4
    filter: {frontmatter: {subcategories: {in: "Health"}}}
  ) {
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