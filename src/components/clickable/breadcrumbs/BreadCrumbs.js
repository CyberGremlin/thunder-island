import React from "react"

import {
  breadcrumbs,
  isActive
} from "./Breadcrumbs.module.css"

const Breadcrumbs = ( { buttons, ...props } ) => {
  
  const generateButtons = buttons.map( ( button, index ) => {

    return (
      <button key={ index } className={ props.chosen === button ? isActive : null } group={ props.group } value={ button } >{ button }</button>
        ) 
      })

  return (
    <nav className={ breadcrumbs }>
      <div>
        { generateButtons }
      </div>
      </nav>
  )

}

export default Breadcrumbs