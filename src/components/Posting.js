import * as React from "react"
import {
  posting,
  borderDiv,
  grid
} from "../styles/Posting.module.css"

import Section from "./Section"
import Spacer from "./Spacer"
import PostingSmall from "./PostingSmall"
import PostingMini from "./PostingMini"

import { postExamples } from "../data/postExamples"

const Posting = (  ) => {
  
  const categories = postExamples[ 0 ].categories.map( ( item, index ) => <span key={ index }>| { item } |</span> )

  const generateSidePostings = postExamples.map( ( item, index ) => {
    return (
      <>
        <PostingSmall post={ item } innerText="Add This" key={ index }/>
        <Spacer size="small" />
      </>
    )
  })
  
  return (
    <div className={ posting }>
      <div className={ grid }>
        <div>
          <main>
            <h2>{ postExamples[ 0 ].mainCategory }</h2>
            <div className={ borderDiv }>
              <Section direction="column">
                <img src={ postExamples[ 0 ].src } alt={ postExamples[ 0 ].alt } />
                <h1>{ postExamples[ 0 ].title }</h1>
                <h3>{ categories }</h3>
                <p>{ postExamples[0].content }</p>
              </Section>
            </div>
          </main>
        </div>
        <div>
          <aside>
            <div>
              <h3>Side Dishes</h3>
              { generateSidePostings }
            </div>
          </aside>
        </div>
      </div>
      <h3>Or...</h3>
      <Section direction="row">
        <PostingMini post={ postExamples[ 0 ]} btnText="Try This"/>
        <PostingMini post={ postExamples[ 0 ]} btnText="Try This"/>
        <PostingMini post={ postExamples[ 0 ]} btnText="Try This"/>
      </Section>
    </div>
  )
}

export default Posting

