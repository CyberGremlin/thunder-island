import React from "react"

import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  row,
  recipe,
  excerptWrapper,
  recipeCard,
  recipeCardHeading,
  recipeCardBody
} from "./recipe.module.css"

import Layout from "../components/layout/Layout"
import SingleColumn from "../components/layout/SingleColumn"
import LinkBtn from "../components/clickable/buttons-links/LinkBtn"

const Recipe = ( { data } ) => {

  const { title, slug, tags, date, author, landscapeImage, pin, alt, photographer, comments, excerpt } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  const image = getImage( landscapeImage )
  const innerText = "Go Back"
  const generateTags = tags.map( ( tag, index ) => index === 0 ? <span>| { tag } | </span> : index === tags.length - 1 ? <span>{ tag } |</span> : <span>{tag} |</span>)
  const commentForm = comments === true ? 
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Comment" />
      <button>Submit</button>
    </form >
    : null
  
  return (
    <Layout title={ title }>
      <SingleColumn>
        <article className={ recipe }>
          <time datetime={ date }> { date } </time>
          <address rel="author">recipe by { author }</address> 
          <GatsbyImage image={image} alt={alt} />
          <cite>photo by { photographer }</cite>
          <h6>{ generateTags }</h6>
          <div className={ excerptWrapper }>
            <p>{ excerpt }</p>
          </div>

          <div className={ recipeCard }>
            <div className={ recipeCardHeading }>
              <GatsbyImage image={image} alt={alt} />
              <h2>{ title }</h2>
            </div>
            <div className={ recipeCardBody } dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          <div className={ row }>
            <LinkBtn to={ slug } innerText={ innerText } />
          </div>
        </article>
          { commentForm }
      </SingleColumn>
    </Layout>
  )
}

export default Recipe

export const data = graphql`
query recipeQuery( $id: String ){
  markdownRemark( id: {eq: $id} ) {
    frontmatter {
      title
      xid
      slug
      tags
      date
      author
      landscapeImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      pin {
        childImageSharp {
          gatsbyImageData
        }
      }
      alt
      photographer
      comments
      excerpt
    }
    html
  }
}
`