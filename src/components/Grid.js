import * as React from "react"
import {
  grid
} from "../styles/Grid.module.css"
import Button from "./Button"

const Grid = ( { boxInfo }) => {

  const renderedBoxes = boxInfo.map( (skill, index) => {
    return (
     <div key={ index }><Button btnText={ skill } ></Button></div>
   ) 
  })
  return (
    <div className={grid}>
      { renderedBoxes }
    </div>
  )
}

export default Grid