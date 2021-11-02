import React, { useContext } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  postMedium,
  row,
  imageWrapper,
  textWrapper,
 } from "./PostMedium.module.css"

import Button from "../clickable/buttons-links/Button"

import {  DispatchContext } from "../../context/ContextProvider"

const PostMedium = ( { post, ...props } ) => {

  const dispatch = useContext( DispatchContext )

  const innerText = props.innerText ? props.innerText : "See More"
  const { id, frontmatter } = post
  const { title, type, slug, mainCategories, subcategories, date, author, portraitImage, alt, photographer, excerpt } = frontmatter
  const mainCats = mainCategories.map( ( category, index ) => {
    return (
      <h4 key={ index } >{ category.name }</h4>
  )
  } )
  
  const subCats = subcategories.map( ( category, index ) => {
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
        { props.showSubcategories && subCats }
        { props.showAuthor && <address rel="author">{ author }</address> }
        </div>
        <div className={ row }>
          { generatedImage }
          <div className={ textWrapper }>
            <p>{ excerpt }</p>
          </div>
        </div>
      <div className={ row }>
          <Button onClick={
            type.indexOf( "recipe" ) === -1 ?
              () => { dispatch( { type: "select_post", payload: id } ) } :
              () => { dispatch( { type: "select_recipe", payload: id })}
            } innerText={ innerText } />
      </div>
      </article>
    )
  }

export default PostMedium