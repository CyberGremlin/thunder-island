import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  postSmall,
  imageWrapper
} from "./PostSmall.module.css"

import LinkBtn from "../clickable/buttons-links/LinkBtn"

const PostSmall = ( { post, ...props } ) => {
  
  const { frontmatter } = post
  const { title, slug, landscapeImage, alt } = frontmatter

  const innerText = props.innerText

  return(
    <div className={ postSmall }>
      <h4>{ title }</h4>
      <div className={ imageWrapper }>
        <GatsbyImage image={ getImage(landscapeImage) } alt={ alt } />
      </div>
      <LinkBtn link={ slug } innerText={ innerText }></LinkBtn>
    </div>
  )
}

export default PostSmall