import React from "react"

import {  graphql } from "gatsby"

import Layout from "../../components/layout/Layout"
import SingleColumn from "../../components/layout/SingleColumn"

import Spacer from "../../components/layout/Spacer"
import Breadcrumbs from "../../components/clickable/breadcrumbs/Breadcrumbs"
import Section from "../../components/layout/Section"
import ButtonGrid from "../../components/clickable/button-grid/ButtonGrid"
import ExcerptList from "../../components/display/ExcerptList"
import Pagination from "../../components/clickable/pagination/Pagination"

const LearnEnglishPage = ( { data } ) => {

  const title = "Learn English"
  const starts = [
    {
      link: "/learn-english/cefr",
      name: "CEFR Level",
      bg: "learn-english"
    },
    {
      link: "/learn-english/cluster",
      name: "Lingua Cluster",
      bg: "lingua-cluster"
    }
  ]
  const CEFR = [
    {
      link: "/learn-english/cefr/a1",
      name: "CEFR A1",
      bg: "cefr-a1"
    },
    {
      link: "/learn-english/cefr/a2",
      name: "CEFR A2",
      bg: "cefr-a2"
    },
    {
      link: "/learn-english/cefr/b1",
      name: "CEFR B1",
      bg: "cefr-b1"
    },
    {
      link: "/learn-english/cefr/b2",
      name: "CEFR B2",
      bg: "cefr-b2"
    },
    {
      link: "/learn-english/cefr/c1",
      name: "cefr C1",
      bg: "cefr-c1"
    },
    {
      link: "/learn-english/cefr/c2",
      name: "CEFR C2",
      bg: "cefr-c2"
    },
  ]
  const clusterObjects = [
    {
      link: "/learn-english/cluster/node",
      name: "Lingua Node",
      bg: "lingua-node"
    },
    {
      link: "/learn-english/cluster/nodule",
      name: "Lingua Nodule",
      bg: "lingua-nodule"
    },
    {
      link: "/learn-english/cluster/practice",
      name: "Lingua Practice",
      bg: "lingua-practice"
    }
  ]

    return (
        <Layout title={ title }>
          <Breadcrumbs crumbs={ starts }/>
          <Spacer size="small" />
          <SingleColumn>
            <Section >
              <Spacer size="small"/>
              <h3>By CEFR Level</h3>
              <Spacer size="small"/>
              <ButtonGrid data={ CEFR } />
            </Section >
            <Section>
              <Spacer size="small"/>
              <h3>By Lingua Cluster</h3>
              <Spacer size="small"/>
              <ButtonGrid data={ clusterObjects } />
            </Section>
            <Spacer size="large"/>
            <Section direction="row">
              { <ExcerptList posts={ data.allMarkdownRemark.nodes } innerText="See Post" /> }
            </Section>
          </SingleColumn>
          <Pagination />
        </Layout>
    )
}
  
export const data = graphql`
query getLearnEnglishPosts {
  allMarkdownRemark(limit: 6, filter: {frontmatter: {type: {nin: "profile"}}}) {
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
        alt
        excerpt
      }
    }
  }
}
`
  
export default LearnEnglishPage