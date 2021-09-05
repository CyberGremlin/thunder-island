import * as React from "react"
import {
  postsCards, 
  postCard,
  imageWrapper,
  textWrapper,
  grid
} from "../styles/Posts.module.css"
import Button from "./Button"

import image from "../static/profile.jpg"
import { excerpts } from "../static/excerpts"

const Posts = ( ) => {

  const allPosts = excerpts;

  const generatedPosts = allPosts.map( (item, index)=> {
    return (
        <article className={ postCard } key={ index }>
        <h3>{ item.title }</h3>
        <h4>The Categories</h4>
          <div className={ grid }>
            <div className={ imageWrapper }>
              <img src={ image } alt={ item.alt } />
            </div>
            <div className={textWrapper}>
              <p>{ item.excerpt }</p>
              <Button btnText="See Post" />
            </div>
          </div>
        </article>
    )
    })
  
  return (
     <div className={ postsCards }>
    {generatedPosts}
    </div>
  )
}

export default Posts