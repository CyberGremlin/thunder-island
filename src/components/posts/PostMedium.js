import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  postMedium,
  row,
  imageWrapper,
  textWrapper,
 } from "./PostMedium.module.css"

import LinkBtn from "../clickable/buttons-links/LinkBtn"

const PostMedium = ( { post, ...props } ) => {
  
  const innerText = props.innerText ? props.innerText : "See More"
  
  const { title, date, slug, author, excerpt } = post

  const mainCategory = post.categories.nodes.map( ( category, index ) => {
    return (
      <h4 key={ index } >{ category.name }</h4>
  )
  } ).filter( catName => catName === "Food and Health" || catName === "Learn English" || catName === "Portfolios" )
  
  const subCategories = post.categories.nodes.map( ( category, index ) => {
    return (
      <h4 index={ index }>{ category.name }</h4>
    )
  } ).filter( catName => catName !== "Food and Health" || catName !== "Learn English" || catName !== "Portfolios" )

  const { featuredImage } = post
  
  const generatedImage = featuredImage ? 
          <div className={ imageWrapper }>
            <GatsbyImage image={ getImage(post.featuredImage.node.localFile) } alt={ featuredImage.node.altText } />
            { props.hasPhotographer && featuredImage.node.author.node.name ? <cite>photo by { featuredImage.node.author.node.name }</cite> : null }
          </div>
   : null
    return (
    <article className={ postMedium }>
      <div>
        <h3>{ title }</h3>
        <h4>{ mainCategory }</h4> 
        { props.showSubCategories && subCategories }
        { props.showDate && <time datetime={ date }> { date } </time> }
        { props.showAuthor && <address rel="author">{ author }</address> }
        </div>
        <div className={ row }>
          { generatedImage }
          <div className={ textWrapper }>
            <p>{ excerpt }</p>
          </div>
        </div>
      <div className={ row }>
        <LinkBtn to={ slug } innerText={ innerText } />
      </div>
      </article>
    )
  }

export default PostMedium