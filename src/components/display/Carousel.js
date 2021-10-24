import React from "react"

import {
  carousel,
  heading
} from "./Carousel.module.css"

import PostMini from "../posts/PostMini"
import Section from "../layout/Section"
import Spacer from "../layout/Spacer"

const Carousel = ( { data } ) => {

   const generateCarousel =
            data.slice(0, 3).map( ( item, index ) => (
              <div key={ index }>
                <PostMini post={ item } innerText="Read More" />
              </div>
            ) )
  
  return (
    <Section>
      <header className={ heading } >
        <h3>Other Posts</h3>
        <Spacer size="small" />
      </header>
      <div className={ carousel }>
        { generateCarousel }
      </div>
    </Section >
  )
}

export default Carousel