import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  postMini,
  imageWrapper 
} from "./PostMini.module.css" 

import LinkBtn from "../clickable/buttons-links/LinkBtn"

const PostMini = ( { post, ...props } ) => {

  const { frontmatter } = post
  const { title, slug, landscapeImage, alt } = frontmatter

  const innerText = props.innerText

  return (
    <div className={ postMini }>
      <h4>{ title }</h4>
      <div className={ imageWrapper }>
      <GatsbyImage image={ getImage( landscapeImage ) } alt={ alt } />
      </div>
      <LinkBtn link={ slug } innerText={ innerText }></LinkBtn>
    </div>
  )
}

export default PostMini