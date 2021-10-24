import React from "react"

import {
  twoCol,
  left,
  right,
  asideHeading
} from "./DoubleColumn.module.css"

import Profile from "../posts/Profile"
import PostSmall from "../posts/PostSmall"
import PostMedium from "../posts/PostMedium"
import Spacer from "./Spacer"


const DoubleColumn = ( { assignTo, mainData, asideData } ) => {

 const generateMain =
    ( assignTo === "profile" ) ?
      <Profile person={ mainData } ></Profile>
      :
      mainData.map( ( item, index ) => (
                  <div key={ index } >
                    <PostMedium showDate showAuthor hasPhotographer showSubCategories post={ item } innerText="Continue..." />
                    <Spacer size="small" />
                  </div>
      ) )
  
  const generateAsideHeading = ( assignTo === "profile" ) ?
    <header className={ asideHeading }>
      <h3>Popular Posts</h3>
      <address rel="author">by { mainData.frontmatter.author } </address>
    </header>
    :
    <header className={ asideHeading }>
      <h3>Popular Posts</h3>
    </header>
  
  const generateAside = 
    asideData.map( ( item, index ) => (
            <>
              <div key={ index }>
                <PostSmall post={ item } innerText="Read More" />
              </div>
              <Spacer key={ `space-${index}` }size="small" />
            </>
    ) )
    
    return (
      <div className={ twoCol }>
        <div className={ left }>
        <main>
          { generateMain }
          </main>  
        </div>
        <div className={ right }>
          <aside>
            { generateAsideHeading }
            { generateAside }
          </aside>
        </div>
      </div>
  )
  }

export default DoubleColumn
