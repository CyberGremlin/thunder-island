import * as React from "react"
import { graphql } from "gatsby"

import "../styles/globalStyles.css"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Spacer from "../components/Spacer"
import Section from "../components/Section"
import Grid from "../components/Grid"
import Excerpts from "../components/Excerpts"
import Footer from "../components/Footer"

//replace with data from backend
import { skills } from "../data/boxInfo"

//hook for gatsby cloud https://webhook.gatsbyjs.com/hooks/data_source/29fa14d0-6c60-4c62-a893-d5d853f4b9cc?

const IndexPage = ( { data }) => {
  return (
    <>
      <Navbar />
      <Header />
      <Spacer size="large" />
      <main>
        <Section>
          <Grid boxInfo={ skills }/>
        </Section>
        <Spacer size="large" />
        <Section direction="row">
          <Excerpts posts={ data.allWpPost.nodes } innerText="Read More" />
        </Section>
        <Spacer size="large" />
      </main>
      <Spacer size="large" />
      <Footer />
    </>
  )
}

export const get6Posts = graphql`
query {
  allWpPost(limit: 6) {
    nodes {
      author {
        node {
          name
        }
      }
      id
      slug
      date
      title
      excerpt
      categories {
        nodes {
          name
        }
      }
    }
  }
}
`

export default IndexPage
