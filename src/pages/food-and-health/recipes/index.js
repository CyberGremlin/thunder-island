import React, { useContext } from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout/Layout"
import SingleColumn from "../../../components/layout/SingleColumn"
import Spacer from "../../../components/layout/Spacer"
import Section from "../../../components/layout/Section"
import Breadcrumbs from "../../../components/clickable/breadcrumbs/BreadCrumbs"
import PostMedium from "../../../components/posts/PostMedium"
import Pagination from "../../../components/clickable/pagination/Pagination"

import { recipeTags, dietTags, ingredientTags, courseTags } from "../../../api/pageHeirarchy"

import { StateContext } from "../../../context/ContextProvider"

const Recipes = ( { data } ) => {

  const title = "Recipes"
  const state = useContext( StateContext )
  const mainData = data.allMarkdownRemark.nodes

  const generateMainData =  mainData.map( ( item, index ) => (
            <div key={ index } >
              <PostMedium showDate showAuthor hasPhotographer showSubCategories post={ item } innerText="Continue..." />
              <Spacer size="small" />
            </div>
          ) )
  
  return (
    <Layout title={ title }>
      <Breadcrumbs crumbs={ recipeTags }/>
      <SingleColumn>  
        <Section>
          <Spacer size="small"/>
          {
            state.views.indexOf("by-diet") !== -1 &&
              <>
                <Spacer size="small" />
                <Breadcrumbs crumbs={ dietTags } />
              </>
          }
          {
            state.views.indexOf("by-ingredient") !== -1 &&
              <>
                <Spacer size="small" />
                <Breadcrumbs crumbs={ ingredientTags } />
              </>
          }
          {
            state.views.indexOf("by-course") !== -1 &&
              <>
                <Spacer size="small" />
                <Breadcrumbs crumbs={ courseTags } />
              </>
          }
        </Section>
      </SingleColumn>
      <SingleColumn>
        <Spacer size="large" />
        <Section>
          { generateMainData }
        </Section>
      </SingleColumn>
      <Pagination />
      </Layout>
  )
}

export const data = graphql`
query getRecipePosts {
  allMarkdownRemark(filter: {frontmatter: {type: {in: "recipe"} }}, limit: 8) {
   nodes {
      id
      frontmatter {
        title
        xid
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
export default Recipes