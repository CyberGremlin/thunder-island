import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  postSmall,
  imageWrapper
} from "./PostSmall.module.css"

import LinkBtn from "../clickable/buttons-links/LinkBtn"

const PostSmall = ( { post, ...props } ) => {
  
  const title = post.title
  const link = post.link
  const src = post.src
  const alt = post.alt
  const innerText = props.innerText

  return(
    <div className={ postSmall }>
      <h4>{ title }</h4>
      <div className={ imageWrapper }>
        <StaticImage src="../../images/bacon-and-eggs-small.png" alt={ alt } />
      </div>
      <LinkBtn link={ link } innerText={ innerText }></LinkBtn>
    </div>
  )
}

export default PostSmall