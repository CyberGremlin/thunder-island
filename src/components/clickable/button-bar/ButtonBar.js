import * as React from "react"

import {
  btnBar,
  isActive
} from "./ButtonBar.module.css"

const ButtonBar = ( { buttons, ...props } ) => {
  
  const generateButtons = buttons.map( ( button, index ) => {
    return (
      <button key={ index } className={ props.chosen === button ? isActive : null } group={ props.group } value={ button } onClick={ ( e ) => props.onClickFunc( e ) } >{ button }</button>
    )
  })

  return (
    <nav className={ btnBar }>
      <div>
        { generateButtons }
      </div>
    </nav>
  )

}

export default ButtonBar