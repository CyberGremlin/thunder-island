import * as React from "react"
import { graphql } from "gatsby"

import {
  pageTitle,
  blog,
  left,
  right
} from "../styles/Blog.module.css"

import Navbar from "../components/Navbar"
import Header from "../components/Header" 
import Spacer from "../components/Spacer"
import PostingSmall from "../components/PostingSmall"
import PostingMedium from "../components/PostingMedium"
import Pagination from "../components/Pagination"
import Footer from "../components/Footer"

const Blog = ( { data } ) => {

  const generateMainPosts = data.allWpPost.nodes.map( ( item, index ) => (
    <>
      <PostingMedium showDate showAuthor hasPhotographer showSubCategories post={ item } innerText="Continue..." key={ index } />
      <Spacer size="small" />
    </>
    ))

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
      <h2 className={ pageTitle }>Blog</h2>
      <Spacer size="medium" />
      <div className={ blog }>
        <div className={ left }>
          <main>
            { generateMainPosts }
          </main>  
        </div>
        <div className={ right }>
          <aside>
            <h3>Popular Posts</h3>
              { generateAsidePosts }
            </aside>
        </div>
        <Pagination />
      </div>
      <Spacer size="small" />
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

export default Blog