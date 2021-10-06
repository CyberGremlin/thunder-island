import React from "react"

import {
  btnGrid,
  duo,
  tri
} from "./ButtonGrid.module.css"

import Button from "../buttons-links/Button"

import photographyBg from "../../../../static/images/photography-bg.png"

const ButtonGrid = ( { boxInfo } ) => {
  
  const renderedBoxes = boxInfo.map( ( obj, index ) => {
    const bg = {
      background: `url(${ photographyBg })`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
    return (
      <div
        style={ bg }
        key={ index }>
        <Button innerText={ obj } />
      </div>
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