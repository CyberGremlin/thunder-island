import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import SingleColumn from "../components/layout/SingleColumn"
import Spacer from "../components/layout/Spacer"
import Section from "../components/layout/Section"
import ButtonGrid from "../components/clickable/button-grid/ButtonGrid"
import ExcerptList from "../components/display/ExcerptList"
import Pagination from "../components/clickable/pagination/Pagination"

const IndexPage = ( { data } ) => {

  const indexPageMenu = [
    {
      link: "/portfolios/web-development",
      name: "Web Development",
      bg: "../../../../static/images/web-dev-bg.png"
    },
    {
      link: "/portfolios/writing",
      name: "Writing",
      bg: "../../../../static/images/writing-bg.png"
    },
    {
      link: "/food-and-health/recipes",
      name: "Recipes",
      bg: "../../../../static/images/recipes-bg.png"

    },
    {
      link: "/portfolios/expats-in-malta/photographs",
      name: "Photographs",
      bg: "../../../../static/images/photography-bg.png"
    },
    {
      link: "/food-and-health/health",
      name: "Health",
      bg: "../../../../static/images/health-bg.png"
    },
    {
      link: "/learn-english",
      name: "Learn English",
      bg: "../../../../static/images/learn-english-bg.png"
    }
]
  
  const postsData = data.allMarkdownRemark.nodes
  
  return (
      <Layout>
      <SingleColumn>
        <Section>
          <ButtonGrid data={ indexPageMenu  }/>
        </Section>
        <Spacer size="large" />
        <Section direction="column">
          <ExcerptList posts={ postsData } innerText="Read More" showSubcategories />
        </Section>
      </SingleColumn>
      <Pagination />
      </Layout>
  )
}

export const data = graphql`
query getFrontPagePosts {
  allMarkdownRemark(limit: 6, filter: {frontmatter: {type: {nin: "profile"}}}) {
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
        alt
        excerpt
      }
    }
  }
}
`

export default IndexPage
