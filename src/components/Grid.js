import * as React from "react"
import {
  grid
} from "../styles/Grid.module.css"

import LinkBtn from "./LinkBtn"

const Grid = ( { boxInfo }) => {

  const renderedBoxes = boxInfo.map( (skill, index) => {
    return (
     <div key={ index }><LinkBtn innerText={ skill } /></div>
   ) 
  })
  return (
    <div className={grid}>
      { renderedBoxes }
    </div>
  )
}

export default Grid