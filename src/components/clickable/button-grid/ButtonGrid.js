import * as React from "react"
import {
  btnGrid,
  duo,
  tri
} from "./ButtonGrid.module.css"

import LinkBtn from "../buttons-links/LinkBtn"

const ButtonGrid = ( { boxInfo }) => {
  const renderedBoxes = boxInfo.map( (skill, index) => {
    return (
     <div key={ index }><LinkBtn innerText={ skill } /></div>
   ) 
  } )

  const fractionStyle = boxInfo.length <= 2 ? duo: tri
  
  return (
    <div className={ `${ btnGrid } ${ fractionStyle }` }>
      { renderedBoxes }
    </div>
  )
}

export default ButtonGrid