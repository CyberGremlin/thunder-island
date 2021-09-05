import * as React from "react"
import {
  excerptCards, 
  excerptCard,
  imageWrapper,
  textWrapper,
  grid
} from "../styles/Excerpts.module.css"
import Button from "./Button"

import image from "../static/profile.jpg"
import { excerpts } from "../static/excerpts"

const Excerpts = (  ) => {

  const generatedExcerpts = excerpts.map( (item, index)=> {
    return (
        <article className={ excerptCard } key={ index }>
        <h3>{ item.title }</h3>
        <h4>The Categories</h4>
          <div className={ grid }>
            <div className={ imageWrapper }>
              <img src={ image } alt={ item.alt } />
            </div>
            <div className={textWrapper}>
              <p>{ item.excerpt }</p>
              <Button btnText="Read More" />
            </div>
          </div>
        </article>
    )
    })
  
  return (
     <div className={ excerptCards }>
    {generatedExcerpts}
    </div>
  )
}

export default Excerpts
