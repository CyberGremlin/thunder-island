import * as React from "react"

import {
  bar,
  isActive
} from "../styles/NavbarAnchors.module.css"

const ButtonBar = ( { buttons }) => {

  
  const generateButtons = buttons.map( ( button, index ) => {
    return (
      <button key={ index } onClick={ onClickFunc } className={ isActive } >{ button }</button>
    )
  })

  return (
    <nav className={ bar }>
      <div>
        { generateButtons }
      </div>
    </nav>
  )

}

export default ButtonBar