import React from "react"
import { graphql } from "gatsby"

import {
  twoCol,
  left,
  right,
  asideHeading
} from "./index.module.css"

import Layout from "../../components/layout/Layout"
import PostSmall from "../../components/posts/PostSmall"
import Profile from "../../components/posts/Profile"
import Spacer from "../../components/layout/Spacer"

const AboutPage = ( { data } ) => {

  const { authors, posts } = data
  const { frontmatter, html } = authors
  const title = "About"
  const mainData = {
    frontmatter,
    html
  }
  const asideData = posts.nodes

    const generateAside = asideData.map( ( item, index ) => (
            <>
              <div key={ index }>
                <PostSmall post={ item } innerText="Read More" />
              </div>
              <Spacer key={ `space-${index}` }size="small" />
            </>
    ) )

  return (
    <Layout title={title}>
      <div className={ twoCol }>
        <div className={ left }>
        <main>
          <Profile person={ mainData } ></Profile>
          </main>  
        </div>
        <div className={ right }>
          <aside>
            <header className={ asideHeading }>
      <h3>Popular Posts</h3>
      <address rel="author">by { mainData.frontmatter.author } </address>
    </header>
            { generateAside }
          </aside>
        </div>
      </div> 
    </Layout>
  )
}

export default AboutPage

export const data = graphql`
query getAuthorPosts {
 authors: markdownRemark(frontmatter: {type: {eq: "profile"}}) {
    frontmatter {
      title
      slug
      portraitImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      alt
    }
    html
  }
 posts: allMarkdownRemark(limit: 4, filter: {frontmatter: {type: {eq: "post"}}}) {
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
