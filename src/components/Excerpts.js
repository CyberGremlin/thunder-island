import * as React from "react"
import {
  excerptList, 
} from "../styles/Excerpts.module.css"

import PostingMedium from "./PostingMedium"

const Excerpts = ( { posts, ...props } ) => {

  const innerText = props.innerText

  const generatedExcerpts = posts.map( (item, index)=> {
    return (
      <PostingMedium post={ item } key={ index } innerText={ innerText }/>
    )
    })
  
  return (
    <div className={ excerptList }>
      {generatedExcerpts}
    </div>
  )
}

export default Excerpts
