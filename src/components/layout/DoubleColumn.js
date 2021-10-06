import React from "react"

import {
  twoCol,
  left,
  right,
  lower,
  asideHeading,
  lowerHeading
} from "./DoubleColumn.module.css"

import Profile from "../posts/Profile"
import PostMini from "../posts/PostMini"
import PostSmall from "../posts/PostSmall"
import PostMedium from "../posts/PostMedium"
import Pagination from "../clickable/pagination/Pagination"
import Spacer from "./Spacer"


const DoubleColumn = () => {

    const assignTo = this.props.assignTo
    const mainData = this.props.mainData
    const asideData = this.props.asideData
    const lowerData = this.props.lowerData

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
  
    const multiPage = <Pagination />
  
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
  
  const generateLowerHeading = ( assignTo === "profile" ) ?
    <header className={ lowerHeading }>
      <h3>Other Posts</h3>
      <address rel="author">by { mainData.frontmatter.author } </address>
      <Spacer size="small" />
    </header>
    :
    <header className={ lowerHeading } >
      <h3>Other Posts</h3>
      <Spacer size="small" />
    </header>
  
  const generateLower =
            lowerData.slice(0, 3).map( ( item, index ) => (
              <div key={ index }>
                <PostMini post={ item } innerText="Read More" />
              </div>
            ) )
    
    return (
    <>
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
      { multiPage }
      </div>
      <Spacer size="medium" />
      { generateLowerHeading}
      <div className={ lower }>
        { generateLower }
    </div>
    </>
  )
  }

export default DoubleColumn
