import React, { useContext } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  postSmall,
  imageWrapper
} from "./PostSmall.module.css"

import Button from "../clickable/buttons-links/Button"

import { DispatchContext } from "../../context/ContextProvider"

const PostSmall = ( { post, ...props } ) => {

  const dispatch = useContext( DispatchContext )
  
  const { id, frontmatter } = post
  const { title, type, slug, landscapeImage, alt } = frontmatter

  const innerText = props.innerText

  return(
    <div className={ postSmall }>
      <h4>{ title }</h4>
      <div className={ imageWrapper }>
        <GatsbyImage image={ getImage(landscapeImage) } alt={ alt } />
      </div>
      <Button onClick={
        type.indexOf( "recipe" ) === -1 ?
          () => { dispatch( { type: "select_post", payload: id } ) } :
          () => { dispatch( { type: "select_recipe", payload: id }) }
      } innerText={ innerText }></Button>
    </div>
  )
}

export default PostSmall