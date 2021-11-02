import React from "react"

import {
  twoCol,
  left,
  right,
  asideHeading
} from "./ColumnWithSide.module.css"

import PostSmall from "../posts/PostSmall"
import PostMedium from "../posts/PostMedium"
import Spacer from "./Spacer"


const ColumnWithSide = ( { mainData, sideData } ) => {

 const generateMain = mainData.map( ( item, index ) => (
                  <div key={ index } >
                    <PostMedium showDate showAuthor hasPhotographer showSubCategories post={ item } innerText="Continue..." />
                    <Spacer size="small" />
                  </div>
 ) )
  
  const generateSide = sideData.map( ( item, index ) => (
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
            <header className={ asideHeading }>
              <h3>Popular Posts</h3>
            </header>
            { generateSide }
          </aside>
        </div>
      </div>
  )
  }

export default ColumnWithSide
