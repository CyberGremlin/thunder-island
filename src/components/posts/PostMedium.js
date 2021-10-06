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
  const { frontmatter } = post
  const { title, slug, mainCategories, subCategories, date, author, portraitImage, alt, photographer, excerpt } = frontmatter

  const mainCats = mainCategories.map( ( category, index ) => {
    return (
      <h4 key={ index } >{ category.name }</h4>
  )
  } )
  
  const subCats = subCategories.map( ( category, index ) => {
    return (
      <h4 key={ index }>{ category.name }</h4>
    )
  } )
  
  const generatedImage = portraitImage ? 
          <div className={ imageWrapper }>
            <GatsbyImage image={ getImage(portraitImage) } alt={ alt } />
            { props.hasPhotographer && photographer !== "" ? <cite>photo by { photographer }</cite> : null }
          </div>
    : null
  
    return (
    <article className={ postMedium }>
        <div>
        { props.showDate && <time dateTime={ date }> { date } </time> }
        <h3>{ title }</h3>
        { mainCats } 
        { props.showSubCategories && subCats }
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