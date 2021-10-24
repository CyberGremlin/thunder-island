import React, { useReducer, createContext } from "react"
import { compareSentence, titleSentence } from "../api/sharedFuncs"

export const StateContext = createContext()
export const DispatchContext = createContext()

const initialState = {
  loggedIn: false,
  user: "Jon Doe",
  views: [],
  post: "",
  recipes: []
}

function reducer ( state, action ) {
  switch ( action.type ) {
    case "login": {
      return {
        ...state,
        loggedIn: !state.loggedIn
      }
    }
    case "toggle_view": {
      const newViews = state.views.indexOf( action.payload ) === -1 ? [ ...state.views, action.payload ] : state.views.filter( view => view !== action.payload ? view : null )
      return {
        ...state,
        views: newViews
      }
     
    }
    case "select_post": {
      return {
        ...state,
        post: compareSentence(action.payload)
      }
    }
    case "select_recipe": {
      const newRecipes = state.recipes.indexOf( action.payload ) === -1 ? [ ...state.recipes, action.payload ] : state.recipes.filter( recipe => recipe !== action.payload ? recipe : null )
      return {
        ...state,
       recipes: newRecipes
      }
    }
       default:
      throw new Error("Bad Action in auth")
  }
}

const ContextProvider = ( { children } ) => {

const [ state, dispatch ] = useReducer( reducer, initialState )

  return (
    <StateContext.Provider value={ state }>
      <DispatchContext.Provider value={ dispatch }>
          { children }
        </DispatchContext.Provider>
      </StateContext.Provider>
  )
}

export default ContextProvider
