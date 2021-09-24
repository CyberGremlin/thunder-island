import * as React from "react"
import {
  excerptList, 
} from "./ExcerptList.module.css"

import PostMedium from "./PostMedium"

const ExcerptList = ( { posts, ...props } ) => {

  const generatedExcerpts = posts.map( (item, index)=> {
    return (
      <PostMedium
        post={ item }
        key={ index }
        innerText={ props.innerText }
        showSubCategories={ props.showSubCategories }
        showDate={ props.showDate }
        showAuthor={ props.showAuthor }
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
