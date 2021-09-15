import * as React from "react"
import { graphql } from "gatsby"

import {
  pageTitle,
  about,
  right,
  left,
} from "../styles/About.module.css"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Spacer from "../components/Spacer"
import PostingSmall from "../components/PostingSmall"
import Footer from "../components/Footer"
import Profile from "../components/Profile"

import { AboutMe } from "../data/aboutMe"

const About = ( { data } ) => {

  const person = AboutMe[ 0 ]

  const generateAsidePosts = data.allWpPost.nodes.map( (item, index) => (
    <>
      <PostingSmall post={ item } innerText="Read More" key={ index } />
      </>
    ))
  
  return (
    <>
      <Navbar />
      <Header />
      <Spacer size="large" />
      <h2 className={ pageTitle }>About Us</h2>
      <Spacer size="medium" />
      <div className={ about }>
        <div className={ left }>
          <main>
            <Profile person={ person }></Profile>
          </main>  
        </div>
        <div className={ right }>
          <aside>
            <h3>Popular Posts</h3>
            <address rel="author">by { person.name} </address>
              { generateAsidePosts }
            </aside>
        </div>
      </div>
      <Spacer size="large" />
      <Footer />
    </>
  )
}

export const get8Posts = graphql`
query {
  allWpPost(limit: 8) {
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

export default About
