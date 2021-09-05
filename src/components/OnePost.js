import * as React from "react"
import {
  post,
  borderDiv,
  grid
} from "../styles/OnePost.module.css"

import Section from "./Section"
import SpacerSmall from "./Spacer"
import Button from "./Button"

import imageSrc from "../static/Discover.jpg"
import { postExample } from "../static/postExample"

const OnePost = (  ) => {
  
  const categories = postExample[ 0 ].categories.map( ( item, index ) => <span key={ index }>| { item } |</span> )
  
  return (
    <div className={ post }>
      <div className={ grid }>
        <div>
          <main>
            <h2>{ postExample[ 0 ].mainCategory }</h2>
            <div className={ borderDiv }>
              <Section direction="column">
                <img src={ imageSrc } alt="recipe post" />
                <h1>{ postExample[ 0 ].title }</h1>
                <h3>{ categories }</h3>
                <p>{ postExample[0].content }</p>
              </Section>
            </div>
          </main>
        </div>
        <div>
          <aside>
            <div>
              <h3>Side Dishes</h3>
              <h4>{ postExample[ 0 ].mainCategory }</h4>
              <img src={ imageSrc } alt="recipe post" />
              <Button btnText="Add This"></Button>
            </div>
            <SpacerSmall />
            <div>
              <h4>{ postExample[ 0 ].mainCategory }</h4>
              <img src={ imageSrc } alt="recipe post" />
              <Button btnText="Add This"></Button>
            </div>
            <SpacerSmall />
            <div>
              <h4>{ postExample[ 0 ].mainCategory }</h4>
              <img src={ imageSrc } alt="recipe post" />
              <Button btnText="Add This"></Button>
            </div>
          </aside>
        </div>
      </div>
      <h3>Or...</h3>
      <Section direction="row">
        <div>
          <h4>{ postExample[ 0 ].mainCategory }</h4>
          <img src={ imageSrc } alt="recipe post" />
          <Button btnText="Try This"></Button>
        </div>
        <div>
          <h4>{ postExample[ 0 ].mainCategory }</h4>
          <img src={ imageSrc } alt="recipe post" />
          <Button btnText="Try This"></Button>
        </div>
        <div>
          <h4>{ postExample[ 0 ].mainCategory }</h4>
          <img src={ imageSrc } alt="recipe post" />
          <Button btnText="Try This"></Button>
        </div>
      </Section>
    </div>
  )
}

export default OnePost

