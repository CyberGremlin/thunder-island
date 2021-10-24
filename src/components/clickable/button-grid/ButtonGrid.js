import React, { useContext } from "react"

import { navigate } from "gatsby"

import {
  btnGrid,
  duo,
  tri
} from "./ButtonGrid.module.css"

import Button from "../buttons-links/Button"

import photographyBg from "../../../../static/images/photography-bg.png"

import { DispatchContext } from "../../../context/ContextProvider"

import { compareSentence } from "../../../api/sharedFuncs"
import { topLevelPages, secondLevelPages } from "../../../api/pageHeirarchy"

const ButtonGrid = ( { data } ) => {

  const dispatch = useContext( DispatchContext )
  const nonViews = [ ...topLevelPages, ...secondLevelPages ]

  const renderedBoxes = data.map( ( obj, index ) => {
    const bg = {
      background: `url(${ photographyBg })`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
    return (
      <div
        style={ bg }
        key={ index }>
        <Button innerText={ obj.name }
          role="link"
          onClick={ () => {
            compareSentence( obj.name ).indexOf( nonViews ) !== -1 ? dispatch( { type: "toggle_view", payload: obj.name } ) : navigate( obj.link )
          } } />
      </div>
   ) 
  } )

  const fractionStyle = data.length <= 2 ? duo: tri
  
  return (
    <div className={ `${ btnGrid } ${ fractionStyle }` }>
      { renderedBoxes }
    </div>
  )
}

export default ButtonGrid