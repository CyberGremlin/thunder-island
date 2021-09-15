import * as React from "react"

import LinkBtn from "./LinkBtn"

const PostingMini = ( { post, ...props } ) => {

  const title = post.title
  const src = post.src
  const alt = post.alt
  const link = post.link
  const innerText = props.innerText

  return (
    <div>
      <h4>{ title }</h4>
      <img src={ src } alt={ alt } />
      <LinkBtn link={ link } innerText={ innerText }></LinkBtn>
    </div>
  )
}

export default PostingMini