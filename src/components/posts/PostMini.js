import * as React from "react"

import {
 postMini 
} from "./PostMini.module.css" 

import LinkBtn from "../clickable/buttons-links/LinkBtn"

const PostMini = ( { post, ...props } ) => {

  const title = post.title
  const src = post.src
  const alt = post.alt
  const link = post.link
  const innerText = props.innerText

  return (
    <div className={ postMini }>
      <h4>{ title }</h4>
      <img src={ src } alt={ alt } />
      <LinkBtn link={ link } innerText={ innerText }></LinkBtn>
    </div>
  )
}

export default PostMini