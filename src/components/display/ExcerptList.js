import * as React from "react"
import {
  excerptList, 
} from "./ExcerptList.module.css"

import PostMedium from "../posts/PostMedium"

const ExcerptList = ( { posts, ...props } ) => {

  const { innerText, showSubcategories, showDate, showAuthor } = props

  const generatedExcerpts = posts.map( (item, index)=> {
    return (
      <PostMedium
        post={ item }
        key={ index }
        innerText={ innerText }
        showSubcategories={ showSubcategories }
        showDate={ showDate }
        showAuthor={ showAuthor }
      />
    )
    })
  
  return (
    <div className={ excerptList }>
      {generatedExcerpts}
    </div>
  )
}

export default ExcerptList
