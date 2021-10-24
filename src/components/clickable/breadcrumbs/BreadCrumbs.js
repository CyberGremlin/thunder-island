import React, { useContext } from "react"

import {
  breadcrumbs,
  isActive
} from "./Breadcrumbs.module.css"

import { DispatchContext, StateContext } from "../../../context/ContextProvider"

import {compareSentence, titleSentence } from "../../../api/sharedFuncs"

const Breadcrumbs = ( { crumbs } ) => {
  const dispatch = useContext( DispatchContext )
  const state = useContext( StateContext )
  const generateBreadcrumbs = crumbs.map( ( crumb, index ) => {
    let crumbName = typeof(crumb) === "string" ? crumb : crumb.name
    return (
      <button
        key={ index }
        className={ state.views.indexOf( compareSentence( crumbName ) ) !== -1 ? isActive : null }
        onClick={ () => { dispatch( { type: "toggle_view", payload: compareSentence(crumbName) } ) } } >
        { titleSentence( crumbName ) }
    </button>
     )
     })

  return (
    <nav className={ breadcrumbs }>
          <div>
            { generateBreadcrumbs }
          </div>
      </nav>
    
        
  )
}

export default Breadcrumbs